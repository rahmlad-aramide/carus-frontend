/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSchedule, postSchedulePickup } from "@/services/schedule";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { scheduleKeys } from "./query-keys";
import { SchedulePickupInput, ScheduleResponse } from "@/types/schedule";

export function useGetSchedule() {
  return useQuery({
    queryKey: scheduleKeys.all,
    queryFn: getSchedule,
  });
}

export function usePostSchedulePickup(
  options?: UseMutationOptions<
    ScheduleResponse,
    any,
    SchedulePickupInput,
    unknown
  >,
) {
  return useMutation({
    mutationFn: (data: SchedulePickupInput) => postSchedulePickup(data),
    meta: {
      invalidatesQuery: scheduleKeys.pickup(),
      successMessage: "Pickup Scheduled!",
      additionalDescription: "Your pickup has been scheduled successfully.",
      errorMessage: "Error scheduling pickup",
    },
    ...options,
  });
}
