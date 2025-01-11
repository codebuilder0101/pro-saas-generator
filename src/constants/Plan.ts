import { Plan } from "@/components/Pricing/PlanCard";

export const PlanBase: Plan[] = [
    {
        id: 'free',
        name: 'Free',
        priceMonthly: '$0/month',
        priceAnnual: '$0/year',
        description: 'Ideal for individuals trying out our service.',
        features: [
            '✔ Access to basic features',
            '✔ 1 project',
        ],
        extraFeatures: '',
    },
];
