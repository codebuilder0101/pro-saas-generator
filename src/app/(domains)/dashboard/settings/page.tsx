import SettingsOptions from "@/components/SettingsOptions";
import { handleFetchSubscription } from "@/handlers/subscription";
import { createClient } from "@/libs/supabase/server";
import AuthService from "@/services/auth";
import { capitalize } from "@/utils/capitalize";

export default async function Settings() {
    const supabase = await createClient();
    const AuthServiceInstance = new AuthService(supabase);
    const data = await AuthServiceInstance.getUser();
    const subscription = data?.id && await handleFetchSubscription(data?.id);
    const plan = subscription &&
        subscription?.status === 'active'
        ? capitalize(subscription.plan)
        : 'Free'


    return (
        <>
            <main className="flex-1 flex justify-center p-6 bg-white pt-18">
                <div className="w-full max-w-3xl space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={data?.user_metadata?.name || ''}
                                readOnly
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none sm:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={data?.email}
                                readOnly
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none sm:text-sm"
                            />
                        </div>
                    </div>

                    <SettingsOptions currentPlan={plan} userEmail={data?.email} />
                </div>
            </main>
        </>
    );
}