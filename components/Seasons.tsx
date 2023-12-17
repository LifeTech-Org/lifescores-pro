import { PopupContext } from "@/context";
import { PopupContextType } from "@/app/utils/types";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import React, { useContext } from "react";
export default function Seasons({
  seasons,
  selectedSeason,
  setSelectedSeason,
}: {
  seasons: number[];
  selectedSeason: number;
  setSelectedSeason: React.Dispatch<React.SetStateAction<number>>;
}) {
  const setPopup = useContext<PopupContextType>(PopupContext);
  return (
    <article
      className={
        "z-20 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800 sm:max-w-sm pb-2"
      }
    >
      <h3 className="text-zinc-200 text-md py-2 px-4 border-b border-zinc-800">
        Select Season
      </h3>
      <ul className="flex flex-col overflow-y-auto overflow-x-hidden max-h-[calc(100vh-100px)]">
        {seasons.map((season, index: number) => {
          const isActive = selectedSeason === season;
          return (
            <li key={index}>
              <div
                className={
                  (isActive ? "!text-blue-800 " : "") +
                  "flex gap-2 w-full py-4 px-4 font-semibold text-xs cursor-pointer hover:text-blue-800 hover:bg-zinc-800 text-zinc-400 justify-between items-center"
                }
                onClick={() => {
                  setSelectedSeason(season);
                  setPopup(null);
                }}
              >
                <span>{season}</span>
                {isActive && (
                  <SportsSoccerIcon className="text-sm -ml-0.5 animate-spin" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
