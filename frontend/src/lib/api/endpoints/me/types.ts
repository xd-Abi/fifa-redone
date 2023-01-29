import { Gender } from "@/lib/models";

export type UserUpdateInterface = {
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: Gender;
};
