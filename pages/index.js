import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";
export default function Home() {
  return (
    <Layout title="Home Page">
      <Veggie />
      <Popular className="mt-5" />
    </Layout>
  );
}
