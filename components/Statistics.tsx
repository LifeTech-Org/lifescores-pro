import { TMatch } from "@/app/utils/types/competition";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { getTotalTeamGoals } from "@/app/utils/func";
import FoulCard from "./foulCard";
import { useContext } from "react";
import { PopupContextType } from "@/app/utils/types";
import { PopupContext } from "@/context";
export default function Statistics({ match }: { match: TMatch }) {
  const yellowCardsStats = match.stats.find(
    (stat) => stat.title === "Yellow Cards"
  )!;
  const redCardsStats = match.stats.find((stat) => stat.title === "Red Cards")!;
  return (
    <div className="w-full flex flex-col gap-4 pt-2  md:max-w-lg relative">
      <div className="text-zinc-200 font-semibold text-sm h-10 flex items-center justify-between">
        <span>{match.title}</span>
        <span>
          {/* For upcoming match */}
          {match.status.title === "upcoming" && (
            <div className="flex gap-1 items-center text-zinc-200 border-b border-zinc-800">
              <UpcomingOutlinedIcon className="!text-sm" />
              <span className="text-semibold">Upcoming</span>
            </div>
          )}

          {/* For live match */}
          {match.status.title === "live" && (
            <div className="flex gap-1 items-center text-blue-800 border-b border-blue-800">
              <SportsSoccerIcon className="!text-sm -ml-0.5 animate-spin" />
              <span>
                {match.status.substatus === "1st-half-normal-time" &&
                  "1st Half"}
              </span>
            </div>
          )}

          {/* For ended match */}
          {match.status.title === "ended" && (
            <div className="flex gap-1 items-center text-red-800 border-b border-zinc-800">
              <StopCircleOutlinedIcon className="!text-sm" />
              <span className="text-semibold">Ended</span>
            </div>
          )}
        </span>
      </div>
      <TeamStat team1={match.team1} team2={match.team2} />
      {match.team1.goals.length + match.team2.goals.length > 0 && (
        <div className="flex justify-between mt-2 gap-4">
          <ScoresStat goals={match.team1.goals} span="left" />
          <div className="flex items-center">
            <SportsSoccerIcon className="text-sm -ml-0.5 animate-spin text-zinc-200" />
          </div>
          <ScoresStat goals={match.team2.goals} span="right" />
        </div>
      )}
      {yellowCardsStats.team1.length + yellowCardsStats.team2.length > 0 && (
        <div className="flex justify-between mt-2 gap-4">
          <CardStats cards={yellowCardsStats.team1} span="left" />
          <div className="flex justify-between mt-2 gap-4">
            <FoulCard type="yellow" />
          </div>
          <CardStats cards={yellowCardsStats.team2} span="right" />
        </div>
      )}

      {redCardsStats.team1.length + redCardsStats.team2.length > 0 && (
        <div className="flex justify-between mt-2 gap-4">
          <CardStats cards={redCardsStats.team1} span="left" />
          <div className="flex justify-between mt-2 gap-4">
            <FoulCard type="red" />
          </div>
          <CardStats cards={redCardsStats.team2} span="right" />
        </div>
      )}

      <BoxStats stats={match.stats} />
      <dl className="flex flex-col pt-4 pb-8 gap-2 items-center">
        <div className="flex gap-4 items-center w-fit">
          <dt className="text-zinc-200 flex gap-1 items-center bg-zinc-900/90 ring-1 ring-zinc-800 py-1 px-1.5 w-fit  text-xs  font-semibold  ">
            <AccessTimeOutlinedIcon className="!text-sm" />
            <span>Time</span>
          </dt>
          <dd className="text-xs font-semibold text-zinc-200">
            {match.details.time}
          </dd>
        </div>
        <div className="flex gap-4 items-center w-fit">
          <dt className="text-zinc-200 flex gap-1 items-center bg-zinc-900/90 ring-1 ring-zinc-800 py-1 px-1.5 w-fit  text-xs  font-semibold  ">
            <CalendarMonthOutlinedIcon className="!text-sm" />
            <span>Date</span>
          </dt>
          <dd className="text-xs font-semibold text-zinc-200">
            {match.details.date}
          </dd>
        </div>
        <div className="flex gap-4 items-center w-fit">
          <dt className="text-zinc-200 flex gap-1 items-center bg-zinc-900/90 ring-1 ring-zinc-800 py-1 px-1.5 w-fit  text-xs  font-semibold  ">
            <LocationOnOutlinedIcon className="!text-sm" />
            <span>Stadium</span>
          </dt>
          <dd className="text-xs font-semibold text-zinc-200">
            {match.details.stadium}
          </dd>
        </div>
      </dl>
      {/* <div className="w-full flex flex-col pb-8 pt-4 items-center gap-2"></div> */}
    </div>
  );
}

