export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER",
}

export type User = {
  uid?: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: Gender;
  picture?: string;
  verified?: boolean;
};
