import React from 'react';

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Answers to help you understand how to leverage this template to kickstart your Micro-SaaS development.
        </p>

        <div className="mt-10 space-y-4">
          {[
            {
              question: "What is this template for?",
              answer:
                "This is a powerful template designed to accelerate the development of Micro-SaaS applications. It provides an example setup for subscription management, but you can easily adapt it to suit any SaaS product.",
            },
            {
              question: "How do I get started with the template?",
              answer:
                "Start by cloning the repository, setting up your environment with Next.js 15, and configuring TypeScript. The template is ready for development with integrations like Stripe and Supabase to manage your user data and payments.",
            },
            {
              question: "Is this template focused on subscriptions?",
              answer:
                "Subscriptions are just one example of functionality provided in this template. You can customize it to fit your Micro-SaaS application's needs, whether it's for billing, authentication, or any other aspect of your service.",
            },
            {
              question: "What payment options are included?",
              answer:
                "The template comes with an example of monthly and annual subscription management using Stripe. You can modify the payment flow to fit your app’s business model.",
            },
            {
              question: "Can I integrate other services into this template?",
              answer:
                "Yes, the template is built to be flexible. It supports integrations with Supabase for user management, Stripe for payments, and OAuth for authentication with services like Google, Facebook, and Twitter.",
            },
            {
              question: "Is this template production-ready?",
              answer:
                "While this template provides a solid foundation, it’s intended for development and customization. You'll need to tweak it to fit your production environment and business requirements.",
            },
            {
              question: "How do I customize the template?",
              answer:
                "You can easily modify the code to fit your specific use case. The architecture is modular, with separate components for authentication, payments, and user management, allowing for easy customization.",
            },
          ].map((faq, index) => (
            <details key={index} className="border border-gray-300 rounded-lg shadow-md p-4 group">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
