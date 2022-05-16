import Layout from "../../components/Layout";
import Link from "next/link";
import Card from "../../components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Home() {
  const [cuisine, setCuisine] = useState([]);
  const router = useRouter();
  const { query } = router.query;
  useEffect(() => {
    if (router.isReady) {
      getCuisine(query);
    }
  }, [router]);
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_API_KEY}&query=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };
  return (
    <Layout title={`${query} - Foodies`}>
      <motion.div
        className="mt-3 grid grid-cols-4 gap-4"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisine.map((recipe) => {
          return (
            <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
              <a>
                <Card>
                  <Image
                    className="rounded-xl"
                    src={recipe.image}
                    alt={recipe.title}
                    width={100}
                    height={70}
                    layout="responsive"
                  />
                  <p className="text-center  font-semibold p-4 text-xs">
                    {recipe.title}
                  </p>
                </Card>
              </a>
            </Link>
          );
        })}
      </motion.div>
    </Layout>
  );
}

export default Home;
