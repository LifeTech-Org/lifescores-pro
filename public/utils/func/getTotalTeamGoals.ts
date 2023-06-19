import { MatchType } from "../types/competition";

export function getTotalTeamGoals(teamGoals: MatchType["team1"]["goals"]) {
  let total = 0;
  teamGoals.forEach((scorer) => {
    total += scorer.counts.length;
  });
  return total;
}
