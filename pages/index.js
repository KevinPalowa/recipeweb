import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
export default function Home() {
  // fetch(
  //   `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_API_KEY}`
  // )
  //   .then((res) => res.json())
  //   .then((recipe) => console.log(recipe));
  return (
    <Layout title="Home Page">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggie />
        <Popular className="mt-5" />
      </motion.div>
    </Layout>
  );
}
