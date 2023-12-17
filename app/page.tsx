"use client"
import MatchesLayout from "@/components/matches";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden py-4 max-h-[calc(100vh-104px)] sm:max-h-[calc(100vh-56px)]">
            <MatchesLayout />
            <MatchesLayout />
            <MatchesLayout />
        </div>
    );
}