import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

export default class StripeService {
  private stripe: Stripe;

  constructor(stripe: Stripe) {
    this.stripe = stripe;
  }

  async createCheckoutSession(priceId: string, plan: string, userId: string, origin: string): Promise<Stripe.Checkout.Session> {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${origin}/payments?status=success`,
      cancel_url: `${origin}/payments?status=cancel`,
      metadata: { userId, plan },
    });
    return session;
  }

  async listActivePrices(): Promise<Stripe.Price[]> {
    const prices = await this.stripe.prices.list({
      active: true,
      expand: ['data.product'],
    });
    return prices.data;
  }

  constructWebhookEvent(rawBody: string | Buffer, sig: string | string[], endpointSecret: string): Stripe.Event {
    return this.stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  }

  async getCustomerIdFromSubscription(subscriptionId: string): Promise<string | null> {
    try {
      const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
      return subscription.customer as string;
    } catch (error) {
      console.error('Erro ao buscar assinatura:', error);
      return null;
    }
  };
  
  async createBillingPortalSession(customerId: string) {
    const portal = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_PROJECT_URL}/dashboard/subscription`,
    });

    return portal;
  }
  static redirectToCheckout(sessionId: string): void {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!).then((clientStripe) => {
      if (clientStripe) {
        clientStripe.redirectToCheckout({ sessionId });
      }
    });
  }
}
