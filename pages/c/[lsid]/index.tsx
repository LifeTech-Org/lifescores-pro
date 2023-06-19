import Layout from "@/components/Layout";
import MatchesLayout from "@/components/Matches";
import CompetitionLayout from "@/components/CompetitionLayout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Matches() {
  const router = useRouter();
  const { lsid } = router.query;
  return (
    <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden py-4 max-h-[calc(100vh-152px)] sm:max-h-[calc(100vh-104px)]">
      <MatchesLayout />
      <MatchesLayout />
      <MatchesLayout />
    </div>
  );
}

Matches.getLayout = function getLayout() {
  return (
    <Layout>
      <CompetitionLayout>
        <Matches />
      </CompetitionLayout>
    </Layout>
  );
};
