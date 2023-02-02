import {Tweet} from "@/lib/models";
import {BaseAPI} from "../../utils";
import getAuthAPI from "../auth";
import {AddCommentInterface, TweetCreateInterface} from "./types";

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

  getTweet = async (id: string): Promise<Tweet> => {
    const result = await this.callMethod({
      method: "GET",
      params: {
        tweet: id,
      },
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

  deleteTweet = async (id: string): Promise<string> => {
    const accessToken = await getAuthAPI().newAccessToken();
    const result = await this.callMethod({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        tweet: id,
      },
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

  addComment = async (body: AddCommentInterface): Promise<string> => {
    const accessToken = await getAuthAPI().newAccessToken();
    const result = await this.callMethod({
      method: "POST",
      url: "/comment",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body,
    });

    return result.data;
  };
}
