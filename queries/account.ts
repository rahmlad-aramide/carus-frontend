/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getProfile, postEditProfile } from "@/services/account";
import { profileKeys } from "./query-keys";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { EditProfileInput, EditProfileResponse } from "@/types/account";

export function useGetProfile() {
  return useQuery({
    queryKey: profileKeys.all,
    queryFn: getProfile,
  });
}

export function useEditProfile(
  options?: UseMutationOptions<
    EditProfileResponse,
    any,
    EditProfileInput,
    unknown
  >,
) {
  return useMutation({
    mutationFn: (data: EditProfileInput) => postEditProfile(data),
    meta: {
      invalidatesQuery: profileKeys.edit(),
      successMessage: "Profile Updated!",
      additionalDescription: "Your profile has been updated successfully.",
      errorMessage: "Error updating profile",
    },
    ...options,
  });
}
