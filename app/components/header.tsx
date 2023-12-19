import { NavigationType } from "@/app/utils/types";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ home, leadingAction }: { home: string; leadingAction: JSX.Element }) {
  const router = useRouter();
  const path = usePathname();
  const params = useParams();
  // console.log(path)
  const [navigations, setNavigations] = useState<NavigationType[]>([]);
  useEffect(() => {
    // if (router.isReady) {
    //   const temp: NavigationType[] = [];
    //   router.route.split("/").forEach((route, index) => {
    //     if (route === "[id]") {
    //       temp.push({
    //         name: router.query["id"]!.toString(),
    //         link: {
    //           href: `/u/c/[id]`,
    //           as: `/u/c/${router.query["id"]}`,
    //         },
    //       });
    //     }
    //   });
    // setNavigations(temp);
    // }
  }, [router]);
  return (
    <header className="h-14 min-h-[56px] flex items-center justify-between px-4 text-white">
      <div className="flex gap-3 items-center">
        <Link href={home}>
          <h3 className="font-semibold text-2xl">Lifescores</h3>
        </Link>
        {/* {navigations.map((navigation, index) => {
          return (
            <Link
              key={index}
              href={navigation.link.href}
              as={navigation.link.as}
              className="font-semibold text-2xl uppercase text-zinc-200"
            >
              {navigation.name}
            </Link>
          );
        })} */}

      </div>
      {leadingAction}
    </header>
  );
}
