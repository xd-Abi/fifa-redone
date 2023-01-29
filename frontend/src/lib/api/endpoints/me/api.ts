import { User } from "@/lib/models";
import { BaseAPI } from "../../utils";
import getAuthAPI from "../auth";
import { UserUpdateInterface } from "./types";

export class MeAPI extends BaseAPI {
  constructor() {
    super("http://localhost:8080/api/v1/me");
  }

  getMe = async (): Promise<User | undefined> => {
    const accessToken = await getAuthAPI().newAccessToken();

    const response = await this.callMethod({
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.data as User)
      .catch(() => undefined);

    return response;
  };

  putMe = async (body: UserUpdateInterface): Promise<boolean> => {
    const accessToken = await getAuthAPI().newAccessToken();

    const response = await this.callMethod({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body,
    })
      .then(() => true)
      .catch(() => false);

    return response;
  };
}
