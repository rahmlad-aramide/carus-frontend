import { getWallet } from "@/services/wallet";
import { useQuery } from "@tanstack/react-query";

export function useWallet() {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: getWallet,
  });
}
