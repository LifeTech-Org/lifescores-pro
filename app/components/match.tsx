import Link from "next/link";
import { TMatch } from "@/app/utils/types/competition";
import Image from "next/image";
import { SportsSoccer } from "@mui/icons-material";

export const Match = ({ match }: { match: TMatch }) => {
  const [team1won, team2won] = [
    match.team1.goals.length > match.team2.goals.length,
    match.team2.goals.length > match.team1.goals.length,
  ];
  return (
    <Link
      href={`/u/m/${match.id}`}
      className="flex p-4 hover:bg-zinc-800 cursor-pointer sm:mx-4 sm:rounded-md"
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="gap-2 flex items-center">
            <div className="relative h-5 w-5">
              <Image
                src={match.team1.img.src}
                alt={match.team1.img.alt}
                layout="fill"
              />
            </div>
            <span className="text-zinc-200 text-sm">{match.team1.name}</span>
          </div>
          <div
            className={
              (team1won ? "text-white " : "text-zinc-400 ") + "px-2 text-md"
            }
          >
            {match.team1.goals.length}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="gap-2 flex items-center">

            <div className="relative h-5 w-5">
              <Image
                src={match.team2.img.src}
                alt={match.team2.img.alt}
                layout="fill"
              />
            </div>
            <span className="text-zinc-200 text-sm">{match.team2.name}</span>
          </div>
          <div
            className={
              (team2won ? "text-white " : "text-zinc-400 ") + "px-2 text-md"
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
            <time className="text-center">{match.details.time}</time>
            <time className="text-center">{match.details.date}</time>
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
  );
};