function TeamStat({
  team1,
  team2,
}: {
  team1: TMatch["team1"];
  team2: TMatch["team2"];
}) {
  const [team1Goals, team2Goals] = [
    team1.goals.reduce((sum, current) => sum + current.counts.length, 0),
    team2.goals.reduce((sum, current) => sum + current.counts.length, 0),
  ];
  return (
    <div className="flex justify-between my-4">
      <div className="flex flex-1 flex-col gap-1 items-center">
        <img
          src={
            "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
          }
          className="w-12 h-12"
          alt={team1.name}
        />
        <div className="text-zinc-200 text-center text-xl text-semibold">
          {team1.name}
        </div>
      </div>
      <div className="flex gap-2 justify-center min-w-[120px]">
        <div
          className={
            (team1Goals > team2Goals ? "text-blue-800" : "text-zinc-200") +
            " text-4xl"
          }
        >
          {team1Goals}
        </div>
        <span className="text-4xl text-zinc-200">:</span>
        <div
          className={
            (team2Goals > team1Goals ? "text-blue-800" : "text-zinc-200") +
            " text-4xl"
          }
        >
          {team2Goals}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 items-center">
        <img
          src={
            "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
          }
          className="w-12 h-12"
          alt={team2.name}
        />
        <div className="text-zinc-200 text-center text-xl text-semibold">
          {team2.name}
        </div>
      </div>
    </div>
  );
}

