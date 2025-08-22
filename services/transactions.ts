// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import { Transactions, TransactionsResponse } from "../_types/transaction";
// import { baseQuery } from "../_utils/baseQuery";

// export const transactionApi = createApi({
//   reducerPath: "transactionApi",
//   baseQuery: fetchBaseQuery(baseQuery),
//   endpoints: (builder) => ({
//     getTransactions: builder.query<Transactions[], void>({
//       query: () => "transactions",
//       transformResponse: (response: TransactionsResponse) => {
//         return response.data;
//       },
//     }),
//   }),
// });

// export const useGetTransactionsQuery =
//   transactionApi.endpoints.getTransactions.useQuery;
