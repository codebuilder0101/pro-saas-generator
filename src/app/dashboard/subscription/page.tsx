import PricingSection from "@/components/Pricing";

export default function Subscription() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Current Plan</h2>
                <p className="text-lg text-gray-600">You are currently on the <strong>Free</strong> plan.</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Subscription Details</h2>
              </div>
              <button className="text-indigo-600 hover:underline border border-indigo-600 rounded px-4 py-2">Manage billing info</button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <PricingSection selectedOption="free" />
        </div>
      </div>
    </div>
  );
}