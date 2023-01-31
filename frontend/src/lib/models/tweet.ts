import { User } from "./user";

export type Tweet = {
  id: string;
  text: string;
  image?: string;
  creator: User;
};
