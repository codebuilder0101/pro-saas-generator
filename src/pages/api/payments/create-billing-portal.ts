import { NextApiRequest, NextApiResponse } from 'next';

import { stripe } from '@/libs/stripe';
import { supabaseServerClient } from '@/libs/supabase/server';
import StripeService from '@/services/stripe';
import SupabaseService from '@/services/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    try {

        const token = req.headers['authorization']?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'Auth session missing!' });
        }


        const SupabaseServiceInstance = new SupabaseService(supabaseServerClient);
        const StripeServiceInstance = new StripeService(stripe);


        const user = await SupabaseServiceInstance.getUser(token);


        if (!user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }

        const subscription = await SupabaseServiceInstance.getSubscriptionByUserId(user.id)

        if (!subscription) {
            return res.status(404).json({ error: 'No subscription found for user' });
        }
        const customerId = await StripeServiceInstance.getCustomerIdFromSubscription(subscription.stripe_subscription_id);

        if (!customerId) {
            return res.status(404).json({ error: 'No customerId found for subscription' });
        }

        const portalSession = await StripeServiceInstance.createBillingPortalSession(customerId);

        return res.status(200).json({ url: portalSession.url });
    } catch (error) {
        console.error('Error creating billing portal session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
