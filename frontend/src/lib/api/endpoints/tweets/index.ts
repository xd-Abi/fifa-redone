import { TweetsAPI } from "./api";

const getTweetAPI = () => {
  return new TweetsAPI();
};

export default getTweetAPI;
