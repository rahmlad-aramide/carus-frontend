/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getSchedule,
  getScheduleById,
  postSchedulePickup,
} from "@/services/schedule";
import {
  queryOptions,
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

export function useGetScheduleByIdQueryOptions(scheduleId?: string) {
  return queryOptions({
    queryKey: scheduleKeys.id(scheduleId),
    queryFn: () => getScheduleById(scheduleId),
    enabled: !!scheduleId,
  });
}

export function usePostSchedulePickup(
  options?: UseMutationOptions<
    ScheduleResponse,
    any,
    SchedulePickupInput,
    unknown
  >
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
