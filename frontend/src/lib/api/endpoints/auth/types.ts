import { User } from "@/lib/models";

export type RegisterUserInterface = User & {
  password: string;
};
