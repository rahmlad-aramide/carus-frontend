"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Empty } from "../empty";

export default function NotificationBell() {
  const [notifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <>
      <div className="relative">
        <div
          className="cursor-pointer"
          ref={dropdownRef}
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <Image
            src="/notification.png"
            alt="Notification Bell"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        {showNotifications && (
          <div className="absolute right-0 mt-2 w-64 min-h-96 md:w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
            {notifications === 0 ? (
              <div className="flex flex-col justify-center items-center gap-4 h-96">
                <Empty description="You have no notifications at the moment." />
              </div>
            ) : (
              <ul>
                <li className="text-sm">Notifications</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}
