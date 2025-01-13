import { ClientDashboard } from "@/components/ClientDashboard";
import { ModalProvider } from "@/contexts/ModalContext";
import { handleFetchSubscription } from "@/handlers/subscription";
import { createClient } from "@/libs/supabase/server";
import SupabaseService from "@/services/supabaseService";


export default async function Dashboard() {
  const supabase = await createClient();
  const SupabaseServiceInstance = new SupabaseService(supabase);
  const user = await SupabaseServiceInstance.getUser();

  const subscription = user?.id && await handleFetchSubscription(user?.id);
  const plan = subscription &&
    subscription?.status === 'active'
    ? subscription.plan as 'starter' | 'creator' | 'pro'
    : 'free'

  return (
    <ModalProvider>
      <div className="bg-white border-b border-gray-200">
        <ClientDashboard plan={plan} />
      </div>
    </ModalProvider>
  );
}


