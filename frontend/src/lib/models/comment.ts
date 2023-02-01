import {User} from "./user";

export type Comment = {
  id: string;
  text: string;
  creator: User;
};
