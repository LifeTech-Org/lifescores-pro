"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ManageLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const { id } = useParams();

    const constructUrl = (path: string) => {
        return "/admin/m/" + id + path;
    }
    const tabs = [{
        title: "Matches",
        to: constructUrl("/"),
    }, {
        title: "Teams",
        to: constructUrl("/t")
    }, {
        title: "Players",
        to: constructUrl("/p")
    }, {
        title: "Settings",
        to: constructUrl("/s")
    }];
    return <section>
        <div className="flex gap-2 items-center h-12 px-4"><Image src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png" height={30} width={30} alt={"name"} /><span className="text-xl text-blue-800 font-semibold">Premier League</span></div>
        <div className="flex flex-col sm:flex-row">
            <ul className="flex sm:flex-col sm:w-72 sm:border-r border-zinc-900">
                {
                    tabs.map(({ title, to }) => <li key={title} className="flex flex-1 sm:w-full sm:flex-grow-0"><Link href={to} className="flex-1 text-zinc-400 text-sm w-full text-center sm:text-left hover:bg-zinc-900 p-4">{title}</Link></li>)
                }
            </ul>
            <section className="flex-1 px-4">
                {children}
            </section>
        </div>
    </section>
}