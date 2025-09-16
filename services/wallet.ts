/* eslint-disable @typescript-eslint/no-explicit-any */
import { WalletResponse } from "@/types/wallet";
import http from "./http";

export async function getWallet(): Promise<WalletResponse> {
  return (await http.get("/wallet")).data;
}

export async function postRedeemGiftcard(payload: {
  amount: number;
}): Promise<any> {
  return (await http.post("/wallet/redeem-giftcard", payload)).data;
}
