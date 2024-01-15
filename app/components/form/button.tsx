import { TVoid } from "@/app/utils/types"

export const Button = ({ text, onClick, disabled = false, type = "primary" }: { text: string, onClick: TVoid, disabled?: boolean, type?: "primary" | "secondary" | "danger" }) => {
    return <button onClick={onClick} className={(type === "primary" ? "bg-blue-800 text-zinc-200" : "bg-blue-200 text-blue-800") + " w-full rounded-md text-sm  h-10 mt-4"} disabled={disabled}>{text}</button>
}