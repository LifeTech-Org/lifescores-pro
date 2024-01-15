import { MatchesType } from "@/app/utils/types";
import { SportsSoccer } from "@mui/icons-material";
import Link from "next/link";
import { Match } from "./match";

export default function MatchesLayout() {
  // const data: MatchesType = { title: "Premier League", matches: [] };
  const data: MatchesType = {
    title: "Premier League",
    matches: [
      {
        id: "match id",
        title: "Match day 1",
        details: {
          time: "",
          date: "15, Sep 2023",
          stadium: "Arena",
        },
        status: {
          title: "live",
          substatus: "1st-half-normal-time",
        },
        stats: [],
        competition: {
          seasons: [],
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          img: {
            alt: "alt",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
          },
          name: "Manchester united",

          goals: [
            {
              player: { id: "playerid", name: "Sancho" },

              counts: [],
            },
            {
              player: { id: "playerid", name: "Sancho" },

              counts: [],
            },
          ],
        },
        team2: {
          img: {
            alt: "alt",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "West ham",
          goals: [
            {
              player: { id: "playerid", name: "Messi" },

              counts: [],
            },
          ],
        },
      },
    ],
  };
  return (
    <dl className="flex flex-col w-full  py-2 bg-zinc-900/60">
      <dt className="text-zinc-200 text-md my-2 ml-4">{data.title}</dt>
      <dd className="w-full">
        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {data.matches.map((match) => {
            return (
              <li key={match.id} className="w-full">
                <Match match={match} />
              </li>
            );
          })}
        </ul>
      </dd>
    </dl>
  );
}
