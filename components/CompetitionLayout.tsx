import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useContext, useState } from "react";
import { PopupContext } from "@/context";
import { PopupContextType } from "@/public/utils/types";
import Seasons from "./Seasons";
export default function CompetitionLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const router = useRouter();
  const { lsid } = router.query;
  const setPopup = useContext<PopupContextType>(PopupContext);
  const [seasons, setSeasons] = useState([2020, 2021, 2023]);
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  return (
    <div className="flex flex-col max-h-[calc(100vh-56px)]">
      <ul className="flex items-center  h-12 bg-zinc-900/80 w-full min-h-[48px] ">
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}` }}
          >
            Matches
          </Link>
        </li>
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}/table` }}
          >
            Table
          </Link>
        </li>
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}/players` }}
          >
            Players
          </Link>
        </li>
        <li className="mr-4">
          <button
            className="flex items-center gap-2 bg-zinc-800/60 ring-1  ring-zinc-800 hover:bg-zinc-800 text-zinc-200 text-sm rounded-md h-8 px-4"
            onClick={() =>
              setPopup(
                <Seasons
                  seasons={seasons}
                  selectedSeason={selectedSeason}
                  setSelectedSeason={setSelectedSeason}
                />
              )
            }
          >
            <span>{selectedSeason}</span>
            <ArrowForwardIosIcon className="text-sm" />
          </button>
        </li>
      </ul>
      <div className="flex-1">{children}</div>
    </div>
  );
}
