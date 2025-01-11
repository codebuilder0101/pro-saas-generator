import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { stripe } from '@/libs/stripe';
import PaymentService from '@/services/payment';
import PurchasePlanDTO, { InputData } from '@/utils/PurchasePlanDTO';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const PaymentServiceInstance = new PaymentService(stripe);
      const prices = await PaymentServiceInstance.listActivePrices();

      const response = prices?.map((price) => {
        const product = price.product as Stripe.Product;
        return {
          id: price.id,
          productName: product.name,
          description: product.description,
          interval: price.recurring?.interval,
          amount: ((price.unit_amount || 0) / 100).toFixed(0),
          currency: price.currency,
        };
      });

      const tranform = await PurchasePlanDTO(response as Array<InputData>);
      res.status(200).json(tranform);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os planos' });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}