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
import { Eye, EyeOff } from "lucide-react";

// ✅ Validation schema
const profileSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type ProfileSchema = z.infer<typeof profileSchema>;

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: ProfileSchema) => {
    console.log(values);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-5 md:px-15 mt-5 bg-[#F3F3F3] rounded-[10px] pt-5 pb-20">
      <div className="w-full max-w-5xl">
        <p className="text-base font-bold text-grey-90 mb-7">
          Change your password
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center items-start mb-6 md:mb-0"></div>

            <div className="space-y-6">
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Enter Your New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="rounded-[10px] w-full py-5 text-sm !bg-white border-none"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          {...field}
                        />
                        <div
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Enter Password Again
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="rounded-[10px] w-full py-5 text-sm !bg-white border-none"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          {...field}
                        />
                        <div
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Button */}

              <Button type="submit" className="w-full py-5 font-bold">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
