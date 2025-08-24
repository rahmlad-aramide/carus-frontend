/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeneralResponse } from ".";

export interface ScheduleState {
  errors: any[];
  isLoading: boolean;
  isScheduled: boolean;
  schedulePickup: ScheduleResponse | null;
}

export interface ScheduleResponse extends GeneralResponse {
  data: any;
}

export interface SchedulePickupInput {
  material: string;
  material_amount: number;
  container_amount: number;
  address: string;
  date: string;
}

export interface Schedules {
  id: string;
  address: string;
  amount: string;
  category: string;
  container_amount: number;
  date: string;
  lga: string;
  material: string;
  material_amount: number;
  schedule_date: string;
  status: string;
}

export interface GetSchedulesResponse extends GeneralResponse {
  data: Schedules[];
}
