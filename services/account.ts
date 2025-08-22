// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import http from "./http";
// import {
//   Account,
//   AccountResponse,
//   EditProfileInput,
//   EditProfileResponse,
// } from "../_types/account";
// import { baseQuery } from "../_utils/baseQuery";

// export async function postEditProfile(
//   formData: EditProfileInput,
// ): Promise<EditProfileResponse> {
//   return (await http.put("/account/edit", formData)).data;
// }

// export const accountApi = createApi({
//   reducerPath: "accountApi",
//   baseQuery: fetchBaseQuery(baseQuery),
//   endpoints: (builder) => ({
//     getAccount: builder.query<Account, void>({
//       query: () => "account",
//       transformResponse: (response: AccountResponse) => {
//         return response.data;
//       },
//     }),
//   }),
// });

// export const useGetAccountQuery = accountApi.endpoints.getAccount.useQuery;
