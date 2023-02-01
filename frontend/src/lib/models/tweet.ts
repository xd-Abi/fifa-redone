import {Comment} from "./comment";
import {User} from "./user";

export type Tweet = {
  id: string;
  text: string;
  image?: string;
  creator: User;
  likes: User[];
  comments: Comment[];
};
