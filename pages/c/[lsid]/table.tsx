import Layout from "@/components/Layout";
import CompetitionLayout from "@/components/CompetitionLayout";

export default function Table() {
  return <div className="flex flex-col">Table</div>;
}

Table.getLayout = function getLayout() {
  return (
    <Layout>
      <CompetitionLayout>
        <Table />
      </CompetitionLayout>
    </Layout>
  );
};
