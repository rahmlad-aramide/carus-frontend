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
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

// ✅ Validation schema
const profileSchema = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Enter 10 digits without the leading 0" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  address: z.string().min(5, { message: "Please enter a valid address" }),
});

type ProfileSchema = z.infer<typeof profileSchema>;

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      address: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (values: ProfileSchema) => {
    console.log(values);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-5 md:px-15 mt-10 bg-[#F3F3F3] rounded-[10px] pt-5 pb-20">
      <div className="w-full max-w-5xl">
        <p className="text-base font-bold text-grey-90 mb-7">
          Personal Information
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center items-start mb-6 md:mb-0">
              <div className="relative inline-block">
                <div className="w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={image || "/avatar.png"}
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("profileImage")?.click()
                  }
                  className="absolute -bottom-1 md:-bottom-0 -right-0 z-10 grid place-items-center rounded-full w-7 h-7 md:w-10 md:h-10 bg-primary-60 hover:bg-primary-70 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-70"
                  aria-label="Upload profile image"
                >
                  <span className="relative block w-6 h-6 md:w-8 md:h-8">
                    <Image src="/plusgreen.png" alt="" fill />
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
                        placeholder="John Champion"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="lg:hidden">
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="lg-col-start-3">
                      <FormLabel className="text-base font-bold">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
                          placeholder="John Champion"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Number
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 space-x-2">
                          <Image
                            src="/flag.svg"
                            alt="Nigeria Flag"
                            width={14}
                            height={10}
                            className="w-6 h-4 object-cover rounded-sm"
                          />
                          <span className="text-sm text-gray-700">+234</span>
                        </div>
                        <Input
                          className="rounded-[10px] w-full py-5 text-sm bg-white border-none pl-20"
                          placeholder="812 345 6789"
                          {...field}
                        />
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
                    <FormLabel className="text-base font-bold">
                      Home Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
                        placeholder="2 Atunrase Estate, Gbagada, Lagos"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold">
                      Enter Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
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

              {/* Button */}

              <Button type="submit" className="w-full py-5 font-bold">
                Save Changes
              </Button>
            </div>

            <div className="hidden lg:block">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="lg-col-start-3">
                    <FormLabel className="text-base font-bold">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[10px] w-full py-5 text-sm bg-white border-none"
                        placeholder="John Champion"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
