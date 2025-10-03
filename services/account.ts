import {
  EditProfileInput,
  EditProfileResponse,
  GetAccountResponse,
} from "@/types/account";
import http from "./http";

export async function getProfile(): Promise<GetAccountResponse> {
  return (await http.get("/account")).data;
}

export async function postEditProfile(
  formData: EditProfileInput,
): Promise<EditProfileResponse> {
  return (await http.put("/account/edit", formData)).data;
}
