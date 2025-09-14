import { CustomError } from "@/tanstack-query";
import { AlertCircle } from "lucide-react";

export const ErrorAlert = ({ error }: { error: CustomError }) => {
  return (
    <p className="text-sm text-red-500 flex gap-1 items-center">
      <AlertCircle size={14} />
      {error?.response?.data?.message || "Something went wrong"}
    </p>
  );
};
