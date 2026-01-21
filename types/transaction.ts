import { GeneralResponse } from ".";

export interface Transactions {
  transaction_id: string;
  amount: string;
  charges: string;
  date: string;
  type: "airtime" | "cash";
  status: "pending" | "paid" | "declined";
  description: string;
}

export interface TransactionsResponse extends GeneralResponse {
  data: Transactions[];
}
