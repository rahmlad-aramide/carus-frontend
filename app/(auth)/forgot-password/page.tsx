"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending reset link to:", email);

    setSent(true);
  };

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

            {sent ? (
              <p className="text-green-600 text-center">
                A reset link has been sent to your email.
              </p>
            ) : (
              <form onSubmit={handleSendLink}>
                <label htmlFor="email" className="block text-base mb-2">
                  Email address
                </label>
                <Input
                  type="email"
                  className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none mb-10"
                  placeholder="e.g example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  className="rounded-[10px] w-full py-6 text-sm md:text-base font-bold"
                >
                  Send Reset Link
                </Button>
              </form>
            )}
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
