'use client';

import { useEffect, useState } from 'react';

import { PlanBase } from '@/constants/Plan';
import { fetchPlans, handleCheckout } from '@/handlers/checkout';
import { useToast } from "@/hooks/useToast";


import Spinner from '../Spinner';
import PlanCard, { Plan } from './PlanCard';
import Toggle from '../Toggle';


type PricingProps = {
    selectedOption: 'preview' | 'free' | 'starter' | 'creator' | 'pro';
};


export default function Pricing({ selectedOption }: PricingProps) {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAnnual, setIsAnnual] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>(PlanBase);

    useEffect(() => {
        fetchPlans({ setIsLoading, setPlans });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
                : <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                handleCheckout={() => handleCheckout({ plan, isAnnual, addToast, setIsLoading })}
                            />
                        );
                    })}
                </div>}
        </div>
    );
}
