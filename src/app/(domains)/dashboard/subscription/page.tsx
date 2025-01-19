
import { headers } from "next/headers";

import ManageBilling from "@/components/ManageBilling";
import PricingSection from "@/components/Pricing";
import { createClient } from "@/libs/supabase/server";
import SupabaseService from "@/services/supabase";
import { capitalize } from "@/utils/capitalize";

export default async function Subscription() {
  const sharedData = JSON.parse((await headers()).get('x-shared-data') || '{}');
  const supabase = await createClient();
  const SupabaseServiceInstance = new SupabaseService(supabase);
  const session = await SupabaseServiceInstance.getSession();


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Current Plan</h2>
                <p className="text-lg text-gray-600">You are currently on the <strong>{capitalize(sharedData?.plan)}</strong> plan.</p>
              </div>
            </div>
            {sharedData?.plan !== 'free' && session?.access_token && (
              <ManageBilling accessToken={session?.access_token} />
            )}
          </div>
        </div>
        <div className="mt-12">
          <PricingSection hasFreeTrial="7d" selectedOption={sharedData?.plan} />
        </div>
      </div>
    </div>
  );
}