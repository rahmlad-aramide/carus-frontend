"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [done, setDone] = useState(false);

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Resetting password with token:", token);
    setDone(true);
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
              <h2 className="text-[28px] font-bold">Reset Password</h2>
              <p className="text-base text-[#494949] mb-8">
                Enter your new password to reset your password
              </p>
            </div>

            {done ? (
              <p className="text-green-600 text-center">
                Your password has been successfully reset.
              </p>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-7">
                <div>
                  <label htmlFor="email" className="block text-base mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type="password"
                      className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-base mb-3">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      type="password"
                      className="rounded-[10px] w-full py-6 text-sm bg-[#F3F3F3] border-none"
                      placeholder="Enter password"
                      value={newPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="rounded-[10px] w-full py-6 text-sm md:text-base font-bold mt-8"
                >
                  Reset Password
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
