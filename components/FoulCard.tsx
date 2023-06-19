export default function FoulCard({ type }: { type: "yellow" | "red" }) {
  return (
    <div
      className={
        (type === "red"
          ? "bg-red-600 ring-red-700"
          : "bg-yellow-300 ring-yellow-400") +
        " h-4 w-3 ring-1 rounded-sm rotate-[20deg]"
      }
    ></div>
  );
}
