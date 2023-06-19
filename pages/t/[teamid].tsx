import CompetitionLayout from "@/components/CompetitionLayout";
import Layout from "@/components/Layout";

export default function Team() {
  return <div></div>;
}

Team.getLayout = function getLayout() {
  return (
    <Layout>
      <CompetitionLayout>
        <Team />
      </CompetitionLayout>
    </Layout>
  );
};
