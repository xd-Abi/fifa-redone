import { Flag } from "./flag";

export type Points = {
  total: number;
  previous: number;
};

export type Team = {
  rank: number;
  name: string;
  flag: Flag;
  points: Points;
  code: string;
};
