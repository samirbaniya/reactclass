import axios from "axios";
import { BASE_URL } from "../constants/EnvConstants";

export async function login(data) {
  return await axios({
    url: BASE_URL + "auth/login",
    method: "POST",
    data: data,
  });
}

export async function register() {
  return await axios.post(BASE_URL + "auth/register");
}
