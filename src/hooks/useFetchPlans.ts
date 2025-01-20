import { useState, useEffect } from 'react';

import { Plan } from '@/components/Pricing/PlanCard';
import { HAS_FREE_TRIAL } from '@/constants/FreeTrial';
import { SUBSCRIPTION_PLANS_BASE } from '@/constants/Plan';


export const useFetchPlans = (hasFreeplan: boolean, setIsLoading: (isLoading: boolean) => void) => {
    const [plans, setPlans] = useState<Plan[]>(hasFreeplan && !HAS_FREE_TRIAL ? SUBSCRIPTION_PLANS_BASE : []);


    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('/api/payments/get-plans');
                const data: Plan[] = await response.json();
                setPlans((prev: Plan[]) => {
                    if (!prev) return data;
                    return prev.length >= 4 ? [...prev] : [...prev, ...data];
                });
            } catch (error) {
                console.error('Erro ao buscar planos:', error);
            }
            setIsLoading(false);
        };
        fetchPlans();
    }, []);

    return { plans, setIsLoading };
};
