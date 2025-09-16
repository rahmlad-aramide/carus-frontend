import { EditProfileInput, EditProfileResponse } from "@/types/account";
import http from "./http";

export async function getProfile(): Promise<EditProfileResponse> {
  return (await http.get("/account")).data;
}

export async function postEditProfile(
  formData: EditProfileInput,
): Promise<EditProfileResponse> {
  return (await http.put("/account/edit", formData)).data;
}
