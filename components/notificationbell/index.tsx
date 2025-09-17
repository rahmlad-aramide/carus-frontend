"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications}
            </span>
          )}
        </div>

        {showNotifications && (
          <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50">
            {notifications === 0 ? (
              <p className="text-sm text-gray-500">
                No notifications at the moment
              </p>
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
