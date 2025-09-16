/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/services/http";
import { SchedulePickupInput, ScheduleResponse } from "@/types/schedule";

export async function getSchedule(): Promise<ScheduleResponse> {
  return (await http.get("/schedule")).data;
}

export async function postSchedulePickup(
  formData: SchedulePickupInput,
): Promise<any> {
  return await http.post("/schedule/pickup", formData);
}
