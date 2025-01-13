'use client';

import { redirect } from 'next/navigation';

import { useEffect, useState } from 'react';

import { PlanBase } from '@/constants/Plan';
import { Toast } from '@/contexts/ToastContext';
import { useToast } from "@/hooks/useToast";
import { supabase } from '@/libs/supabase/client';
import SupabaseService from '@/services/supabaseService';
import StripeService from '@/services/stripeService';

import Spinner from '../Spinner';
import PlanCard, { Plan } from './PlanCard';
import Toggle from '../Toggle';


export type PricingProps = {
    selectedOption: 'preview' | 'free' | 'starter' | 'creator' | 'pro';
    hasFreeplan?: boolean;
};

interface CheckoutProps {
    plan: Plan;
    isAnnual: boolean;
    addToast: (toast: Toast) => void;
    setIsLoading: (isLoading: boolean) => void;
}

export default function Pricing({ selectedOption, hasFreeplan = true }: PricingProps) {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAnnual, setIsAnnual] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>(hasFreeplan ? PlanBase : []);

    useEffect(() => {
        fetchPlans();
    }, []);


    async function fetchPlans(): Promise<void> {
        try {
            setIsLoading(true);
            const response = await fetch('/api/payments/get-plans');
            const data: Plan[] = await response.json();
            setPlans((prev: Plan[]) => {
                if (!prev) {
                    return data;
                }
                if (prev.length >= 4) {
                    return [...prev]
                }
                return [...prev, ...data];
            });
        } catch (error) {
            console.error('Erro ao buscar planos:', error);
        }
        setIsLoading(false);
    };

    async function handleCheckout({ plan, isAnnual, addToast, setIsLoading }: CheckoutProps): Promise<void> {
        if (plan.id === 'free') {
            console.log('Free plan selected');
            return;
        }

        setIsLoading(true);
        const SupabaseServiceInstance = new SupabaseService(supabase);
        const user = await SupabaseServiceInstance.getUserId();


        if (!user) {
            return redirect('/signin');
        }

        try {
            const priceId = isAnnual ? plan.idAnnual : plan.idMonthly;

            const response = await fetch('/api/payments/create-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId, plan: plan.id, userId: user }),
            });

            const jsonResponse = await response.json();
            const sessionId = jsonResponse.id;

            if (sessionId) {
                await StripeService.redirectToCheckout(sessionId);
            } else {
                addToast({
                    id: Date.now().toString(),
                    message: 'Error during Checkout',
                    description: 'An error occurred while processing your request. Please try again later.',
                    type: 'error',
                });
            }
        } catch (error) {
            console.error('Error during payment checkout:', error);
            addToast({
                id: Date.now().toString(),
                message: 'Error during Checkout',
                description: 'An error occurred while processing your request. Please try again later.',
                type: 'error',
            });
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-600">
                Simple and transparent pricing to suit your needs.
            </p>

            <Toggle
                labels={{ off: 'Monthly', on: 'Annual' }}
                initialState={false}
                onToggle={setIsAnnual}
            />
            {isLoading
                ? <Spinner />
                : <div className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${plans.length} gap-8`}>
                    {plans.map((plan) => {
                        if (!plan?.id) return null;

                        const isSelected = selectedOption === plan?.id;
                        const isMostPopular = plan?.id === 'creator';

                        return (
                            <PlanCard
                                key={plan.id}
                                plan={plan}
                                isAnnual={isAnnual}
                                isSelected={isSelected}
                                isMostPopular={isMostPopular}
                                handle={() => handleCheckout({ plan, isAnnual, addToast, setIsLoading })}
                            />
                        );
                    })}
                </div>}
        </div>
    );
}
