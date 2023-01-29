import { User } from "@/lib/models";

export type SignUpInterface = User & {
  password: string;
};

export type SignInUserInterface = {
  emailOrUsername: string;
  password: string;
};
