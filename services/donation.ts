import http from "./http";
import { DonationResponse } from "@/types/donation";

// Get all campaigns
export async function getDonationCampaigns(): Promise<DonationResponse> {
  const res = await http.get("/donation/campaigns");
  return res.data;
}

// Get a single campaign by ID
export async function getDonationCampaign(
  id: number,
): Promise<DonationResponse> {
  const res = await http.get(`/donation/campaigns/${id}`);
  return res.data;
}

// Contribute to a campaign
export async function contributeToCampaign(
  campaignId: number,
  amount: number,
): Promise<DonationResponse> {
  const res = await http.post("/donation/contribute", {
    campaignId,
    amount,
  });
  return res.data;
}
