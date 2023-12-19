"use client"
import { useRouter } from "next/navigation";
import Header from "../components/header";
import GroupIcon from '@mui/icons-material/Group';


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const router = useRouter();
    return <>
        <Header home="/admin" leadingAction={<button className="text-white p-2 bg-blue-800 rounded-md flex items-center gap-2 text-sm " onClick={() => router.push("/u")}>< GroupIcon /><span>Continue as Visitor</span></button>} />
        <div className="flex flex-col sm:flex-row flex-1">
            <section className="sm:flex-1">
                <main>{children}</main>
            </section>
        </div>
    </>
}
