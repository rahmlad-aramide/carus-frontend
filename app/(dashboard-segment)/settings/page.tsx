"use client";

import { useState } from "react";
import HelpandComplaints from "@/components/help&complaints";
import Notification from "@/components/notification";
import Profile from "@/components/profile";
import NotificationBell from "@/components/notificationbell";
import ImageContainer from "@/components/imagecontainer";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Notification", "Help and Complaints"];

  return (
    <div>
      <div className="flex justify-between items-center mt-5 md:mt-10 pb-15 md:pb-8">
        <p className="text-xl md:text-3xl font-black">Settings</p>
        <div className="hidden md:flex items-center gap-5">
          <NotificationBell />
          <ImageContainer />
        </div>
      </div>
      {/* Tabs */}
      <div className="flex items-center space-x-7 md:space-x-10 relative">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-col items-center">
            <button
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-3 md:px-5 ${
                activeTab === tab
                  ? "text-primary-60 text-[13px] md:text-xl font-bold"
                  : "text-grey-40 text-[13px] md:text-xl"
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
        {activeTab === "Notification" && <Notification />}
        {activeTab === "Help and Complaints" && <HelpandComplaints />}
      </div>
    </div>
  );
}
