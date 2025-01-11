import { NextApiRequest, NextApiResponse } from 'next';

import { stripe } from '@/libs/stripe';
import PaymentService from '@/services/payment';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function getRawBody(req: NextApiRequest): Promise<string> {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const PaymentServiceInstance = new PaymentService(stripe);

    const sig = req.headers['stripe-signature'];
    const rawBody = await getRawBody(req);

    if (!sig || !endpointSecret) {
      return res.status(400).send('Webhook Error: Missing Stripe signature');
    }

    let event;
    try {
      event = PaymentServiceInstance.constructWebhookEvent(rawBody, sig, endpointSecret);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      console.error('Erro ao verificar a assinatura do webhook:', errorMessage);
      return res.status(400).send(`Webhook Error: ${errorMessage}`);
    }

    switch (event.type) {
      default:
        console.log(`Unhandled event type ${event.type}`);
    }


    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
