/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  changePassword,
  getProfile,
  postComplaint,
  postEditProfile,
} from "@/services/account";
import { profileKeys } from "./query-keys";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import {
  ComplaintInput,
  ComplaintResponse,
  EditProfileInput,
  EditProfileResponse,
  NewPasswordInput,
} from "@/types/account";

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

//////////////////////////////////////////////////////////////
{
  /*Change Password */
}
export function useNewPassword(
  options?: UseMutationOptions<
    EditProfileResponse,
    any,
    NewPasswordInput,
    unknown
  >,
) {
  return useMutation({
    mutationFn: (data: NewPasswordInput) => changePassword(data),
    meta: {
      invalidatesQuery: profileKeys.edit(),
      successMessage: "Password Updated!",
      additionalDescription: "Your password has been changed successfully.",
      errorMessage: "Error changing password",
    },
    ...options,
  });
}

{
  /*Complaint */
}
export function useComplaintMessage(
  options?: UseMutationOptions<ComplaintResponse, any, ComplaintInput, unknown>,
) {
  return useMutation({
    mutationFn: (data: ComplaintInput) => postComplaint(data),
    meta: {
      invalidatesQuery: profileKeys.edit(),
      successMessage: "Complaint sent!",
      additionalDescription:
        "Your response has been received, we will get back to you shortly.",
      errorMessage: "Error sending complaint",
    },
    ...options,
  });
}
