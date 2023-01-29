import { Team } from "@/lib/models";
import { BaseAPI } from "../../utils";

export class RankingsAPI extends BaseAPI {
  constructor() {
    super("https://www.fifa.com/api/ranking-overview");
  }

  getMensRanking = async (): Promise<Team[]> => {
    const result = await this.callMethod({
      method: "GET",
      params: {
        dateId: "id13869",
      },
    });

    return this.mapToTeam(result.data.rankings);
  };

  getWomensRanking = async (): Promise<Team[]> => {
    const result = await this.callMethod({
      method: "GET",
      params: {
        dateId: "ranking_20221209",
      },
    });

    return this.mapToTeam(result.data.rankings);
  };

  private mapToTeam = (input: any) => {
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
}
