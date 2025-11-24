/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./http";
import {
  DonationCampaignInput,
  DonationResponse,
  RedeemAirtimeInput,
  RedeemCashInput,
  RedeemResponse,
  WalletResponse,
} from "@/types/wallet";

export async function getWallet(): Promise<WalletResponse> {
  return (await http.get("/wallet")).data;
}

export async function postRedeemGiftcard(payload: {
  amount: number;
}): Promise<any> {
  return (await http.post("/wallet/redeem-giftcard", payload)).data;
}

////////////////////////////////////////////////////////////

// Get all campaigns
export async function getDonationCampaigns(): Promise<
  DonationResponse<DonationCampaignInput[]>
> {
  const res = await http.get("/donation/campaigns");
  return res.data;
}

// Get a single campaign by ID
export async function getDonationCampaign(
  id: number,
): Promise<DonationResponse<DonationCampaignInput>> {
  const res = await http.get(`/donation/campaigns/${id}`);
  return res.data;
}

// Contribute to a campaign
export async function contributeToCampaign(
  campaignId: number,
  amount: number,
): Promise<DonationResponse<any>> {
  const res = await http.post("/donation/contribute", {
    campaignId,
    amount,
  });
  return res.data;
}

// Airtime Redemption
export async function postRedeemAirtime(
  payload: RedeemAirtimeInput,
): Promise<RedeemResponse<any>> {
  const res = await http.post("/redeem/airtime", payload);
  return res.data;
}

// Cash Redemption
export async function postRedeemCash(
  payload: RedeemCashInput,
): Promise<RedeemResponse<any>> {
  const res = await http.post("/redeem/cash", payload);
  return res.data;
}
