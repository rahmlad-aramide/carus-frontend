// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import { Wallet, WalletResponse } from "../_types/wallet";
// import { baseQuery } from "../_utils/baseQuery";

// export const walletApi = createApi({
//   reducerPath: "walletApi",
//   baseQuery: fetchBaseQuery(baseQuery),
//   endpoints: (builder) => ({
//     getWallet: builder.query<Wallet, void>({
//       query: () => "wallet",
//       transformResponse: (response: WalletResponse) => {
//         return response.data;
//       },
//     }),
//     postRedeemGiftCard: builder.mutation({
//       query: (payload: { amount: number }) => ({
//         url: "/wallet/redeem-giftcard",
//         method: "POST",
//         body: payload,
//       }),
//     }),
//   }),
// });

// export const { usePostRedeemGiftCardMutation } = walletApi;

// export const useGetWalletQuery = walletApi.endpoints.getWallet.useQuery;
