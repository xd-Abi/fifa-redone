import { User } from "./user";

export type Tweet = {
  text: string;
  image?: string;
  creator: User;
};
