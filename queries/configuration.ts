import { getPointToNairaRate } from "@/services/configuration";

import { useQuery } from "@tanstack/react-query";

// export function useConfigurations() {
//   return useQuery({
//     queryKey: ["configurations"],
//     queryFn: getConfigurations,
//   });
// }

export function usePointToNaira() {
  return useQuery({
    queryKey: ["pointToNaira"],
    queryFn: async () => {
      const res = await getPointToNairaRate();
      console.log("POINT RATE RESPONSE:", res);
      return res;
    },
  });
}

// export function useLocationConfig() {
//   return useQuery({
//     queryKey: ["locationConfig"],
//     queryFn: getLocationConfig,
//   });
// }
