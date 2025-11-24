import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getDonationCampaign,
  getDonationCampaigns,
  contributeToCampaign,
  postRedeemCash,
  postRedeemAirtime,
} from "@/services/wallet";
import { RedeemAirtimeInput, RedeemCashInput } from "@/types/wallet";
import { RedeemResponse } from "./../types/wallet";

//Get List of campaigns
export const useDonationCampaigns = () =>
  useQuery({
    queryKey: ["donation-campaigns"],
    queryFn: getDonationCampaigns,
  });

//Get a campaign
export const useDonationCampaign = (id: number) =>
  useQuery({
    queryKey: ["donation-campaign", id],
    queryFn: () => getDonationCampaign(id),
    enabled: !!id,
  });

//Contribute to campaign
export const useContributeToCampaign = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      campaignId,
      amount,
    }: {
      campaignId: number;
      amount: number;
    }) => contributeToCampaign(campaignId, amount),
    onSuccess: (data) => {
      toast.success("Donation successful! Thank you for your contribution.");
      queryClient.invalidateQueries({ queryKey: ["donation-campaigns"] });
      queryClient.invalidateQueries({ queryKey: ["donation-campaign"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to process donation. Please try again.",
      );
    },
  });
};

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
