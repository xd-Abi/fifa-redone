import { TweetsAPI } from "./api";

const getTweetsAPI = () => {
  return new TweetsAPI();
};

export default getTweetsAPI;
