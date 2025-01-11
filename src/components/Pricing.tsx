'use client';

import { redirect } from 'next/navigation';

import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

import { useToast } from '@/context/ToastContext';
import { supabase } from '@/lib/supabase/client';
import AuthService from '@/services/auth';

import Spinner from './Spinner';
import ButtonComponent from './ui/Button';



type Plan = {
    id: 'free' | 'starter' | 'creator' | 'pro';
    name: string;
    priceMonthly: string;
    priceAnnual: string;
    idMonthly?: string;
    idAnnual?: string;
    description: string;
    features: string[];
    extraFeatures: string;
};

const plansBase: Plan[] = [
    {
        id: 'free',
        name: 'Free',
        priceMonthly: '$0/month',
        priceAnnual: '$0/year',
        description: 'Ideal for individuals trying out our service.',
        features: [
            '✔ Access to basic features',
            '✔ 1 project',
        ],
        extraFeatures: '',
    },
];

type PricingProps = {
    selectedOption: 'preview' | 'free' | 'starter' | 'creator' | 'pro';
};

const publicStripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Pricing({ selectedOption }: PricingProps) {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAnnual, setIsAnnual] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>(plansBase);


    useEffect(() => {
        const fetchPlans = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/payments/get-plans');
                const data = await response.json();
                setPlans((prev) => [...prev, ...data]);
            } catch (error) {
                console.error('Erro ao buscar planos:', error);
            }
            setIsLoading(false);
        };

        fetchPlans();
    }, []);

    async function handleCheckout(plan: Plan) {
        const AuthServiceInstance = new AuthService(supabase);
        const user = await AuthServiceInstance.getUserId();
        
        if (plan.id === 'free') {
            console.log('Free plan selected');
            return;
        }

        if (!user) {
            return redirect('/signin');
         }

         
        const stripe = await publicStripePromise;
        setIsLoading(true);
        const priceId = isAnnual ? plan.idAnnual : plan.idMonthly;

        const response = await fetch('/api/payments/create-checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ priceId }),
        });

        const jsonResponse = await response.json();
        const sessionId = jsonResponse.id;
        if (stripe && sessionId) {
            await stripe.redirectToCheckout({ sessionId });
        } else {
            addToast({
                id: Date.now().toString(),
                message: 'Error during Checkout',
                description: 'An error occurred while processing your request. Please try again later.',
                type: 'error',
            });
        }
        setIsLoading(false);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-600">
                Simple and transparent pricing to suit your needs.
            </p>

            <div className="flex items-center justify-end mt-6">
                <span
                    className={`text-sm font-medium ${isAnnual ? 'text-gray-400' : 'text-gray-900'}`}
                >
                    Monthly
                </span>
                <button
                    onClick={() => setIsAnnual((prev) => !prev)}
                    className={`relative inline-flex items-center h-6 w-12 sm:h-5 sm:w-10 rounded-full ${isAnnual ? 'bg-indigo-600' : 'bg-gray-300'
                        } transition-colors duration-200 mx-2`}
                >
                    <span
                        className={`inline-block h-5 w-5 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform duration-200 ${isAnnual ? 'translate-x-6 sm:translate-x-5' : 'translate-x-1'
                            }`}
                    />
                </button>
                <span
                    className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}
                >
                    Annual
                </span>
            </div>
            {isLoading
                ? <Spinner />
                : <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan) => {
                        const isSelected = selectedOption === plan.id;
                        const isMostPopular = plan.id === 'creator';

                        const bgColor = isSelected
                            ? 'bg-gray-50'
                            : isMostPopular
                                ? 'bg-indigo-50'
                                : 'bg-white';

                        const borderColor = isSelected
                            ? 'border-gray-600'
                            : isMostPopular
                                ? 'border-indigo-600'
                                : 'border-gray-200';

                        return (
                            <div
                                key={plan.id}
                                className={`${bgColor} ${borderColor} border rounded-lg shadow-md p-8 relative flex flex-col`}
                            >
                                {isSelected && (
                                    <span className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                        Selected Plan
                                    </span>
                                )}
                                {isMostPopular && !isSelected && (
                                    <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="mt-6 text-4xl font-extrabold text-gray-900">
                                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                </p>
                                <p className="mt-4 text-gray-600">{plan.description}</p>
                                <ButtonComponent
                                    disabled={isSelected}
                                    type="button"
                                    className="mt-6"
                                    onClick={() => handleCheckout(plan)}
                                >
                                    {isSelected ? 'Current Plan' : 'Subscribe'}
                                </ButtonComponent>
                                <ul className="mt-6 space-y-4 text-gray-600 text-left">
                                    {plan.extraFeatures && (
                                        <li className="text-center">
                                            <strong>{plan.extraFeatures}</strong>
                                        </li>
                                    )}
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>}
        </div>
    );
}
