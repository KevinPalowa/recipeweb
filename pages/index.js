import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Head from "next/head";
export default function Home() {
  // fetch(
  //   `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_API_KEY}`
  // )
  //   .then((res) => res.json())
  //   .then((recipe) => console.log(recipe));
  return (
    <div className="container mx-auto">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Veggie />
      <Popular />
    </div>
  );
}
