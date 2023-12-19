"use client"
import Link from "next/link";
import { TCompetition } from "../utils/types/competition"; import AddIcon from '@mui/icons-material/Add';

export default function Admin() {
    const competitions: TCompetition[] = [];
    return <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            <li>
                <Link href="/admin/new" className="bg-zinc-900 rounded-md flex flex-col items-center justify-center h-44 gap-2 hover:bg-zinc-900/60">
                    <AddIcon className="!text-6xl text-blue-800" />
                    <span className="text-white text-sm">Create a Competition</span>
                </Link>
            </li>
        </ul>
    </div>
}