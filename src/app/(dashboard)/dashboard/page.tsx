"use client";

import { useState } from "react";

type Tab = {
  name: string;
  href: string;
};

const tabs: Tab[] = [
  { name: "Feature 1", href: "/feature1" },
  { name: "Feature 2", href: "/feature2" },
  { name: "Feature 3", href: "/feature3" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0].href);

  return (
    <div className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-8 py-4">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <button
                onClick={() => setActiveTab(tab.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeTab === tab.href
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}