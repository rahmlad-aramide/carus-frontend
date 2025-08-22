"use client";

import { useState } from "react";
import NotificationBell from "@/components/notificationbell";
import ImageContainer from "@/components/imagecontainer";
import Image from "next/image";
import Pickup from "@/components/pickuppage";
import DropOff from "@/components/dropoffpage";
import ScheduleHistory from "@/components/schedulehistory";

type FormType = "pickup" | "dropoff";

const schedule: {
  activity: string;
  paragraph: string;
  image: string;
  form: FormType;
}[] = [
  {
    activity: "Schedule Pickup",
    paragraph: "Request for waste pickup at your convenience",
    image: "/truck-time.png",
    form: "pickup",
  },

  {
    activity: "Schedule Drop-off",
    paragraph: "Request for waste drop-off at your covenience",
    image: "/location.png",
    form: "dropoff",
  },
];

export default function Page() {
  const [activeForm, setActiveForm] = useState<null | "pickup" | "dropoff">(
    null,
  );

  if (activeForm === "pickup") {
    return <Pickup onBack={() => setActiveForm(null)} />;
  }

  if (activeForm === "dropoff") {
    return <DropOff onBack={() => setActiveForm(null)} />;
  }
  <p className="text-xl md:text-3xl font-black">Schedule</p>;

  return (
    <>
      <div className="fixed top-0 z-40 bg-white flex justify-between items-center px-2 md:pr-12 h-25 md:h-20 md:pt-18 md:pb-10 w-full md:w-[calc(100%-16rem)]">
        <p className="text-xl md:text-3xl font-black">Schedule</p>

        <div className="hidden md:flex items-center gap-5">
          <NotificationBell />
          <ImageContainer />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-20 md:mt-30">
        {schedule.map(({ activity, paragraph, image, form }, index) => (
          <div key={index}>
            <div
              className="bg-[#F3F3F3] rounded-[10px] md:space-y-3 xl:space-y-2 px-6 py-2 md:p-4 cursor-pointer"
              onClick={() => setActiveForm(form)}
            >
              <div className="flex justify-end ml-auto pt-2">
                <div className="relative w-12 h-12 md:w-16 md:h-16 bg-primary-10 rounded-full">
                  <Image
                    src={image}
                    alt="schedule-image"
                    fill
                    className="object-contain p-3 md:p-4"
                  />
                </div>
              </div>
              <div className="py-4 lg:pl-8 lg:pr-10 lg:py-2 xl:pl-6 xl:pr-30  space-y-2">
                <h3 className="text-[15px] md:text-[18px] lg:text-xl xl:text-2xl font-bold">
                  {activity}
                </h3>
                <p className="text-[12px] text-grey-40 md:text-sm lg:text-base font-bold">
                  {paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScheduleHistory />
    </>
  );
}
