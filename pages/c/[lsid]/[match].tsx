import Layout from "@/components/Layout";
import LineUps from "@/components/LineUps";
import Statistics from "@/components/Statistics";
import TimeLine from "@/components/Timline";
import { MatchType } from "@/public/utils/types/competition";
import { useState } from "react";

export default function Match() {
  const [tabIndex, setTabIndex] = useState(2);
  const match: MatchType = {
    competition: {
      id: "",
      name: "Premier League",
      seasons: [2023, 2022],
    },
    id: "",
    details: {
      date: "01-August-2023",
      stadium: "Stamford Bridge",
      time: "08:45  [Central african time]",
    },
    location: "",
    stats: [
      {
        title: "Fouls",
        team1: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
      {
        title: "Yellow Cards",
        team1: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
      {
        title: "Red Cards",
        team1: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
      {
        title: "Offsides",
        team1: [
          {
            player: { id: "", name: "Ronaldo" },
            counts: [{ minute: "30" }, { minute: "35" }],
          },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
      {
        title: "Shots",
        team1: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
      {
        title: "Shots on goal",
        team1: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
        team2: [
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
          { player: { id: "", name: "Ronaldo" }, counts: [{ minute: "30" }] },
        ],
      },
    ],
    status: {
      title: "live",
      substatus: "1st-half-normal-time",
    },
    team1: {
      img: { alt: "", src: "" },
      name: "Manchester United",
      goals: [
        {
          player: { name: "Ronaldo", id: "id" },
          counts: [
            { minute: 30, type: "open play" },
            { minute: 45, type: "open play" },
            { minute: 70, type: "open play" },
          ],
        },
        {
          player: { name: "Samuel", id: "sid" },
          counts: [{ minute: 10, type: "pk" }],
        },
        {
          player: { name: "blessing", id: "bid" },
          counts: [
            { minute: 15, type: "open play" },
            { minute: 20, type: "open play" },
            { minute: 120, type: "open play" },
            { minute: 122, type: "open play" },
          ],
        },
      ],
    },
    team2: {
      img: { alt: "", src: "" },
      name: "Chelsea",
      goals: [
        {
          player: { name: "Daniel", id: "id" },
          counts: [
            { minute: 30, type: "own goal" },
            { minute: 45, type: "own goal" },
          ],
        },
      ],
    },
    title: "Match day 2",
  };
  const tabs = [
    {
      index: 0,
      name: "Timeline",
      element: <TimeLine />,
    },
    {
      index: 1,
      name: "Lineups",
      element: <LineUps />,
    },
    {
      index: 2,
      name: "Statistics",
      element: <Statistics match={match} />,
    },
  ];

  return (
    <div className="flex flex-col max-h-[calc(100vh-104px)] sm:max-h-[calc(100vh-56px)]">
      <ul className="flex items-center  h-12 bg-zinc-900/80 w-full min-h-[48px] ">
        {tabs.map((tab) => (
          <li
            key={tab.index}
            className="flex-1 justify-center items-center flex h-full"
          >
            <button
              className={
                (tabIndex === tab.index ? "text-blue-800 " : "text-zinc-200 ") +
                "w-full  text-sm font-semibold text-center hover:text-blue-800"
              }
              onClick={() => setTabIndex(tab.index)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex-1 flex justify-center max-h-[calc(100vh-152px)] sm:max-h-[calc(100vh-104px)] overflow-auto px-4 relative">
        {tabs[tabIndex].element}
      </div>
    </div>
  );
}

Match.getLayout = function getLayout() {
  return (
    <Layout>
      <Match />
    </Layout>
  );
};
