"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

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

const schema = z.object({
  contact: z
    .string()
    .min(1, "This field is required")
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^0?\d{10}$/.test(value),
      { message: "Enter a valid email or phone number" },
    ),
});

export default function ForgotPassword() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      contact: "",
    },
  });

  const onSubmit = () => {
    try {
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Enter a valid email or phone number", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-[500px] h-[300px] relative overflow-hidden bg-white shadow-[0_4px_20px_rgba(2,1,129,0.63)] rounded-xl shadow-lg flex items-center justify-center">
          <Image
            src="/waste.png"
            alt="Waste Bin"
            fill
            className="object-contain object-center"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h4>Successful!</h4>
            <p className="text-base mt-3">
              A reset link has been sent <br /> to your email.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* flex form and bg image */}
      <div className="w-full md:w-2/3 flex flex-col py-10 bg-white">
        {/* Logo */}
        <div className="px-3 md:px-5 mb-15">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Carus Logo"
            width={117}
            height={32}
            className="w-[117px] h-[32px]"
          />
        </div>

        <div className="flex-1 flex px-5 md:px-20">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[28px] font-bold">Forgot Password</h2>
              <p className="text-base text-[#494949] mb-8">
                Enter your registered Email address to receive reset link
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">
                        Email or Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full py-6 text-sm bg-[#F3F3F3] border-none"
                          placeholder="e.g example@mail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="rounded-[10px] w-full py-6 text-sm md:text-base font-bold mt-8"
                >
                  Send Reset Link
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[50%] relative overflow-hidden bg-gradient-to-t from-[#C7DCD2] via-[#E5EFEA] to-[#F9FBFA]">
        <div className="absolute inset-0">
          <Image
            src="/wastecan1.svg"
            alt="Waste Bin"
            fill
            className="object-contain object-right bg-inherit"
          />
        </div>
      </div>
    </div>
  );
}
