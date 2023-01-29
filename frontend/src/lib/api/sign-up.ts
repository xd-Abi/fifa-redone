import axios from "axios";

export const checkUsername = (username: string) =>
  axios.get("http://localhost:8080/api/v1/auth/check-username", {
    params: { username },
  });

export const checkEmail = (email: string) =>
  axios.get("http://localhost:8080/api/v1/auth/check-email", {
    params: { email },
  });

export const signUp = (body: any) =>
  axios.post("http://localhost:8080/api/v1/auth/sign-up", body);
