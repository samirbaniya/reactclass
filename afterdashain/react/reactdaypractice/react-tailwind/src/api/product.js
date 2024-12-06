import axios from "axios";
import { BASE_URL } from "../constants/EnvConstants";

export async function getAllProduct() {
  return await axios.get(BASE_URL + "products");
}
export async function getSingleProduct(id) {
  return await axios.get(BASE_URL + "products/" + id);
}
