import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  fetch(
    `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_API_KEY}`
  ).then((res) => res.json()).then(recipe=>console.log(recipe))
  return (
    <div className={styles.container}>
      <p>Youre in NEXTjs</p>
    </div>
  );
}
