"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const donate = [
  {
    content: "Cleaner Lagos Initiative",
    raised: "N60,000",
    target: "N83,000",
    days: "30",
    donation: "50",
    image: "/Frame90.svg",
  },
];

type DonateEarningsProps = {
  onBack: () => void;
};
export default function DonateEarnings({ onBack }: DonateEarningsProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black/10 flex items-center justify-center">
      <div className="relative bg-white shadow-md w-[90%] max-w-md md:max-w-lg lg:max-w-3xl md:rounded-[20px] p-5 lg:p-8 xl:px-10 xl:py-7 max-h-screen overflow-y-auto md:max-h-none md:overflow-visible">
        <div className="flex items-center gap-3 mb-7 lg:mb-2">
          <button
            onClick={onBack}
            className="md:hidden bg-[#F3F3F3] rounded-[10px] text-[#292D32] p-2"
            aria-label="Go Back"
          >
            <ArrowLeft />
          </button>
          <p className="text-base md:text-xl font-black">Donate</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onBack}
          className="flex items-center justify-center md:block absolute top-3 right-3 text-[#FF6161] bg-white text-2xl cursor-pointer hover:bg-[#FF6161] hover:text-white rounded-full transition w-8 h-8"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="lg:grid grid-cols-2 gap-10">
          <div>
            {donate.map(
              ({ content, raised, target, days, donation, image }, index) => {
                const progress =
                  (parseInt(raised.replace(/\D/g, "")) /
                    parseInt(target.replace(/\D/g, ""))) *
                  100;

                return (
                  <div key={index}>
                    <div className="rounded-[10px] xl:rounded-[18px]">
                      <div className="w-full lg:mt-3">
                        <Image
                          src={image}
                          alt=""
                          width={340}
                          height={200}
                          className="object-cover rounded-[9px] w-full h-auto max-h-[150px] md:max-h-[220px] lg:max-h-[200px]"
                        />
                      </div>

                      <div className="space-y-2 mt-2">
                        <p className="text-sm lg:text-base xl:text-xl font-bold">
                          {content}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-[9px] lg:text-[11px] text-grey-40 leading-normal">
                            {" "}
                            Raised
                            <br />
                            <span className="text-[11px] lg:text-sm text-grey-100 font-regular font-bold">
                              {raised}
                            </span>
                          </p>

                          <p className="text-[9px] lg:text-[11px] text-grey-40 leading-normal">
                            {" "}
                            Target
                            <br />
                            <span className="text-[11px] lg:text-sm text-grey-100 font-regular font-bold">
                              {target}
                            </span>
                          </p>
                        </div>

                        {/*Progress Bar */}
                        <div className="w-full h-[4px] bg-primary-10 rounded-[20px] mt-3">
                          <div
                            className="h-full bg-[rgb(86,155,122)] rounded-[20px]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <div className="flex items-center gap-8 mt-3">
                          {/* Donation */}
                          <div className="flex items-center gap-1 lg:gap-2">
                            <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                              <Image
                                src="/profile-2user.svg"
                                alt=""
                                width={10}
                                height={10}
                                className="object-contain lg:w-3 lg:h-3"
                              />
                            </div>
                            <p className="text-[9px] lg:text-[11px] text-grey-90">
                              {donation} Donations
                            </p>
                          </div>

                          {/* Days left */}
                          <div className="flex items-center gap-1 lg:gap-2">
                            <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                              <Image
                                src="/clock.svg"
                                alt=""
                                width={10}
                                height={10}
                                className="object-contain lg:w-3 lg:h-3"
                              />
                            </div>
                            <p className="text-[9px] lg:text-[11px] text-grey-90">
                              {days} Days left
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[rgb(243,243,243)] rounded-[10px] flex items-center gap-6 p-3 mt-3 lg:mt-5 mb-3">
                      <div className="bg-white rounded-[8px] p-3 flex items-center justify-center">
                        <Image
                          src="/pngwing.svg"
                          alt=""
                          width={35}
                          height={35}
                          className="object-contain"
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-[9px] lg:text-[11px] text-[rgb(109,109,109)]">
                          Powered by
                        </p>
                        <p className="text-sm lg:text-base font-bold">
                          Lawma Trash Center
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] md:text-sm text-justify leading-normal md:leading-snug mt-6 mb-10 lg:mb-0">
                        By donating your earnings, you can support the efforts
                        of these organizations and contribute to a cleaner and
                        healthier environment for everyone.
                      </p>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <div>
            <div>
              <p className="text-sm md:text-base">Select Point</p>
              <div className="grid grid-cols-3 gap-y-5 gap-x-5 lg:gap-y-8 mt-3 mb-10">
                {[1000, 2000, 3000, 4000, 5000, 6000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelected(amount)}
                    className={`rounded-[10px] w-22 lg:w-25 py-5 lg:py-6 border  ${selected === amount ? "border-primary-50 text-primary-60 font-bold" : "border-grey-10 text-grey-40"}`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              <label htmlFor="points" className="text-sm md:text-base">
                Enter Point
                <input
                  id="point"
                  type="number"
                  placeholder="Enter point manually"
                  className="rounded-[10px] w-full border-none p-3 bg-[rgb(243,243,243)] mt-2"
                />
              </label>

              <Button className="cursor-pointer rounded-[10px] w-full xl:gap-2 h-10 flex items-center justify-center mt-8">
                <Image
                  src="/gift2.png"
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain "
                />
                <span className="text-white text-sm">Donate Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
