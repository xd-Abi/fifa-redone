import { User } from "@/lib/models";
import { BaseAPI } from "../../utils";
import getAuthAPI from "../auth";

export class MeAPI extends BaseAPI {
  constructor() {
    super("http://localhost:8080/api/v1/me");
  }

  getMe = async (): Promise<User | undefined> => {
    const accessToken = await getAuthAPI().newAccessToken();

    const response = this.callMethod({
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.data as User)
      .catch(() => undefined);

    return response;
  };
}
