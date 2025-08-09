"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-[28px] font-bold mb-4">Verification</h2>
      <p className="text-base">
        Enter the verification code sent to your email below.
      </p>

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
        <p className="mt-7 mb-7 text-base text-centr">Code expires in 10mins</p>
        <Button
          type="submit"
          className="rounded-[10px] w-full py-6 text-sm md:text-base font-bold"
          disabled={otp.some((digit) => !digit)}
        >
          Verify
        </Button>
      </form>
    </div>
  );
}
