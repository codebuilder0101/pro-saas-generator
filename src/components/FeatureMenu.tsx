"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Tab = {
    name: string;
    href: string;
    requiredPlan: "free" | "starter" | "creator" | "pro";
};

const tabs: Tab[] = [
    { name: "Free", href: "/feature1", requiredPlan: "free" },
    { name: "Starter/Creator", href: "/feature2", requiredPlan: "starter" },
    { name: "Pro", href: "/feature3", requiredPlan: "pro" },
];

type FeatureMenuProps = {
    activePlan: "starter" | "creator" | "pro" | "free";
};

export default function FeatureMenu({ activePlan }: FeatureMenuProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].href);

    const isTabAvailable = (requiredPlan: string): boolean => {
        if (requiredPlan === "free") return true;
        if (requiredPlan === "starter" || requiredPlan === "creator") {
            return activePlan === "starter" || activePlan === "creator" || activePlan === "pro";
        }
        if (requiredPlan === "pro") {
            return activePlan === "pro";
        }
        return false;
    };

    return (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-center space-x-8 py-4 items-center">
                {tabs.map((tab) => {
                    const available = isTabAvailable(tab.requiredPlan);

                    return (
                        <li key={tab.name} className="relative group">
                            <button
                                onClick={() => available && setActiveTab(tab.href)}
                                className="flex items-center rounded-md hover:bg-gray-200"
                                disabled={!available}
                            >
                                <p className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeTab === tab.href
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-700"
                                    } ${!available ? "cursor-not-allowed opacity-50" : ""}`}>{tab.name}</p>

                                {!available && (
                                    <LockClosedIcon
                                        className="h-5 w-5 mr-4 text-gray-500"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>

                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
