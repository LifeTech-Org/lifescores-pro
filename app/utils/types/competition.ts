type TPlayer = {
  id: string;
  name: string;
  age: number;
  img: string;
  goals: number;
  yellowCards: number;
  redCards: number;
};
type TeamType = {
  id: string;
  name: string;
  img: string;
  players: TPlayer[];
};

// export type MatchTeamType = {
//   details: {
//     name: string;
//     img: {
//       src: string;
//       alt: string;
//     };
//   };
//   stats: {
//     title: string;
//     stats: {
//       type: "open play" | "pk" | "own goal" | null;
//       player: { name: string; id: string };
//       time: string;
//     }[];
//   }[];
// };

export type TMatch = {
  id: string;
  title: string;
  location: string;
  status: {
    title: "live" | "ended" | "upcoming" | "paused" | "postponed";
    substatus:
      | "1st-half-normal-time"
      | "1st-half-added-time"
      | "1st-half-break"
      | "2nd-half-normal-time"
      | "2nd-half-added-time"
      | "2nd-half-break"
      | "1st-half-extra-time"
      | "1st-half-etxra-time-added-time"
      | "2nd-half-extra-time"
      | "2nd-half-etxra-time-added-time"
      | "penalties";
  };
  competition: {
    id: string;
    name: string;
    seasons: number[];
  };
  details: {
    stadium: string;
    time: string;
    date: string;
  };
  stats: {
    title: string;
    team1: {
      player: { id: string; name: string };
      counts: { minute: string }[];
    }[];
    team2: {
      player: { id: string; name: string };
      counts: { minute: string }[];
    }[];
  }[];
  team1: {
    name: string;
    img: {
      src: string;
      alt: string;
    };
    goals: {
      player: { id: string; name: string };
      counts: {
        type: "open play" | "pk" | "own goal" | null;
        minute: number;
      }[];
    }[];
  };
  team2: {
    name: string;
    img: {
      src: string;
      alt: string;
    };
    goals: {
      player: { id: string; name: string };
      counts: {
        type: "open play" | "pk" | "own goal" | null;
        minute: number;
      }[];
    }[];
  };
};

export type TCompetition = {
  id: string;
  name: string;
  img: string;
  currentSeason: string;
  status: "ended" | "active" | "break";
};

export type MatchesType = {
  title: string;
  matches: TMatch[];
};
