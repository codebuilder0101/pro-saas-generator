import ButtonComponent from "./ui/Button";

type PricingProps = {
    selectedOption: 'preview' | 'free' | 'starter' | 'creator' | 'pro';
};

const plans = [
    {
        id: 'free',
        name: 'Free',
        price: '$0/month',
        description: 'Ideal for individuals trying out our service.',
        features: [
            '✔ Access to basic features',
            '✔ 1 project',
        ],
        extraFeatures: '',
    },
    {
        id: 'starter',
        name: 'Starter',
        price: '$19/month',
        description: 'Ideal for individuals launching first Micro-SaaS.',
        features: [
            '✔ Access to core features',
            '✔ 1 project',
            '✔ Community support',
        ],
        extraFeatures: 'Everything in Free, plus',
    },
    {
        id: 'creator',
        name: 'Creator',
        price: '$29/month',
        description: 'Great for creators looking to expand their reach.',
        features: [
            '✔ Access to core features',
            '✔ 3 projects',
            '✔ Email support',
        ],
        extraFeatures: 'Everything in Starter, plus',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$49/month',
        description: 'Perfect for teams scaling their Micro-SaaS business.',
        features: [
            '✔ Access to core features',
            '✔ Unlimited projects',
            '✔ Priority support',
        ],
        extraFeatures: 'Everything in Creator, plus',
    },
];

export default function Pricing({ selectedOption }: PricingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-600">
                Simple and transparent pricing to suit your needs.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan) => {
                    const isSelected = selectedOption === plan.id;
                    const isMostPopular = plan.id === 'creator';

                    const bgColor = isSelected
                        ? 'bg-gray-50'
                        : isMostPopular
                            ? 'bg-indigo-50'
                            : 'bg-white';

                    const borderColor = isSelected
                        ? 'border-gray-600'
                        : isMostPopular
                            ? 'border-indigo-600'
                            : 'border-gray-200';
                            
                    return (
                        <div
                            key={plan.id}
                            className={`${bgColor} ${borderColor} border rounded-lg shadow-md p-8 relative flex flex-col`}
                        >
                            {isSelected && (
                                <span className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                    Selected Plan
                                </span>
                            )}
                            {isMostPopular && !isSelected && (
                                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="mt-6 text-4xl font-extrabold text-gray-900">{plan.price}</p>
                            <p className="mt-4 text-gray-600">{plan.description}</p>
                            <ButtonComponent
                                disabled={isSelected}
                                type="button"
                                className="mt-6"
                            >
                                Subscribe
                            </ButtonComponent>
                            <ul className="mt-6 space-y-4 text-gray-600 text-left">
                                {plan.extraFeatures && (
                                    <li className="text-center">
                                        <strong>{plan.extraFeatures}</strong>
                                    </li>
                                )}
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
