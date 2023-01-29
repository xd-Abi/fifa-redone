export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER",
}

export type User = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: Gender;
  verified: string;
};
