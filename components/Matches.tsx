import { MatchesType } from "@/public/utils/types";
import { SportsSoccer } from "@mui/icons-material";
import Link from "next/link";

export default function MatchesLayout() {
  // const data: MatchesType = { title: "Premier League", matches: [] };
  const data: MatchesType = {
    title: "Premier League",
    matches: [
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "04:00 PM",
        },
        status: "upcoming",
        competition: {
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

          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "04:00 PM",
        },
        status: "live",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "04:00 PM",
              type: "open play",
            },
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "04:00 PM",
        },
        status: "ended",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "04:00 PM",
        },
        status: "paused",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "04:00 PM",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "04:00 PM" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "04:00 PM",
        },
        status: "live",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "04:00 PM" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [{ player: { id: "playerid", name: "Werner" }, time: "time" }],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "time",
        },
        status: "ended",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [{ player: { id: "playerid", name: "Werner" }, time: "time" }],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
        },
      },
      {
        id: "match id",
        title: "Match day 1",
        details: {
          date: "15, Sep 2023",
          stadium: "Arena",
          time: "time",
        },
        status: "upcoming",
        competition: {
          id: "compid",
          name: "Premier League",
        },
        location: "Nigeria",
        team1: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
            },
            name: "Manchester united",
          },
          fouls: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          goals: [
            {
              player: { id: "playerid", name: "Sancho" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Ronaldo" }, time: "time" },
          ],
        },
        team2: {
          details: {
            img: {
              alt: "alt",
              src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
            },
            name: "West ham",
          },
          fouls: [{ player: { id: "playerid", name: "Werner" }, time: "time" }],
          goals: [
            {
              player: { id: "playerid", name: "Messi" },
              time: "time",
              type: "open play",
            },
          ],
          offsides: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          redCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
          ],
          yellowCards: [
            { player: { id: "playerid", name: "Werner" }, time: "time" },
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
            const [team1won, team2won] = [
              match.team1.goals.length > match.team2.goals.length,
              match.team2.goals.length > match.team1.goals.length,
            ];
            return (
              <li key={match.id} className="w-full">
                <Link
                  href={`/c/${match.competition.id}/[match]`}
                  as={`/c/${match.competition.id}/match1`}
                  className="flex p-4 hover:bg-zinc-800 cursor-pointer sm:mx-4 sm:rounded-md"
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="gap-2 flex items-center">
                        <img
                          src={match.team1.img.src}
                          alt={match.team1.img.alt}
                          className="h-5 w-5"
                        />
                        <span className="text-zinc-200 text-sm">
                          {match.team1.name}
                        </span>
                      </div>
                      <div
                        className={
                          (team1won ? "text-white " : "text-zinc-400 ") +
                          "px-2 text-md"
                        }
                      >
                        {match.team1.goals.length}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="gap-2 flex items-center">
                        <img
                          src={match.team2.img.src}
                          alt={match.team2.img.alt}
                          className="h-5 w-5"
                          width={20}
                          height={20}
                        />
                        <span className="text-zinc-200 text-sm">
                          {match.team2.name}
                        </span>
                      </div>
                      <div
                        className={
                          (team2won ? "text-white " : "text-zinc-400 ") +
                          "px-2 text-md"
                        }
                      >
                        {match.team2.goals.length}
                      </div>
                    </div>
                  </div>
                  <div className="w-24 p-2 flex flex-col justify-center items-center text-xs text-zinc-300 border-l border-zinc-700">
                    {match.status.title === "ended" && <div>Ended</div>}
                    {match.status.title === "upcoming" && (
                      <>
                        <time className="text-center">
                          {match.details.time}
                        </time>
                        <time className="text-center">
                          {match.details.date}
                        </time>
                      </>
                    )}
                    {match.status.title === "live" && (
                      <div className="text-xs text-blue-800 flex gap-2 items-center">
                        <SportsSoccer className="animate-spin text-sm" />
                        <span>Live</span>
                      </div>
                    )}
                    {match.status.title === "paused" && <div>Paused</div>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </dd>
    </dl>
  );
}
