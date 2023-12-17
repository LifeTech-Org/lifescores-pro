"use client"
import Seasons from "@/components/seasons";
import { PopupContext } from "@/context";
import { PopupContextType } from "@/app/utils/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const tabs = [
        "timeline",
        "lineups",
        "statistics"
    ];
    const { id } = useParams();
    return <div className="flex flex-col max-h-[calc(100vh-104px)] sm:max-h-[calc(100vh-56px)]">
        <ul className="flex items-center  h-12 bg-zinc-900/80 w-full min-h-[48px] ">
            {tabs.map((tab, index) => (
                <li
                    key={index}
                    className="flex-1 justify-center items-center flex h-full"
                >
                    <Link
                        // className={
                        //     (tabIndex === tab.index ? "text-blue-800 " : "text-zinc-200 ") +
                        //     "w-full  text-sm font-semibold text-center hover:text-blue-800"
                        // }
                        // onClick={() => setTabIndex(tab.index)}
                        className="text-zinc-200 w-full text-sm font-semibold text-center hover:text-blue-800"
                        href={`/m/${id}/${tab}`}
                    >
                        {tab}
                    </Link>
                </li>
            ))}
        </ul>
        <div className="flex-1 flex justify-center max-h-[calc(100vh-152px)] sm:max-h-[calc(100vh-104px)] overflow-auto px-4 relative">
            {children}
        </div>
    </div>
}