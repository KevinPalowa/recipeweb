import Categories from "../../components/Categories";
import Search from "../../components/Search";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import Image from "next/image";
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
    <Container>
      <Categories />
      <Search />
      <div className="mt-3 grid grid-cols-4 gap-4">
        {cuisine.map((recipe) => {
          return (
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
          );
        })}
      </div>
    </Container>
  );
}

export default Home;
