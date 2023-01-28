import axios from "axios";
import { Team } from "../models";

export type GetRankingsResponse = {
  mens: Team[];
  womens: Team[];
};

const mapToTeam = (input: any) => {
  const output = input.map(function (data: any): Team {
    return {
      rank: data.rankingItem.rank,
      name: data.rankingItem.name,
      flag: data.rankingItem.flag,
      points: {
        total: data.rankingItem.totalPoints,
        previous: data.previousPoints,
      },
      code: data.rankingItem.countryCode,
    };
  }) as Team[];

  return output;
};

export const getRankings = async (): Promise<GetRankingsResponse> => {
  // @TODO: Use offical API
  const mensRaking = await axios
    .get("https://www.fifa.com/api/ranking-overview?dateId=id13869")
    .then((response) => mapToTeam(response.data.rankings) as Team[]);

  const womensRaking = await axios
    .get("https://www.fifa.com/api/ranking-overview?dateId=ranking_20221209")
    .then((response) => mapToTeam(response.data.rankings) as Team[]);

  return {
    mens: mensRaking,
    womens: womensRaking,
  };
};
