import Image from "next/image";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Card = (props) => {
  return (
    <div className="rounded-3xl overflow-hidden h-60 min-h-[10rem] relative">
      {props.children}
    </div>
  );
};
function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
      console.log("Data fetch from Local Storage");
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log("Data fetch from Server");
    }
  };
  return (
    <div className="font-sans">
      <h3 className="font-semibold text-xl">Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p className="absolute bottom-1/4 text-center font-semibold w-full z-10 text-white text-xs">
                  {recipe.title}
                </p>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  className="absolute left-0"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/5"></div>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
