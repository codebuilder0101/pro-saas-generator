import FeatureMenu from "@/components/FeatureMenu";
import { handleFetchSubscription } from "@/handlers/subscription";
import { createClient } from "@/libs/supabase/server";
import AuthService from "@/services/auth";


export default async function Dashboard() {
  const supabase = await createClient();
  const AuthServiceInstance = new AuthService(supabase);
  const user = await AuthServiceInstance.getUser();

  const subscription = user?.id && await handleFetchSubscription(user?.id);
  const plan = subscription &&
    subscription?.status === 'active'
    ? subscription.plan as 'starter' | 'creator' | 'pro'
    : 'free'

  return (
    <div className="bg-white border-b border-gray-200">
      <FeatureMenu
        activePlan={plan}
      />
    </div>
  );
}