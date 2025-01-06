export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900">How It Works</h2>
                <p className="mt-4 text-center text-lg text-gray-600">
                    Get started in just three simple steps.
                </p>

                <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">1</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Sign Up</h3>
                        <p className="mt-2 text-gray-600">
                            Create your free account and set up your profile in minutes.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">2</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Customize</h3>
                        <p className="mt-2 text-gray-600">
                            Configure your dashboard and integrate your tools effortlessly.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-bold">3</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Achieve</h3>
                        <p className="mt-2 text-gray-600">
                            Start reaching your goals with AI-powered insights and automation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
