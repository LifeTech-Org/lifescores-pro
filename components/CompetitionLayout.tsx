import Link from "next/link";
import { useRouter } from "next/router";

export default function CompetitionLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const router = useRouter();
  const { lsid } = router.query;
  return (
    <div className="flex flex-col max-h-[calc(100vh-56px)]">
      <ul className="flex items-center  h-12 bg-zinc-900/80 w-full min-h-[48px] ">
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}` }}
          >
            Matches
          </Link>
        </li>
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}/table` }}
          >
            Table
          </Link>
        </li>
        <li className="flex-1 justify-center items-center flex h-full">
          <Link
            className="w-full text-zinc-200 text-sm font-semibold text-center hover:text-blue-800"
            href={{ pathname: `/c/${lsid}/players` }}
          >
            Players
          </Link>
        </li>
      </ul>
      <div className="flex-1">{children}</div>
    </div>
  );
}
