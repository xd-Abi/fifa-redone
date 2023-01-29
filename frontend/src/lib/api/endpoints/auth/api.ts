import { BaseAPI } from "../../utils";
import { RegisterUserInterface } from "./types";

export class AuthAPI extends BaseAPI {
  constructor() {
    super("http://localhost:8080/api/v1/auth/");
  }

  registerUser = async (body: RegisterUserInterface): Promise<boolean> => {
    const response = await this.callMethod({
      url: "sign-up",
      method: "POST",
      body,
    })
      .then((response) => {
        localStorage.setItem("fifa-refresh-token", response.data.refreshToken);
        return true;
      })
      .catch(() => false);

    return response;
  };

  newAccessToken = async (): Promise<string> => {
    const response = await this.callMethod({
      url: "refresh",
      method: "POST",
      body: {
        refreshToken: localStorage.getItem("fifa-refresh-token"),
      },
    })
      .then((response) => {
        localStorage.setItem("fifa-refresh-token", response.data.refreshToken);
        return response.data.accessToken;
      })
      .catch(() => "");

    return response;
  };

  isUsernameUsed = async (username: string): Promise<boolean> => {
    const response = await this.callMethod({
      url: "check-username",
      method: "GET",
      params: { username },
    })
      .then(() => true)
      .catch(() => false);

    return response;
  };

  isEmailUsed = async (email: string): Promise<boolean> => {
    const response = await this.callMethod({
      url: "check-email",
      method: "GET",
      params: { email },
    })
      .then(() => true)
      .catch(() => false);

    return response;
  };

  isUserSignedIn = () => {
    return localStorage.getItem("fifa-refresh-token")?.length != 0;
  };
}
