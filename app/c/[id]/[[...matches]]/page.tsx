"use client"
import MatchesLayout from "@/app/components/matches";
import { useParams } from "next/navigation";

export default function Matches() {
    const { id } = useParams();
    return (
        <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden py-4 max-h-[calc(100vh-152px)] sm:max-h-[calc(100vh-104px)]">
            <MatchesLayout />
            <MatchesLayout />
            <MatchesLayout />
        </div>
    );
}