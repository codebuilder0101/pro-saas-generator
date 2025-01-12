'use client';

import FeatureMenu from "./FeatureMenu";

type ClientDashboardProps = {
    plan: "free" | "starter" | "creator" | "pro";
}
export const ClientDashboard = ({ plan }: ClientDashboardProps) => {
    const handleTabChange = (tab: string) => {
        console.log(tab);
    };

    return <>
        <FeatureMenu
            onTabChange={handleTabChange}
            activePlan={plan}
        />
    </>
}