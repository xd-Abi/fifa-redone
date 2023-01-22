export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
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
