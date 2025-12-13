"use client";

import { useState } from "react";
import HelpandComplaints from "@/components/help-complaints";
import Notification from "@/components/notification";
import Profile from "@/components/profile";
import Account from "@/components/account";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Security", "Help and Complaints"];

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center space-x-7 md:space-x-10 relative pt-25 md:pt-30">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-col items-center">
            <button
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-3 md:px-5 ${
                activeTab === tab
                  ? "text-primary-60 text-sm md:text-xl font-bold"
                  : "text-grey-40 text-sm md:text-xl"
              }`}
            >
              {tab}
            </button>

            {/* Active underline */}
            {activeTab === tab && (
              <div className="w-full h-[4px] bg-primary-50 rounded-[30px]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Separator line */}
      <div className="w-full h-[2px] bg-[#CCE1D7] rounded-[30px]"></div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Security" && <Account />}
        {activeTab === "Notification" && <Notification />}
        {activeTab === "Help and Complaints" && <HelpandComplaints />}
      </div>
    </div>
  );
}
