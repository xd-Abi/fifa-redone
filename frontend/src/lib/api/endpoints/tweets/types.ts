export type TweetCreateInterface = {
  text: string;
  image?: string;
};

export type AddCommentInterface = {
  tweetId: string;
  text: string;
};
