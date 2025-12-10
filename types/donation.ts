import { GeneralResponse } from ".";

export interface Donation {
  id: number;
  title: string;
  description: string;
  goal_amount: number;
  collected_amount: number;
  days_left?: number;
  image?: string;
  donations_count?: number;
}

export interface DonationResponse extends GeneralResponse {
  data: Donation[];
}

export interface ContributionRequest {
  campaignId: number;
  amount: number;
}
