import {
  getConfigurations,
  getLocationConfig,
  getPointToNairaRate,
} from "@/services/configuration";
import { useQuery } from "@tanstack/react-query";

export function useConfigurations() {
  return useQuery({
    queryKey: ["configurations"],
    queryFn: getConfigurations,
  });
}

export function usePointToNaira() {
  return useQuery({
    queryKey: ["pointToNaira"],
    queryFn: getPointToNairaRate,
  });
}

export function useLocationConfig() {
  return useQuery({
    queryKey: ["locationConfig"],
    queryFn: getLocationConfig,
  });
}
