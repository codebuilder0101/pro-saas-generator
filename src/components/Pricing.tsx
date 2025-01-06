import Image from 'next/image';

export default function PricingSection() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Simple and transparent pricing to suit your needs.
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                        <p className="mt-6 text-4xl font-extrabold text-gray-900">$0/month</p>
                        <p className="mt-4 text-gray-600">Ideal for individuals trying out our service.</p>
                        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Subscribe</button>
                        <ul className="mt-6 space-y-4 text-gray-600 text-left">
                            <li className="text-center"><strong>Plans feature</strong></li>
                            <li>✔ Access to basic features</li>
                            <li>✔ 1 project</li>
                            <li>✔ Community support</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                        <p className="mt-6 text-4xl font-extrabold text-gray-900">$19/month</p>
                        <p className="mt-4 text-gray-600">Ideal for individuals launching their first Micro-SaaS.</p>
                        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Subscribe</button>
                        <ul className="mt-6 space-y-4 text-gray-600 text-left">
                            <li className="text-center"><strong>Everything in Free, plus</strong></li>
                            <li>✔ Access to core features</li>
                            <li>✔ 1 project</li>
                            <li>✔ Community support</li>
                        </ul>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-600 rounded-lg shadow-md p-8 relative">
                        <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Most Popular</span>
                        <h3 className="text-2xl font-bold text-gray-900">Creator</h3>
                        <p className="mt-6 text-4xl font-extrabold text-gray-900">$29/month</p>
                        <p className="mt-4 text-gray-600">Great for creators looking to expand their reach.</p>
                        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Subscribe</button>
                        <ul className="mt-6 space-y-4 text-gray-600 text-left">
                            <li className="text-center"><strong>Everything in Starter, plus</strong></li>
                            <li>✔ 3 projects</li>
                            <li>✔ Email support</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                        <p className="mt-6 text-4xl font-extrabold text-gray-900">$49/month</p>
                        <p className="mt-4 text-gray-600">Perfect for teams scaling their Micro-SaaS business.</p>
                        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Subscribe</button>
                        <ul className="mt-6 space-y-4 text-gray-600 text-left">
                            <li className="text-center"><strong>Everything in Creator, plus</strong></li>
                            <li>✔ Unlimited projects</li>
                            <li>✔ Priority support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}