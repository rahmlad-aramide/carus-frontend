import { useState } from "react";
import Image from "next/image";

export default function NotificationBell() {
  const [notifications] = useState("6");

  return (
    <div className="relative">
      <Image
        src="/notification.png"
        alt="Notification Bell"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
        {notifications}
      </span>
    </div>
  );
}
