import { categories } from "@/public/utils/data";
import {
  LocationType,
  LocationsType,
  PopupContextType,
} from "@/public/utils/types";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Calendar from "./Calendar";
import { Search } from "./Search";
import { useRouter } from "next/router";
import LaunchIcon from "@mui/icons-material/Launch";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import { PopupContext } from "@/context";

export default function Filter() {
  const router = useRouter();
  const setPopup = useContext<PopupContextType>(PopupContext);

  return (
    <aside className="flex w-full px-4 sm:px-0 h-12 items-center sm:flex-col sm:h-full sm:py-4  sm:w-72 gap-4 overflow-y-auto overflow-x-hidden sm:max-h-[calc(100vh-56px)]">
      <div className="w-fit sm:w-full">
        <div className="sm:hidden">
          <button
            className="flex items-center justify-center cursor-pointer aspect-square rounded-full hover:bg-zinc-800 w-10 "
            onClick={() => setPopup(<Calendar />)}
          >
            <CalendarMonthIcon className="text-white" />
          </button>
        </div>
        <div className="hidden sm:inline-flex w-full">
          <Calendar />
        </div>
      </div>
      <Search />
      <div className="relative sm:w-full">
        <button
          className="flex items-center gap-2 bg-zinc-800/60 ring-1  ring-zinc-800 hover:bg-zinc-800 text-zinc-200 text-sm font-semibo rounded-md sm:hidden h-8 px-4"
          onClick={() => setPopup(<Categories ispopup={true} />)}
        >
          <span>{router.query.category || "Popular"}</span>
          <ArrowForwardIosIcon className="text-sm" />
        </button>
        <Categories ispopup={false} />
      </div>
      <div className="relative sm:w-full">
        <button
          className="flex items-center gap-2 bg-zinc-800/60 ring-1  ring-zinc-800 hover:bg-zinc-800 text-zinc-200 text-sm font-semibo rounded-md sm:hidden h-8 px-4"
          onClick={() => setPopup(<Locations ispopup={true} />)}
        >
          <span>{router.query.location || "International"}</span>
          <ArrowForwardIosIcon className="text-sm" />
        </button>
        <Locations ispopup={false} />
      </div>

      <div className="sm:hidden flex-1"></div>

      <button className="sm:hidden flex items-center justify-center cursor-pointer aspect-square rounded-full hover:bg-zinc-800 w-10 ">
        <SearchIcon className="text-white" />
      </button>
    </aside>
  );
}

function Categories({ ispopup }: { ispopup: boolean }) {
  const router = useRouter();
  return (
    <article
      className={
        (ispopup
          ? "z-20 my-8 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800"
          : "") + ""
      }
    >
      {ispopup && (
        <h3 className="text-zinc-200 text-md py-2 px-4 border-b border-zinc-800">
          Select Category
        </h3>
      )}
      <ul
        className={
          (ispopup
            ? "w-full flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)] "
            : "hidden sm:flex sm:flex-col sm:w-full ") + "w-fit gap-2"
        }
      >
        {categories.map(({ text, to }) => {
          const isActive = router.query.category === text;
          return (
            <li key={text} className="w-full h-full">
              <Link
                href={{ query: { ...router.query, category: text } }}
                className={
                  (isActive ? "!text-blue-800 font-semibold " : "") +
                  (ispopup
                    ? "hover:bg-zinc-800 py-4 "
                    : "hover:bg-zinc-900 py-2 ") +
                  "text-sm flex w-full h-full  px-4 text-zinc-200 justify-between items-center"
                }
              >
                <div className="flex items-center gap-2">
                  {isActive && (
                    <SportsSoccerIcon className="text-md -ml-0.5 animate-spin" />
                  )}
                  <span>{text}</span>
                </div>
                <LaunchIcon className="text-sm" />
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function Locations({ ispopup }: { ispopup: boolean }) {
  const [locations, setLocations] = useState<LocationsType>([
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: [...new Array(6)]
        .map(() => Math.floor(Math.random() * 10))
        .join(""),
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: "Ghana",
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: "France",
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: "Portugal",
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
    {
      name: "England",
      to: "",
      competitions: [
        { name: "League 1", to: "/" },
        { name: "League 2", to: "/" },
        { name: "League 3", to: "/" },
      ],
    },
  ]);
  const [currentShowingLocationIndex, setCurrentShowingLocationIndex] =
    useState<null | number>(0);
  const router = useRouter();
  return (
    <article
      className={
        (ispopup
          ? "z-20 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800"
          : "") + ""
      }
    >
      {ispopup && (
        <h3 className="text-zinc-200 text-md py-2 px-4 border-b border-zinc-800">
          Select Location
        </h3>
      )}
      <ul
        className={
          (ispopup
            ? "w-full flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)] "
            : "hidden sm:flex sm:flex-col sm:w-full ") + "w-fit gap-2"
        }
      >
        {locations.map(({ name, to }, index) => {
          const isActive = router.query.location === name;
          return (
            <li key={name} className="w-full h-full relative">
              <Link
                href={{
                  pathname: "/",
                  query: { ...router.query, location: name },
                }}
                className={
                  (isActive ? "!text-blue-800 font-semibold " : "") +
                  (ispopup
                    ? "hover:bg-zinc-800 py-4 "
                    : "hover:bg-zinc-900 py-2 ") +
                  "text-sm inline-flex w-full h-full px-4 text-zinc-200 justify-between items-center"
                }
                onClick={() => {
                  setCurrentShowingLocationIndex((current) =>
                    current === index ? null : index
                  );
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{name}</span>
                </div>
              </Link>
              <div
                className="w-8 h-8 absolute  right-4 top-0 flex items-center justify-center text-zinc-200 rounded-md hover:bg-zinc-700 cursor-pointer"
                onClick={() => {
                  setCurrentShowingLocationIndex((current) =>
                    current === index ? null : index
                  );
                }}
              >
                {currentShowingLocationIndex === index ? (
                  <ExpandMoreIcon className="text-md " />
                ) : (
                  <ArrowForwardIosIcon className="text-sm" />
                )}
              </div>
              {currentShowingLocationIndex === index && (
                <LocationCompetitons locationName={name} />
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function LocationCompetitons({ locationName }: { locationName: string }) {
  const router = useRouter();
  const [competitions, setCompetitions] = useState<
    LocationType["competitions"]
  >([
    { name: `${locationName} 1`, to: "c1" },
    { name: `${locationName} 2`, to: "c2" },
    { name: `${locationName} 3`, to: "c3" },
  ]);
  useEffect(() => {}, [locationName]);
  return (
    <ul className="mx-6">
      {competitions.map(({ name, to }) => {
        const isActive = router.query.lsid === name;
        return (
          <li key={name}>
            <Link
              href={`/c/[lsid]`}
              as={`/c/${name}`}
              className={
                (isActive ? "!text-blue-800 " : "") +
                "inline-flex w-full py-2 font-semibold text-xs hover:text-blue-800 text-zinc-400 justify-between items-center"
              }
            >
              <div className="flex gap-2 items-center">
                {isActive && (
                  <SportsSoccerIcon className="text-sm -ml-0.5 animate-spin" />
                )}
                <span>{name}</span>
              </div>
              <LaunchIcon className="text-sm" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
