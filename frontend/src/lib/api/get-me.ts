import axios from "axios";
import { User } from "../models";
import { getAccessToken } from "./get-token";

export const getMe = async () => {
  try {
    const token = await getAccessToken();
    localStorage.setItem("fifa-refresh-token", token.data.refreshToken);

    const response = await axios.get("http://localhost:8080/api/v1/me", {
      headers: {
        Authorization: `Bearer ${token.data.accessToken}`,
      },
    });

    return response.data;
  } catch (err) {
    return undefined;
  }
};
