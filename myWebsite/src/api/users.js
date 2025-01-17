import { BASE_URL } from "@/constants/EnvConstants";
import { basicAxios } from "./interceptor";

export async function getAllUsers() {
  return await basicAxios.get(BASE_URL + "users");
}
