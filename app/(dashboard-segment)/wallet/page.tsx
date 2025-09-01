"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NotificationBell from "@/components/notificationbell";
import ImageContainer from "@/components/imagecontainer";
import Link from "next/link";
import History from "@/components/history";
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
];

export default function Wallet() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="fixed top-0 z-40 bg-white flex justify-between items-center px-2 md:pr-12 h-25 md:h-20 md:pt-18 md:pb-10 w-full md:w-[calc(100%-16rem)]">
        <p className="text-xl md:text-3xl font-black">Wallet</p>

        <div className="hidden md:flex items-center gap-5">
          <NotificationBell />
          <ImageContainer />
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-[rgba(255,237,193,0.3)] to-[rgba(171,205,188,1)] h-[150px] lg:h-[232px] w-full rounded-[22px] lg:rounded-[30px] p-5 lg:p-8 overflow-hidden mt-22 md:mt-32">
        <div className="flex flex-col justify-between h-28 lg:h-45">
          <div className="flex items-center justify-between">
            <p className="text-base lg:text-xl text-primary-80">
              Points
              <br /> <span className="text-xl lg:text-2xl font-black">190</span>
            </p>
            <p className="text-[11px] lg:text-sm text-primary-80 text-right">
              User ID
              <br />{" "}
              <span className="text-sm lg:text-base font-bold">6789</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button
              type="button"
              className="py-6 w-[154px] lg:w-[180px] text-sm lg:text-base text-white bg-[rgb(2,105,55)] rounded-[10px] cursor-pointer flex items-center justify-center gap-2"
            >
              <Image
                src="/import.svg"
                alt=""
                width={16}
                height={16}
                className="object-contain w-4 h-4 lg:w-5 lg:h-5"
              />
              Redeem Points
            </Button>
            <p className="text-sm lg:text-base text-primary-80 text-right">
              Total Balance <br />
              <span className="text-xl lg:text-[33px] font-black">N30,000</span>
            </p>
          </div>
        </div>
      </div>

      <div className="xl:flex gap-12">
        <div className="xl:w-3/7">
          <div className="bg-[rgb(251,247,231)] rounded-[30px] w-full h-[123px] lg:h-[165px] p-5 lg:p-8 mt-8">
            <p className="text-base lg:text-[28px] font-bold lg:font-black">
              Convert Points to Giftcard
            </p>
            <p className="text-[9px] lg:text-sm">
              Powered by{" "}
              <span className="textsm lg:text-base font-bold">Bitgifty</span>
            </p>
            <div className="flex items-end justify-end">
              <Button
                type="button"
                className="py-3 w-[154px] lg:w-[180px] text-sm text-white bg-[rgb(2,105,55)] rounded-[10px] cursor-pointer flex items-center justify-center gap-2 lg:mt-3"
              >
                <Image
                  src="/convertshape-2.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 lg:w-5 lg:h-5"
                />
                Convert Points
              </Button>
            </div>
          </div>
          <div className="hidden xl:block max-h-[60vh] overflow-y-auto mt-10">
            <History />
          </div>
        </div>

        <div className="mt-7 md:mt-10 xl:mt-8 xl:w-4/7 xl:w-[560px]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-grey-90 text-base lg:text-xl font-bold">
              Donate
            </p>
            <Link
              href="/wallet/donate"
              className="text-primary-60 text-sm xl:text-base"
            >
              See All
            </Link>
          </div>
          {donate.map(({ content, amount, days, image }, index) => (
            <div
              key={index}
              className="bg-[rgb(243,243,243)] rounded-[10px] xl:rounded-[18px] px-4 py-3 xl:p-6 mb-4 lg:mb-6 w-full xl:w-[560px]"
            >
              <div className="flex items-center gap-4 lg:gap-5 xl:gap-8">
                <div>
                  <Image
                    src={image}
                    alt=""
                    width={96}
                    height={96}
                    className="object-contain lg:w-[282px] lg:h-[152px] xl:w-[152px] xl:h-[152px]"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm lg:text-base xl:text-xl font-bold leading-none lg:leading-loose">
                    {content}
                  </p>
                  <p className="text-[9px] lg:text-sm xl:text-base font-bold">
                    {amount}{" "}
                    <span className="text-grey-40 font-regular">Raised</span>
                  </p>

                  <div className="flex items-center gap-1 lg:gap-4 lg:mt-5">
                    <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                      <Image
                        src="/clock.png"
                        alt=""
                        width={10}
                        height={10}
                        className="object-contain lg:w-3 lg:h-3"
                      />
                    </div>
                    <p className="text-[9px] lg:text-sm">{days} Days left</p>
                  </div>

                  <div className="flex items-center gap-5 lg:mt-2 w-full">
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

              <div className="flex justify-end mt-1 lg:mt-1">
                <div
                  onClick={() => setShowForm(true)}
                  className="bg-primary-60 rounded-[10px] w-[174px] xl:gap-2 h-10 flex items-center justify-center gap-2"
                >
                  <Image
                    src="/gift2.png"
                    alt=""
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span className="text-white text-sm">Donate Earnings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-4/5 xl:hidden">
        <History />
      </div>

      {showForm && <DonateEarnings onBack={() => setShowForm(false)} />}
    </div>
  );
}
