import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Categories from "../components/Categories";
import Container from "../components/Container";
import Head from "next/head";
import Search from "../components/Search";
export default function Home() {
  // fetch(
  //   `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_API_KEY}`
  // )
  //   .then((res) => res.json())
  //   .then((recipe) => console.log(recipe));
  return (
    <Container>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Categories />
      <Search />
      <Veggie />
      <Popular />
    </Container>
  );
}
