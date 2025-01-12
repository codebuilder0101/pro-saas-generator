export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900">How Sassy Works</h2>
                <p className="mt-4 text-center text-lg text-gray-600">
                    Set up your subscription service in just three easy steps.
                </p>

                <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">1</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Sign Up</h3>
                        <p className="mt-2 text-gray-600">
                            Create an account and set up your profile. Secure and fast with Supabase integration.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">2</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Integrate Stripe</h3>
                        <p className="mt-2 text-gray-600">
                            Connect Stripe for seamless billing and manage monthly or annual subscriptions.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">3</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Manage Subscriptions</h3>
                        <p className="mt-2 text-gray-600">
                            Easily conetor and manage your subscriptions, with real-time updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
