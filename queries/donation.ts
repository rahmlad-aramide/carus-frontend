import {
  contributeToCampaign,
  getDonationCampaign,
  getDonationCampaigns,
} from "@/services/donation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
