import { postRedeemAirtime, postRedeemCash } from "@/services/redeem";
import {
  RedeemAirtimeInput,
  RedeemCashInput,
  RedeemResponse,
} from "@/types/redeem";
import { useMutation } from "@tanstack/react-query";

// Airtime Mutation
export function useRedeemAirtime() {
  return useMutation<RedeemResponse, Error, RedeemAirtimeInput>({
    mutationFn: (data) => postRedeemAirtime(data),
    meta: {
      successMessage: "Success!",
      additionalDescription: "You will be credited shortly.",
      errorMessage: "Error redeeming airtime",
    },
  });
}

// Cash Mutation
export function useRedeemCash() {
  return useMutation<RedeemResponse, Error, RedeemCashInput>({
    mutationFn: (data) => postRedeemCash(data),
    meta: {
      successMessage: "Success!",
      additionalDescription: "Your cash redemption is being processed.",
      errorMessage: "Error redeeming cash",
    },
  });
}
