"use client"
import Link from "next/link";
import { TCompetition } from "../utils/types/competition"; import AddIcon from '@mui/icons-material/Add';
import Competition from "../components/cards/competition";

export default function Admin() {
    const competitions: TCompetition[] = [{
        name: "Premier League",
        currentSeason: "2021/2022",
        id: "1",
        img: "/pl.png",
        status: "active"
    }, {
        name: "Laliga",
        currentSeason: "2021/2022",
        id: "2",
        img: "/pl.png",
        status: "active"
    }, {
        name: "Champions League",
        currentSeason: "2021/2022",
        id: "3",
        img: "/cl.png",
        status: "active"
    }, {
        name: "Serie A",
        currentSeason: "2021/2022",
        id: "4",
        img: "/sa.png",
        status: "active"
    }];
    return <div className="max-h-[calc(100vh-56px)] overflow-auto overflow-x-hidden">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
            <li>
                <Link href="/admin/n" className="bg-zinc-900 rounded-md flex flex-col items-center justify-center h-44 gap-2 hover:bg-zinc-900/60">
                    <AddIcon className="!text-6xl text-blue-800" />
                    <span className="text-white text-sm">Create a Competition</span>
                </Link>
            </li>
            {competitions.map((competition) => <li key={competition.id}><Competition competition={competition} /></li>)}
        </ul>
    </div>
}