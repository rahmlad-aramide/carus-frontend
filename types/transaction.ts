import { GeneralResponse } from ".";

export interface Transactions {
  transaction_id: string;
  amount: string;
  charges: string;
  date: string;
  type: string;
  status: string;
}

export interface TransactionsResponse extends GeneralResponse {
  data: Transactions[];
}
