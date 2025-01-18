import { NextApiRequest, NextApiResponse } from 'next';

import { stripe } from '@/libs/stripe';
import StripeService from '@/services/stripe';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { priceId, plan, userId } = req.body;

    try {
      const StripeServiceInstance = new StripeService(stripe);
      const session = await StripeServiceInstance.createCheckoutSession(priceId, plan, userId, req.headers.origin as string);

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
