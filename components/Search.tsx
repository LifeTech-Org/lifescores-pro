import { SearchResults } from "@/public/utils/types";
import { SearchRounded } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export function Search() {
  const [searchResults, setSearchResults] = useState<SearchResults>({
    team: [
      { img: { alt: "", src: "" }, title: "Team 1" },
      { img: { alt: "", src: "" }, title: "Team 2" },
      { img: { alt: "", src: "" }, title: "Team 3" },
    ],
    competition: [],
    fixtures: [],
  });
  const searchResultsLength =
    searchResults.competition.length +
    searchResults.fixtures.length +
    searchResults.team.length;
  const [keyword, setKeyword] = useState("");
  return (
    <div className="z-20 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800 sm:max-w-sm pb-2">
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
      {keyword.length === 0 ? (
        <RecentSearches />
      ) : searchResultsLength === 0 ? (
        <EmptyResult {...{ keyword }} />
      ) : (
        <SearchResults {...{ searchResults }} />
      )}
    </div>
  );
}

function SearchResults({ searchResults }: { searchResults: SearchResults }) {
  return (
    <div className="flex flex-col mx-4">
      <article>
        <h3 className="text-zinc-200 font-semibold text-md">Team</h3>
        <ul>
          {searchResults.team.map((team, index) => (
            <li key={index}>
              <Link href={"/"}>
                <div className="flex gap-2">
                  <img src={team.img.src} alt={team.img.alt} />
                  <div>{team.title}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function SearchResultsSection({}) {}

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
