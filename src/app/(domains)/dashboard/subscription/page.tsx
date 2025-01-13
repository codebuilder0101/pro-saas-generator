
import ManageBilling from "@/components/ManageBilling";
import PricingSection from "@/components/Pricing";
import { handleFetchSubscription } from "@/handlers/subscription";
import { createClient } from "@/libs/supabase/server";
import SupabaseService from "@/services/supabaseService";
import { capitalize } from "@/utils/capitalize";

export default async function Subscription() {
  const supabase = await createClient();
  const SupabaseServiceInstance = new SupabaseService(supabase);
  const user = await SupabaseServiceInstance.getUser();
  const session = await SupabaseServiceInstance.getSession();
  const subscription = user?.id && await handleFetchSubscription(user?.id);

  const plan = subscription &&
    subscription?.status === 'active'
    ? subscription.plan as 'starter' | 'creator' | 'pro'
    : 'free'

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Current Plan</h2>
                <p className="text-lg text-gray-600">You are currently on the <strong>{capitalize(plan)}</strong> plan.</p>
              </div>
            </div>
            {subscription && subscription?.id && session?.access_token && (
              <ManageBilling accessToken={session?.access_token} />
            )}
          </div>
        </div>
        <div className="mt-12">
          <PricingSection selectedOption={plan} />
        </div>
      </div>
    </div>
  );
}