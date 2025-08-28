"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VerifyRegistrationOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      // Allow only one digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input automatically
      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Verifying OTP:", code);

    // TODO: Call backend API
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col py-10 bg-white">
        <div className="px-3 md:px-5 mb-15">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Carus Logo"
            width={117}
            height={32}
          />
        </div>

        <div className="flex-1 flex px-5 md:px-20">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[28px] font-bold">Verification</h2>
              <p className="text-base text-[#494949] mb-8">
                Enter the verification code sent to your email below.
              </p>
            </div>

            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="rounded-[10px] w-[48px] h-[48px] py-1 text-[24px] bg-[#CCE1D7] text-center border focus:outline-none"
                  />
                ))}
              </div>
              <p className="mt-7 mb-7 text-base text-center">
                Code expires in 10 minutes
              </p>
              <Button
                type="submit"
                className="rounded-[10px] w-full py-6 text-sm md:text-base font-bold"
                disabled={otp.some((digit) => !digit)}
              >
                Verify
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative hidden md:flex md:w-1/3 lg:w-1/2  overflow-hidden bg-gradient-to-t from-[#C7DCD2] via-[#E5EFEA] to-[#F9FBFA]">
        <div className="absolute bottom-0 md:right-0 xl:left-1/2 xl:-translate-x-1/2">
          <Image
            src="/wastecan.png"
            alt="waste-can"
            width={400}
            height={400}
            className="object-contain md:w-[280px] lg:w-[350px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
