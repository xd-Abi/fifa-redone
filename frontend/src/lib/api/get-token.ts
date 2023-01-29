import axios from "axios";

export const getAccessToken = () =>
  axios.post("http://localhost:8080/api/v1/auth/refresh", {
    refreshToken: localStorage.getItem("fifa-refresh-token"),
  });
