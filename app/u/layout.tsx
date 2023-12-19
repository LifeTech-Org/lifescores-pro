"use client"
import { useRouter } from "next/navigation";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Header from "../components/header";
import Filter from "../components/filter";


export default function UserLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const router = useRouter();
    return <>
        <Header home="/u" leadingAction={<button className="text-white p-2 bg-blue-800 rounded-md flex items-center gap-2 text-sm " onClick={() => router.push("/admin")}><AdminPanelSettingsIcon /><span>Continue as Admin</span></button>} />
        <div className="flex flex-col sm:flex-row flex-1">
            <Filter />
            <section className="sm:flex-1">
                <main>{children}</main>
            </section>
        </div>
    </>
}
