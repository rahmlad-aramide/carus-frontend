import { GeneralResponse } from ".";

export interface Wallet {
  id: string;
  naira_amount: string;
  points: string;
  last_transaction_time: string;
  token: string;
}

export interface WalletResponse extends GeneralResponse {
  data: Wallet;
}

///////////////////////////////////////////
export interface DonationCampaignInput {
  id: number;
  title: string;
  description: string;
  goal_amount: number;
  collected_amount: number;
  days_left?: number;
  image?: string;
  donations_count?: number;
}

export interface DonationResponse<T = unknown> {
  status_code: number;
  data: T;
  errors: string[];
  message: string;
}

export interface ContributionRequest {
  campaignId: number;
  amount: number;
}

export interface RedeemAirtimeInput {
  network: string;
  points: number;
  phoneNumber: string;
}

export interface RedeemCashInput {
  points: number;
  accountNumber: string;
  bankName: string;
  accountName: string;
}

export interface RedeemResponse<T = unknown> {
  status_code: number;
  data: T;
  errors: unknown[];
  message: string;
}
