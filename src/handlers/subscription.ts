interface Subscription {
    id: string
    user_id: string
    stripe_subscription_id: string
    plan: string
    status: string
    current_period_start: string
    current_period_end: string
    created_at: string
}


export async function handleFetchSubscription(userId: string): Promise<Subscription | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/payments/get-subscription?userId=${userId}`, {
        method: 'GET',
        cache: 'no-store',
    });

    if (!res.ok) {
        console.log('Failed to fetch subscription:', res.statusText);
    }

    const data = await res.json();
    return data.subscription;
}