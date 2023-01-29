import { AuthAPI } from "./api";

const getAuthAPI = () => {
  return new AuthAPI();
};

export default getAuthAPI;
