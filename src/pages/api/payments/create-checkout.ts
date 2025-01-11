import { NextApiRequest, NextApiResponse } from 'next';

import { stripe } from '@/libs/stripe';
import PaymentService from '@/services/payment';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { priceId } = req.body;

    try {
      const PaymentServiceInstance = new PaymentService(stripe);
      const session = await PaymentServiceInstance.createCheckoutSession(priceId, req.headers.origin as string);

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
