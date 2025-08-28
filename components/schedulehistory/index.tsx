"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type Schedule = {
  id: string;
  category: string;
  address: string;
  date: string;
  time: string;
};

const schedules = {
  pending: [
    {
      id: "1",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "2",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "3",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "4",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },
  ],

  completed: [
    {
      id: "1",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "2",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "3",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "4",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },
  ],

  missed: [
    {
      id: "1",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "2",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "3",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },

    {
      id: "4",
      category: "Plastic",
      address: "2, Aturanse Estate, Gbagada Lagos",
      date: "Feb. 25, 2023",
      time: "7:25pm",
    },
  ],
};

export default function ScheduleHistory() {
  const [activeTab, setActiveTab] = useState<
    "pending" | "completed" | "missed"
  >("pending");
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null,
  );

  const statusClassName = {
    pending:
      "capitalize text-[#E24949] text-[9px] md:text-sm px-4 py-1 md:py-2 bg-[#FFEBEB] rounded-[8px]",
    completed:
      "capitalize text-primary-50 text-[9px] md:text-sm px-4 py-1 md:py-2 bg-[#E0F3EA] rounded-[8px]",
    missed:
      "capitalize text-[#C58E00] text-[9px] md:text-sm px-4 py-1 md:py-2 bg-[#FFF8E4] rounded-[8px]",
  };

  const selectedClassName = {
    pending:
      "capitalize text-[#E24949] text-[9px] px-2 py-1  bg-[#FFEBEB] rounded-[8px]",
    completed:
      "capitalize text-primary-50 text-[9px] px-2 py-1 bg-[#E0F3EA] rounded-[8px]",
    missed:
      "capitalize text-[#C58E00] text-[9px] px-2 py-1 bg-[#FFF8E4] rounded-[8px]",
  };

  return (
    <div>
      <p className="text-sm md:text-xl font-bold pb-4 pt-7 md:pt-10">
        Schedule History
      </p>

      <div className="border border-primary-10 p-5 rounded-[10px]">
        <div className="flex gap-20">
          {["pending", "completed", "missed"].map((tab) => (
            <div key={tab}>
              <button
                onClick={() =>
                  setActiveTab(tab as "pending" | "completed" | "missed")
                }
                className={`cursor-pointer capitalize pb-1 md:px-5 ${activeTab === tab ? "text-[#026937] text-[11px] md:text-base" : "text-[11px] md:text-base text-[#6D6D6D]"}`}
              >
                {tab}
              </button>

              {/*Active Line */}
              {activeTab === tab && (
                <div className="w-full h-[4px] bg-primary-50 rounded-[30px]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Separator line */}
        <div className="w-full h-[2px] bg-[#CCE1D7] rounded-[30px] mb-5"></div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5">
          {schedules[activeTab].length > 0 ? (
            schedules[activeTab].map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSchedule(item)}
                className="bg-[#F5F5F5] rounded-[17px] px-6 py-4 cursor-pointer mb-5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    {" "}
                    <p className="font-bold text-[11px] md:text-xl">
                      Container filled with {item.category}
                    </p>
                    <span className={statusClassName[activeTab]}>
                      {activeTab}
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-sm leading-tight">
                      {item.address}
                    </p>
                  </div>

                  <div className="flex gap-10 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="relative bg-primary-10 rounded-full w-5 h-5 p-1">
                        <Image
                          src="/calendar.png"
                          alt="calendar"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-[9px] md:text-base">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative bg-primary-10 rounded-full w-5 h-5 p-1">
                        <Image
                          src="/clock.png"
                          alt="clock"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-[9px] md:text-base">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>No schedules yet</p>
            </div>
          )}
        </div>
      </div>

      {/*Popup Modal */}
      <div className="">
        {selectedSchedule && (
          <div
            className="fixed inset-0 bg-black/10 z-50 flex justify-center items-center"
            onClick={() => setSelectedSchedule(null)}
          >
            <div
              className="bg-white shadow-md rounded-[20px] p-6 w-[90%] md:w-[450px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-5 pt-5">
                <p className="text-xl xl:tex-2xl font-bold">
                  {" "}
                  Schedule History
                </p>

                <Button
                  onClick={() => setSelectedSchedule(null)}
                  className="absolute top-2 right-3 text-[#FF6161] bg-white text-2xl cursor-pointer hover:bg-[#FF6161] hover:text-white rounded-full flex items-center justify-center transition w-8 h-8"
                >
                  &times;
                </Button>

                <div className="bg-[#E4F4EC] p-2 rounded-[10px] mt-5">
                  <div className="flex items-center justify-between">
                    {" "}
                    <p className="font-bold text-[11px] md:text-[13px]">
                      Container filled with {selectedSchedule.category}
                    </p>
                    <span className={selectedClassName[activeTab]}>
                      {activeTab}
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] leading-tight">
                      {selectedSchedule.address}
                    </p>
                  </div>

                  <div className="flex gap-5 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="relative bg-primary-10 rounded-full w-5 h-5 p-1">
                        <Image
                          src="/calendar.png"
                          alt="calendar"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-[9px]">
                        {selectedSchedule.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative bg-primary-10 rounded-full w-5 h-5 p-1">
                        <Image
                          src="/clock.png"
                          alt="clock"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-[9px]">
                        {selectedSchedule.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-5">
                  {/*Category */}
                  <p className="text-[9px] md:text-sm">Category</p>
                  <div className="bg-[#FFF7D4] w-[90px] flex gap-2 rounded-3xl items-center py-2 px-2 transition-all duration-200 ">
                    <div className="relative w-6 h-6 rounded-full flex items-center justify-center overflow-hidden bg-[#FFE168]">
                      <Image
                        src="/plastic.svg"
                        alt="plastic"
                        fill
                        object-contain
                        p-1
                      />
                    </div>
                    <p className="text-[9px] md:text-sm">Plastic</p>
                  </div>

                  {/*No of Plastic Waste*/}
                  <p className="text-[9px] md:text-sm mt-4">
                    Number of Plastic Waste
                  </p>
                  <div className="bg-[#F3F3F3] rounded-[10px] p-2">
                    <p className="text-[9px] md:text-sm ">500</p>
                  </div>

                  {/*No of Plastic Bag*/}
                  <p className="text-[9px] md:text-sm mt-4">
                    Number of Plastic Bag
                  </p>
                  <div className="bg-[#F3F3F3] rounded-[10px] p-2">
                    <p className="text-[9px] md:text-sm ">20</p>
                  </div>
                </div>

                <div className="flex gap-10 mt-10">
                  <Button
                    type="button"
                    className="w-[180px] py-2 text-[9px] md:text-sm font-bold text-green-60 bg-white border border-primary-60 rounded-[10px] cursor-pointer"
                  >
                    Delete
                  </Button>

                  <Button
                    type="button"
                    className="w-[180px] py-2 text-[9px] text-white md:text-sm font-bold bg-primary-60 rounded-[10px] cursor-pointer"
                  >
                    Missed
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
