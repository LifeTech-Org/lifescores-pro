import { SearchResults } from "@/public/utils/types";
import { ArrowDownward, SearchRounded } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export function Search() {
  const [searchResults, setSearchResults] = useState<SearchResults>({
    team: [
      {
        img: {
          alt: "",
          src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
        },
        title: "Team 1",
      },
      {
        img: {
          alt: "",
          src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
        },
        title: "Team 2",
      },
      {
        img: {
          alt: "",
          src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
        },
        title: "Team 3",
      },
    ],
    competition: [],
    fixtures: [
      {
        details: {
          date: "",
          stadium: "",
          time: "",
        },
        location: "Nigeria",
        id: "",
        team1: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Manchester United",
          goals: [],
        },
        team2: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Chelsea",
          goals: [],
        },
        title: "",
        status: {
          title: "live",
          substatus: "1st-half-normal-time",
        },
        competition: {
          id: "",
          name: "",
          seasons: [],
        },
        stats: [],
      },
      {
        details: {
          date: "",
          stadium: "",
          time: "",
        },
        location: "Nigeria",
        id: "",
        team1: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Arsenal",
          goals: [],
        },
        team2: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Liverpool",
          goals: [],
        },
        title: "",
        status: {
          title: "live",
          substatus: "1st-half-normal-time",
        },
        competition: {
          id: "",
          name: "",
          seasons: [],
        },
        stats: [],
      },
      {
        details: {
          date: "",
          stadium: "",
          time: "",
        },
        location: "Nigeria",
        id: "",
        team1: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Wolves",
          goals: [],
        },
        team2: {
          img: {
            alt: "",
            src: "https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
          },
          name: "Newcastle",
          goals: [],
        },
        title: "",
        status: {
          title: "live",
          substatus: "1st-half-normal-time",
        },
        competition: {
          id: "",
          name: "",
          seasons: [],
        },
        stats: [],
      },
    ],
  });
  const searchResultsLength =
    searchResults.competition.length +
    searchResults.fixtures.length +
    searchResults.team.length;
  const [keyword, setKeyword] = useState("");
  return (
    <div className="z-20 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800 sm:max-w-sm pb-2 ">
      <form className="flex w-full  items-center border-b border-zinc-800">
        <SearchRounded className="!text-zinc-200 !text-md ml-4" />
        <input
          type="search"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          placeholder="Search for teams, fixtures and competitions"
          className="flex-1 p-4 bg-transparent  outline-none text-zinc-200"
        />
      </form>
      <div className="flex flex-col overflow-y-auto pb-2 overflow-x-hidden max-h-[calc(100vh-200px)]">
        {keyword.length === 0 ? (
          <RecentSearches />
        ) : searchResultsLength === 0 ? (
          <EmptyResult {...{ keyword }} />
        ) : (
          <SearchResults {...{ searchResults }} />
        )}
      </div>
    </div>
  );
}

function SearchResults({ searchResults }: { searchResults: SearchResults }) {
  return (
    <div className="flex flex-col gap-2 mt-2 divide-dotted divide-y divide-zinc-800">
      <TeamSearchResults list={searchResults.team} />
      <FixturesSearchResults list={searchResults.fixtures} />
    </div>
  );
}

function TeamSearchResults({ list }: { list: SearchResults["team"] }) {
  return (
    <article className="w-full">
      <h3 className="text-zinc-200 font-semibold text-md mx-4">Teams</h3>
      <ul className="flex flex-col mt-2">
        {list.map((team, index) => (
          <li key={index}>
            <Link href={"/"}>
              <div className="flex gap-2 items-center text-sm text-zinc-100  py-2 px-4 cursor-pointer hover:bg-zinc-800">
                <img
                  src={team.img.src}
                  alt={team.img.alt}
                  className="h-6 w-6 rounded-md"
                />
                <div className="flex flex-col">
                  <div>{team.title}</div>
                  <div className="text-xs text-zinc-300">
                    Some kind of subtitles
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-full">
        <button className="mt-1 mx-4 text-sm flex-1 flex gap-2 justify-center items-center h-8 rounded-md ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950 text-zinc-200">
          <span>Show more</span>
          <ArrowDownward />
        </button>
      </div>
    </article>
  );
}

function FixturesSearchResults({ list }: { list: SearchResults["fixtures"] }) {
  return (
    <article className="w-full">
      <h3 className="text-zinc-200 font-semibold text-md mx-4">Fixtures</h3>
      <ul className="flex flex-col mt-2 ">
        {list.map((fixture, index) => (
          <li key={index}>
            <Link href={"/"}>
              <div className="flex  py-2 px-4 cursor-pointer hover:bg-zinc-800">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-4 w-4"
                      src={fixture.team1.img.src}
                      alt={fixture.team1.img.alt}
                    />
                    <div className="text-xs text-zinc-200">
                      {fixture.team1.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-4 w-4"
                      src={fixture.team2.img.src}
                      alt={fixture.team2.img.alt}
                    />
                    <div className="text-xs text-zinc-200">
                      {fixture.team2.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-full">
        <button className="mt-1 mx-4 text-sm flex-1 flex gap-2 justify-center items-center h-8 rounded-md ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950 text-zinc-200">
          <span>Show more</span>
          <ArrowDownward />
        </button>
      </div>
    </article>
  );
}

function EmptyResult({ keyword }: { keyword: String }) {
  return (
    <div className="h-28 flex items-center justify-center w-full p-4 text-zinc-200 font-semibold">
      <p className="text-center">No result for {keyword}</p>
    </div>
  );
}

function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState([]);
  return (
    <div className="h-28 flex items-center justify-center w-full p-4 text-zinc-200 font-semibold">
      {recentSearches.length === 0 ? (
        <p className="text-center">No recent searches</p>
      ) : (
        <ul></ul>
      )}
    </div>
  );
}
