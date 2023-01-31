import { Tweet } from "@/lib/models";
import { BaseAPI } from "../../utils";
import getAuthAPI from "../auth";
import { TweetCreateInterface } from "./types";

export class TweetsAPI extends BaseAPI {
  constructor() {
    super("http://localhost:8080/api/v1/tweet");
  }

  getTweets = async (): Promise<Tweet[]> => {
    const result = await this.callMethod({
      method: "GET",
    });

    return result.data;
  };

  createTweet = async (body: TweetCreateInterface): Promise<string> => {
    const accessToken = await getAuthAPI().newAccessToken();
    const result = await this.callMethod({
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body,
    });

    return result.data;
  };

  likeTweet = async (tweetId: string): Promise<string> => {
    const accessToken = await getAuthAPI().newAccessToken();
    const result = await this.callMethod({
      method: "POST",
      url: "/like",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        tweet: tweetId,
      },
    });

    return result.data;
  };
}
