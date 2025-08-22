// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import http from "./http";
// import {
//   GetSchedulesResponse,
//   SchedulePickupInput,
//   Schedules,
// } from "../_types/schedule";
// import { baseQuery } from "../_utils/baseQuery";

// export async function postSchedulePickup(
//   formData: SchedulePickupInput,
// ): Promise<any> {
//   return await http.post("/schedule/pickup", formData);
// }

// export const scheduleApi = createApi({
//   reducerPath: "scheduleApi",
//   baseQuery: fetchBaseQuery(baseQuery),
//   endpoints: (builder) => ({
//     getSchedules: builder.query<Schedules[], void>({
//       query: () => "schedule",
//       transformResponse: (response: GetSchedulesResponse) => {
//         return response.data;
//       },
//     }),
//   }),
// });

// export const useGetSchedulesQuery = scheduleApi.endpoints.getSchedules.useQuery;
