"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import NotificationBell from "@/components/notificationbell";
import ImageContainer from "@/components/imagecontainer";
import { Switch } from "@headlessui/react";
import InfoToolTip from "@/components/infotooltip";
import { lagosLGAs } from "@/components/lagosLGAs";
import WasteSelector from "@/components/wasteselector";
import { useRouter } from "next/navigation";

// ✅ Validation schema
const schedulePickupSchema = z.object({
  noOfPlasticWaste: z.string().min(2, { message: "Minimum of 100 pieces" }),
  noOfPlasticBag: z
    .string()
    .nonempty({ message: "Please indicate number of bags" }),
  massOfPlasticWaste: z.string().nonempty({ message: "Minimum of 1kg" }),
  address: z.string().min(5, { message: "Please enter a valid address" }),
  lga: z.string().nonempty({ message: "Please indicate a lga" }),
  date: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, {
    message: "Please enter date in DD/MM/YYYY format",
  }),
});

type SchedulePickupSchema = z.infer<typeof schedulePickupSchema>;

export default function Page() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  const form = useForm<SchedulePickupSchema>({
    resolver: zodResolver(schedulePickupSchema),
    mode: "onChange",
    defaultValues: {
      noOfPlasticWaste: "",
      noOfPlasticBag: "",
      massOfPlasticWaste: "",
      date: "",
      address: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      console.log("Selected file:", file);
    }
  };

  const onSubmit = (values: SchedulePickupSchema) => {
    console.log(values);
  };

  return (
    <>
      <div className="fixed top-0 z-40 bg-white flex justify-between items-center px-2 md:pr-12 h-16 md:h-20 pt-12 md:pt-18 pb-10 w-full md:w-[calc(100%-16rem)]">
        {/* Left side */}

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="bg-[#F3F3F3] rounded-[10px] text-[#292D32] p-2"
          >
            <ArrowLeft />
          </button>
          <p className="text-xl md:text-3xl font-black">Schedule Pickup</p>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <NotificationBell />
          <ImageContainer />
        </div>
      </div>

      <div className="px-2">
        <p className="text-[14px] md:text-base text-grey-90 mb-3 mt-20 md:mt-30">
          Category
        </p>
        <WasteSelector />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-6 grid grid-cols-1 lg:w-2/3 xl:grid-cols-2 xl:w-full px-2 mt-5 pb-10"
        >
          {/* Number of Plastic Waste */}
          <FormField
            control={form.control}
            name="noOfPlasticWaste"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base text-grey-90">
                  Number of Plastic Waste
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                    placeholder="Minimum of 100 pieces"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of Plastic Bag */}
          <FormField
            control={form.control}
            name="noOfPlasticBag"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base text-grey-90 justify-between">
                  Number of Plastic Bag
                  <InfoToolTip
                    text=" Ensure your waste has been properly sorted by
                            category and select the number of bags you're
                            scheduling for pickup."
                  />
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                    placeholder="Please indicate number of bags"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mass of Plastic Waste */}
          <FormField
            control={form.control}
            name="massOfPlasticWaste"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base text-grey-90 justify-between">
                  Mass of Plastic Waste
                  <InfoToolTip
                    text=" Ensure your waste has been properly sorted by
                            category and select the number of bags you're
                            scheduling for pickup."
                  />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                      placeholder="Minimum of 1kg"
                      {...field}
                    />
                    <div className="absolute w-4 h-4 top-4 right-2">
                      <Image
                        src="/kg.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base text-grey-90">
                  Pick up Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                      placeholder="Turn on location"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-0 w-[25px] h-[25px]"
                    >
                      <Image
                        src="/location2.png"
                        alt="info"
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* LGA */}
          <FormField
            control={form.control}
            name="lga"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base text-grey-90">
                  Select LGA
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="rounded-[10px] w-full py-4 text-sm bg-[#F3F3F3] border-none px-2"
                  >
                    <option value="">Select LGA</option>
                    {lagosLGAs.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-sm md:text-base text-grey-90">
                  Pick up Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none justify-between text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        field.value
                      ) : (
                        <span className="text-gray-400">DD/MM/YYYY</span>
                      )}
                      <CalendarIcon className="flex justify-end h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(selected) => {
                        if (selected) {
                          field.onChange(format(selected, "dd/MM/yyyy"));
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Photos of Trash */}
          <div>
            <label
              htmlFor="photos"
              className="text-sm md:text-base text-grey-90 font-medium"
            >
              Photos of trash
            </label>

            <div className="bg-[#F3F3F3] flex items-center justify-center w-full h-[96px] rounded-[10px] mt-2 cursor-pointer relative">
              {/* Hidden Input */}
              <input
                id="photos"
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />

              {/* Icon */}
              <div className="relative w-5 h-5 pointer-events-none">
                <Image
                  src="/gallery-import.png"
                  alt="upload image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/*Call on Arrival */}
          <div className="flex flex-col lg:flex-row w-full gap-5 xl:mt-8">
            <div className="flex flex-1 items-center justify-between bg-[#F3F3F3] rounded-[10px] py-4 px-3 h-[48px]">
              <span className="text-grey-90 text-sm md:text-base font-medium">
                Call on Arrival
              </span>

              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary-10" : "bg-grey-10"
                } relative inline-flex h-[16px] w-[31px] items-center rounded-full transition-colors`}
              >
                <span
                  className={`${
                    enabled
                      ? "translate-x-[14px] bg-primary-60"
                      : "translate-x-[2px] bg-grey-30"
                  } inline-block h-[13px] w-[14px] transform rounded-full transition-transform`}
                />
              </Switch>
            </div>

            {/* Set Reminder */}
            <label className="flex flex-1 items-center justify-between bg-[#F3F3F3] rounded-[10px] py-4 px-3 h-[48px]">
              <input
                type="checkbox"
                name="reminder"
                value="set"
                className="sr-only peer"
              />
              <span className="text-grey-90 text-sm md:text-base font-medium">
                Set Reminder
              </span>

              <span
                className="w-[20px] h-[20px] rounded-full border-2 border-grey-30 bg-[#F3F3F3] 
                flex items-center justify-center transition peer-checked:[&>span]:bg-primary-60"
              >
                <span className="w-[10px] h-[10px] bg-transparent rounded-full transition"></span>
              </span>
            </label>
          </div>

          {/* Button */}

          <div className="col-span-1 xl:col-start-2">
            <Button
              type="submit"
              className="w-full py-7 text-sm md:text-base font-bold"
            >
              Schedule Pickup
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
