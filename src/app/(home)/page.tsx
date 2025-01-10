import HeroSection from "@/app/(home)/_components/HeroSection";
import HowItWorksSection from "@/app/(home)/_components/HowItWorksSection";
import Navbar from "@/app/(home)/_components/Navbar";
import PricingSection from "@/components/Pricing";

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HeroSection />


        {/* <section id="solution" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">Our Solution</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Discover how our platform provides a seamless experience with innovative dashboards and proven results.
            </p>

            <div className="mt-10 relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <img src="https://images.squarespace-cdn.com/content/v1/57cfc8a3d482e945c66724f7/d0e275ee-be67-42a9-bf66-c55de140a831/Website+track+dashboard" alt="Dashboard 1" className="w-full" />
                  <img src="https://images.squarespace-cdn.com/content/v1/57cfc8a3d482e945c66724f7/d0e275ee-be67-42a9-bf66-c55de140a831/Website+track+dashboard" alt="Dashboard 2" className="w-full" />
                  <img src="https://images.squarespace-cdn.com/content/v1/57cfc8a3d482e945c66724f7/d0e275ee-be67-42a9-bf66-c55de140a831/Website+track+dashboard" alt="Dashboard 3" className="w-full" />
                  <img src="https://images.squarespace-cdn.com/content/v1/57cfc8a3d482e945c66724f7/d0e275ee-be67-42a9-bf66-c55de140a831/Website+track+dashboard" alt="Dashboard 4" className="w-full" />
                </div>
              </div>
              <button
                onClick={() => setCurrentSlide((currentSlide - 1 + 4) % 4)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &lt;
              </button>
              <button
                onClick={() => setCurrentSlide((currentSlide + 1) % 4)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-indigo-600">10,000+</h3>
                <p className="mt-2 text-gray-600">Active Users</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-indigo-600">99.9%</h3>
                <p className="mt-2 text-gray-600">Uptime Guaranteed</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-indigo-600">4.9/5</h3>
                <p className="mt-2 text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">Benefits</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Discover how our platform transforms your business with tangible results and unmatched value.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Save Time with Automation</h3>
                <p className="mt-4 text-gray-600">
                  Feature: Automate repetitive tasks and workflows.
                  <br />
                  **Benefit**: Focus on strategic priorities and increase efficiency by 40%.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Boost Revenue with Insights</h3>
                <p className="mt-4 text-gray-600">
                  Feature: Data analytics and real-time reporting.
                  <br />
                  **Benefit**: Identify profitable opportunities and grow revenue by 25%.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Enhance Collaboration</h3>
                <p className="mt-4 text-gray-600">
                  Feature: Team collaboration tools and integrations.
                  <br />
                  **Benefit**: Streamline communication and reduce project delivery time by 30%.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600">Increase Customer Satisfaction</h3>
                <p className="mt-4 text-gray-600">
                  Feature: Personalized customer interactions through AI.
                  <br />
                  **Benefit**: Improve retention rates and achieve a 4.9/5 satisfaction score.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <HowItWorksSection />

        <section id="pricing" className="bg-gray-100 py-20">
          <PricingSection selectedOption="preview"/>
        </section>

        {/* <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">Features</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-indigo-600">Feature 1</h3>
                <p className="mt-4 text-gray-600">Description of Feature 1.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-indigo-600">Feature 2</h3>
                <p className="mt-4 text-gray-600">Description of Feature 2.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-indigo-600">Feature 3</h3>
                <p className="mt-4 text-gray-600">Description of Feature 3.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="testimonials" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Hear directly from our satisfied customers.
            </p>


            <div className="mt-10 relative overflow-hidden">
              <div
                className="flex space-x-6 animate-slide"
                style={{
                  animation: "scroll 30s linear infinite",
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 mb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://i.pravatar.cc/150?img=${index + 1}`}
                        alt="User avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          User {index + 1}
                        </h3>
                        <div className="flex text-yellow-400 mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568L24 9.748l-6 5.884L19.335 24 12 20.205 4.665 24 6 15.632 0 9.748l8.332-1.593L12 .587z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                      "This platform has transformed the way I work. The features are
                      incredible, and the support team is amazing!"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="faq" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">FAQ</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Frequently Asked Questions
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  question: "What is this platform about?",
                  answer:
                    "This platform is designed to boost your team's productivity with innovative AI-powered tools and seamless integrations.",
                },
                {
                  question: "How can I get started?",
                  answer:
                    "You can get started by signing up for an account. It's free to try, and our onboarding process is simple and quick!",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Absolutely! We use the latest security measures to ensure that your data is safe and protected at all times.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "Our support team is available 24/7 to assist you with any questions or issues you may encounter.",
                },
                {
                  question: "Can I integrate this platform with other tools?",
                  answer:
                    "Yes! We offer seamless integrations with popular tools to ensure a smooth workflow.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="border border-gray-300 rounded-lg shadow-md p-4 group"
                >
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section id="call-to-value" className="py-20 bg-indigo-600 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <button className="mt-6 py-3 px-6 bg-white text-indigo-600 rounded-lg hover:bg-gray-100">
              Join Sassy Today
            </button>
          </div>
        </section> */}
      </main>
    </div>
  );
}
