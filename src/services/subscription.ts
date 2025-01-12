import { SupabaseClient } from '@supabase/supabase-js';

type SubscriptionData = {
    user_id: string;
    stripe_subscription_id: string;
    plan: string;
    status: string;
    current_period_start: Date;
    current_period_end: Date;
};

export default class SubscriptionService {
    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    async getSubscriptionByUserId(userId: string) {
        const { data, error } = await this.supabase
            .from('subscriptions')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error) throw error;
        return data;
    }

    async upsertSubscription(subscriptionData: SubscriptionData) {
        const { error } = await this.supabase
            .from('subscriptions')
            .upsert(subscriptionData);

        if (error) throw error;
        return true;
    }

    async updateSubscriptionStatus(
        stripeSubscriptionId: string,
        status: string
    ) {
        const { error } = await this.supabase
            .from('subscriptions')
            .update({ status })
            .eq('stripe_subscription_id', stripeSubscriptionId);

        if (error) throw error;
        return true;
    }

    async updateSubscriptionPeriod(
        stripeSubscriptionId: string,
        periodStart: Date,
        periodEnd: Date
    ) {
        const { error } = await this.supabase
            .from('subscriptions')
            .update({
                current_period_start: periodStart,
                current_period_end: periodEnd,
            })
            .eq('stripe_subscription_id', stripeSubscriptionId);

        if (error) throw error;
        return true;
    }

    async cancelSubscription(stripeSubscriptionId: string) {
        const { error } = await this.supabase
            .from('subscriptions')
            .update({ status: 'canceled' })
            .eq('stripe_subscription_id', stripeSubscriptionId);

        if (error) throw error;
        return true;
    }
}
