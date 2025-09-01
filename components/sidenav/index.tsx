"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarTick, Home, Setting2, Wallet } from "iconsax-react";
import { FaUser } from "react-icons/fa";

export default function SideNav() {
  const pathname = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/schedule", label: "Schedule", icon: CalendarTick },
    { href: "/wallet", label: "Wallet", icon: Wallet },
    { href: "/settings", label: "Settings", icon: Setting2 },
    { href: "/profile", label: "Profile", icon: FaUser },
  ];

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className="fixed top-4 right-8 z-50 md:hidden mt-5"
      >
        ☰
      </button>

      {/* Overlay */}
      {sideBarOpen && (
        <div
          onClick={() => setSideBarOpen(false)}
          className="md:hidden fixed inset-0 opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`min-h-screen w-[183px] md:w-[266px] bg-[#F3F3F3] text-grey-40 
          z-50 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out md:static 
          ${sideBarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <div className="pt-8 md:pt-10 px-5 md:px-12">
            <Image
              aria-hidden
              src="/logo.png"
              alt="Carus Logo"
              width={235}
              height={64}
              className="w-[88px] md:w-[117px] h-[24px] md:h-[32px]"
            />
          </div>

          <nav className="flex flex-col justify-center space-y-8 mt-8 md:mt-15 pl-4 pr-2 md:px-12">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isProfile = label === "Profile";

              const isActive =
                pathname === href || pathname.startsWith(`${href}`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSideBarOpen(false)}
                  className={`flex items-center gap-4 transition transform duration-200 px-3 pr-10 py-2 text-base md:text-xl rounded-[10px] 
                  ${
                    isActive
                      ? "bg-white text-primary-60 cursor-default"
                      : "text-grey-40 hover:bg-white hover:text-primary-40"
                  } ${isProfile ? "md:hidden" : ""}`}
                >
                  {isActive ? (
                    <Icon size={24} color="#026937" variant="Bold" />
                  ) : (
                    <Icon size={24} color="#6D6D6D" />
                  )}{" "}
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/login" className="flex items-center gap-3 text-base md:text-xl text-grey-40 mt-10 px-5 md:px-15 pb-20">
          <Image src="/logout.png" alt="" width={24} height={24} />
          Logout
        </Link>
      </aside>
    </>
  );
}
