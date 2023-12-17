import { TMatch } from "../types/competition";

export function getTotalTeamGoals(teamGoals: TMatch["team1"]["goals"]) {
  let total = 0;
  teamGoals.forEach((scorer) => {
    total += scorer.counts.length;
  });
  return total;
}