function ScoresStat({
  goals,
  span,
}: {
  goals: TMatch["team1"]["goals"];
  span: "left" | "right";
}) {
  return (
    <ul
      className={
        (span === "left" ? "items-start" : "items-end") +
        " flex-1 flex w-full flex-col flex-wrap"
      }
    >
      {goals.map((_goals) => {
        return (
          <li key={_goals.player.id}>
            <span className="text-zinc-200 font-semibold text-xs underline">
              {_goals.player.name}
            </span>
            {_goals.counts.map((goal, index) => {
              const suffix =
                goal.type === "own goal"
                  ? "OG"
                  : goal.type === "pk"
                    ? "PK"
                    : "";
              return (
                <div
                  className="inline-flex text-zinc-200 text-xs font-semibold"
                  key={index}
                >
                  <span>&nbsp;{goal.minute}&apos;</span>
                  {suffix.length > 0 && (
                    <span className="text-blue-800">({suffix})</span>
                  )}
                  {index < _goals.counts.length - 1 && <span>,</span>}
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}

function CardStats({
  cards,
  span,
}: {
  cards: TMatch["stats"][0]["team1"];
  span: "left" | "right";
}) {
  return (
    <ul
      className={
        (span === "left" ? "justify-start" : "justify-end") +
        " flex-1 flex w-full flex-row flex-wrap"
      }
    >
      {cards.map((card, index) => {
        return (
          <li key={card.player.id}>
            <div>
              <span className="text-zinc-200 font-semibold text-xs underline">
                {card.player.name}
              </span>
              <ul className="inline-flex text-zinc-200 text-xs font-semibold">
                {card.counts.map((count, _index) => {
                  return (
                    <li key={_index}>
                      <span>&nbsp;{count.minute}&apos;</span>
                      {index < cards.length - 1 && <span>,&nbsp;</span>}
                    </li>
                  );
                })}
              </ul>

              {/* {index < cards.length - 1 && (
                <span className="text-zinc-200 text-xs font-semibold">
                  ,&nbsp;&nbsp;
                </span>
              )} */}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function BoxStats({ stats }: { stats: TMatch["stats"] }) {
  return (
    <div className="bg-zinc-900/80 rounded-md ring-1 ring-zinc-800 p-4">
      <ul className="flex flex-col gap-4">
        {stats.map((statType) => {
          return (
            <li key={statType.title}>
              <ListStat
                title={statType.title}
                team1={statType.team1}
                team2={statType.team2}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ListStat({
  title,
  team1,
  team2,
}: {
  title: string;
  team1: TMatch["stats"][0]["team1"];
  team2: TMatch["stats"][0]["team2"];
}) {
  const setPopup = useContext<PopupContextType>(PopupContext);
  const team1Count = team1.reduce(
    (sum, current) => sum + current.counts.length,
    0
  );
  const team2Count = team2.reduce(
    (sum, current) => sum + current.counts.length,
    0
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div
          className={
            (team1 < team2
              ? "bg-zinc-900/80 ring-zinc-800 hover:bg-zinc-900/50"
              : "bg-blue-800 ring-blue-700 hover:bg-blue-700/60") +
            " h-10 flex cursor-pointer  text-zinc-200 items-center justify-center text-lg text-semibold aspect-square rounded-md ring-1"
          }
          onClick={() => setPopup(<StatsPopup title={title} stats={team1} />)}
        >
          {team1Count}
        </div>
        <div className="text-zinc-200 font-semibold text-md">{title}</div>
        <div
          className={
            (team2Count < team1Count
              ? "bg-zinc-900/80 ring-zinc-800 hover:bg-zinc-900/50"
              : "bg-blue-800 ring-blue-700 hover:bg-blue-700/60") +
            " h-10 flex cursor-pointer  text-zinc-200 items-center justify-center text-lg text-semibold aspect-square rounded-md ring-1"
          }
          onClick={() => setPopup(<StatsPopup title={title} stats={team2} />)}
        >
          {team2Count}
        </div>
      </div>
      <div className="flex gap-4">
        <Progress
          isDanger={team1Count < team2Count}
          value={(team2Count / (team1Count + team2Count)) * 100}
          position="left"
        />
        <Progress
          isDanger={team2Count < team1Count}
          value={(team2Count / (team1Count + team2Count)) * 100}
          position="right"
        />
      </div>
    </div>
  );
}

function Progress({
  isDanger,
  value,
  position,
}: {
  isDanger: boolean;
  value: number;
  position: "left" | "right";
}) {
  return (
    <progress
      className={
        (isDanger
          ? position === "left"
            ? "progress-danger-left"
            : "progress-danger-right"
          : position === "left"
            ? "progress-primary-left"
            : "progress-primary-right") + " flex-1 rounded-full h-2"
      }
      max={100}
      value={value}
    />
  );
}

function StatsPopup({
  title,
  stats,
}: {
  title: string;
  stats: TMatch["stats"][0]["team1"];
}) {
  return (
    <article
      className={
        "z-20 bg-zinc-900 !w-full rounded-md ring-1 ring-zinc-800 sm:max-w-sm pb-2"
      }
    >
      <h3 className="text-zinc-200 text-md py-2 px-4 border-b border-zinc-800">
        {title}
      </h3>
      <ul className="flex flex-col overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)]">
        {stats.map((stat, index) => {
          return (
            <li key={index}>
              <div className="flex gap-2 w-full py-1 px-4 hover:bg-zinc-800  justify-between items-center">
                <div className="flex-1 flex-col justify-center">
                  <span className="font-semibold text-sm text-zinc-200">
                    {stat.player.name}
                  </span>
                  <ul className="flex flex-wrap ">
                    {stat.counts.map(({ minute }, index) => {
                      return (
                        <li key={index} className="text-zinc-400 text-xs">
                          <span className="text-xs">{minute}&apos;</span>
                          {index < stat.counts.length - 1 && (
                            <span>,&nbsp;</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="font-semibold text-xs text-zinc-200 w-8 aspect-square flex items-center justify-center">
                  {stat.counts.length}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
