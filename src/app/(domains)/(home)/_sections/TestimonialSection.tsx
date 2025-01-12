"use client"

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">What Our Users Say</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Hear directly from our satisfied customers.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt="User avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {["Alice Martin", "John White", "Liam Smith", "Michael Brown", "Sarah Clark", "Collin Davis", "James Wilson", "Josh Taylor"][index]}
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
                {[
                  "Sassy has been a game-changer for our Micro-SaaS project. The integration with Stripe and Supabase is seamless, and it helped us get started so much faster!",
                  "I was looking for a simple and reliable way to manage subscriptions for my SaaS product. Sassy’s Stripe integration is fantastic and easy to use!",
                  "The built-in authentication with Supabase and the payment gateway via Stripe saved us hours of development time. Highly recommend it!",
                  "As a solo developer, I needed a solid foundation for my Micro-SaaS. Sassy provided that and more! The flexibility of the template is incredible.",
                  "Sassy’s responsive design and clean architecture made it easy to deploy. I’ve been able to focus on building features rather than handling the basics.",
                  "The ease of integrating OAuth authentication with Google and Facebook made the user login process a breeze. This platform is a must-have for any developer.",
                  "With the subscription management system already in place, I could concentrate on my product’s core features. Sassy has been a huge time-saver.",
                  "Stripe webhooks and subscription handling worked flawlessly with my project. I’m really impressed with how well everything is integrated."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
