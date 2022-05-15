import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Search from "../../components/Search";
import Container from "../../components/Container";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import Image from "next/image";
import Categories from "../../components/Categories";
import Link from "next/link";
import Nav from "../../components/Nav";
function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const router = useRouter();
  const { name } = router.query;
  useEffect(() => {
    if (router.isReady) {
      getCuisine(name);
    }
  }, [router]);
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_API_KEY}&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };
  return (
    <Container>
      <Head>
        <title>{name} Cuisine - Foodies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Categories />
      <Search />
      <motion.div
        className="mt-3 grid grid-cols-4 gap-4"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisine.map((recipe) => {
          return (
            <Link href={`/recipe/${recipe.id}`}>
              <a>
                <Card key={recipe.id}>
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
    </Container>
  );
}

export default Cuisine;
