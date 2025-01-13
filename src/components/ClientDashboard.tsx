'use client';

import FeatureMenu from "./FeatureMenu";
import Modal from "./Modal";

type ClientDashboardProps = {
    plan: "free" | "starter" | "creator" | "pro";
}
export const ClientDashboard = ({ plan }: ClientDashboardProps) => {
    const handleTabChange = (tab: string) => {
        console.log(tab);
    };

    return (
        <>
            <FeatureMenu
                onTabChange={handleTabChange}
                activePlan={plan}
            />
            <Modal title="Important Notice">
                <div className="bg-white py-4 rounded-lg text-center">
                    <button className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700">&times;</button>
                    <p className="text-lg mb-4">To test our app, you need to start a free trial. No features are available for free after the trial.</p>
                    <a href="/dashboard/subscription" className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full hover:bg-indigo-800 transition duration-300">Start Free Trial</a>
                </div>
            </Modal>
        </>
    )
}