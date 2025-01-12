import { redirect } from 'next/navigation';

import { Plan } from '@/components/Pricing/PlanCard';
import { Toast } from '@/contexts/ToastContext';
import { supabase } from '@/libs/supabase/client';
import AuthService from '@/services/auth';
import PaymentService from '@/services/payment';

const PaymentServiceInstance = PaymentService;

interface CheckoutProps {
    plan: Plan;
    isAnnual: boolean;
    addToast: (toast: Toast) => void;
    setIsLoading: (isLoading: boolean) => void;
}

interface FetchPlansProps {
    setIsLoading: (isLoading: boolean) => void;
    setPlans: (plans: Plan[] | ((prev: Plan[]) => Plan[])) => void;
}

export async function handleCheckout({ plan, isAnnual, addToast, setIsLoading }: CheckoutProps): Promise<void> {
    if (plan.id === 'free') {
        console.log('Free plan selected');
        return;
    }
    
    setIsLoading(true);
    const AuthServiceInstance = new AuthService(supabase);
    const user = await AuthServiceInstance.getUserId();

    if (!user) {
        return redirect('/signin');
    }

    try {
        const priceId = isAnnual ? plan.idAnnual : plan.idMonthly;

        const response = await fetch('/api/payments/create-checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ priceId, plan: plan.id, userId: user  }),
        });

        const jsonResponse = await response.json();
        const sessionId = jsonResponse.id;

        if (sessionId) {
            await PaymentServiceInstance.redirectToCheckout(sessionId);
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
    } finally {
        setIsLoading(false);

    }
}

export async function fetchPlans({ setIsLoading, setPlans }: FetchPlansProps): Promise<void> {
    try {
        setIsLoading(true);
        const response = await fetch('/api/payments/get-plans');
        const data: Plan[] = await response.json();
        setPlans((prev: Plan[]) => {
            if (!prev) {
            return data;
            }
            return [...prev, ...data];
        });
    } catch (error) {
        console.error('Erro ao buscar planos:', error);
    }
    setIsLoading(false);
};