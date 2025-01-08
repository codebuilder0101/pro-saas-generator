import React from "react";

function TermsAndPrivacy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms and Privacy Policy
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Use</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our service. By using our website, you agree to comply with the following terms and conditions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email address, and usage data to improve our service and provide a better user experience.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement a variety of security measures to ensure the safety of your personal data. However, no method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to this Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Terms and Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these terms or our privacy policy, feel free to contact us.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndPrivacy;
