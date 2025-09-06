"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import NotificationBell from "@/components/notificationbell";
import ImageContainer from "@/components/imagecontainer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DonateEarnings from "@/components/donateearnings";

const donate = [
  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame92.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },

  {
    content: "Cleaner Lagos Initiative",
    amount: "N60,000",
    days: "30",
    image: "/Frame91.svg",
  },
];

export default function Wallet() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="fixed top-0 z-40 bg-white flex justify-between items-center px-2 md:pr-12 h-16 md:h-20 pt-12 md:pt-18 pb-10 w-full md:w-[calc(100%-16rem)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="bg-[#F3F3F3] rounded-[10px] text-[#292D32] p-2"
          >
            <ArrowLeft />
          </button>
          <p className="text-xl md:text-3xl font-black">Donate</p>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <NotificationBell />
          <ImageContainer />
        </div>
      </div>

      <div className="mt-20 md:mt-30 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {donate.map(({ content, amount, days, image }, index) => (
          <div
            key={index}
            className="bg-[rgb(243,243,243)] rounded-[10px] xl:rounded-[18px] px-4 py-3 lg:py-1 xl:py-3 xl:p-6 mb-1 lg:mb-4"
          >
            <div className="flex items-center gap-4 lg:gap-5 xl:gap-6">
              <div>
                <Image
                  src={image}
                  alt=""
                  width={96}
                  height={96}
                  className="object-contain xl:w-[152px] xl:h-[152px]"
                />
              </div>

              <div className="flex-1 lg:mt-5 xl:mt-3">
                <p className="text-sm lg:text-base xl:text-xl font-bold leading-normal lg:leading-6 xl:leading-loose">
                  {content}
                </p>
                <p className="text-[9px] lg:text-sm xl:text-base font-bold">
                  {amount}{" "}
                  <span className="text-grey-40 font-regular">Raised</span>
                </p>

                <div className="flex items-center gap-1 xl:gap-4 mt-2 xl:mt-5">
                  <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                    <Image
                      src="/clock.png"
                      alt=""
                      width={10}
                      height={10}
                      className="object-contain lg:w-3 lg:h-3"
                    />
                  </div>
                  <p className="text-[9px] lg:text-[11px] xl:text-sm">
                    {days} Days left
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-2 lg:mb-4 w-full">
                  <div className="w-full h-[4px] bg-primary-10 rounded-[20px]">
                    <div
                      className="h-full bg-[rgb(86,155,122)] rounded-[20px]"
                      style={{ width: `79%` }}
                    />
                  </div>

                  <p className="text-grey-90 text-[9px] lg:text-sm float-right">
                    79%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end lg:pb-2">
              <div
                onClick={() => setShowForm(true)}
                className="cursor-pointer bg-primary-60 hover:bg-primary-50 rounded-[10px] w-[40px] xl:w-[174px] xl:gap-2 h-10 flex items-center justify-center"
              >
                <Image
                  src="/gift2.png"
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 xl:w-4 xl:h-4"
                />

                <span className="hidden xl:block text-white text-sm">
                  Donate Earnings
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showForm && <DonateEarnings onBack={() => setShowForm(false)} />}
    </div>
  );
}
