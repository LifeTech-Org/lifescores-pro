import Layout from "@/components/Layout";
import CompetitionLayout from "@/components/CompetitionLayout";

export default function Players() {
  return <div className="flex flex-col">Players</div>;
}

Players.getLayout = function getLayout() {
  return (
    <Layout>
      <CompetitionLayout>
        <Players />
      </CompetitionLayout>
    </Layout>
  );
};
