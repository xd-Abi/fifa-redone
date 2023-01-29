import { RankingsAPI } from "./api";

const getRankingsAPI = () => {
  return new RankingsAPI();
};

export default getRankingsAPI;
