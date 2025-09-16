"use client";
import { useGetProfile } from "@/queries/account";

export const TopNav = () => {
  const { data, isPending, isError, error } = useGetProfile();
  console.log(
    "🚀 ~ TopNav userdata ~ data, isPending, isError, error:",
    data,
    isPending,
    isError,
    error,
  );
  return (
    <header>
      <div>{/* Screen name/info */}</div>
      <div>{/* Notification bell and image container */}</div>
    </header>
  );
};
