import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Image from "next/image";
function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState("instruction");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (router.isReady) {
      getRecipe(id);
    }
  }, [router]);
  const getRecipe = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_API_KEY}`
    );
    const data = await api.json();
    setRecipe(data);
    setIsLoading(false);
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <Layout title={`${recipe.title} - Foodies`}>
      <div className="flex my-5">
        <div className=" relative w-1/2">
          <h2 className="font-semibold">{recipe.title}</h2>
          {/* <h2 className="relative font-semibold">Judul</h2> */}
          <Image
            src={recipe.image}
            // src={"https://spoonacular.com/recipeImages/639714-556x370.jpg"}
            alt={recipe.title}
            layout="responsive"
            width={100}
            height={100}
            objectFit={"contain"}
          />
        </div>
        <div className="ml-10 w-full">
          <div className="flex mb-5">
            <button
              onClick={() => {
                setActiveTab("instruction");
              }}
              className={`font-semibold text-sm px-4 py-2 border-2 border-[#313131] ${
                activeTab === "instruction" ? "bg-[#313131] text-white" : ""
              }`}
            >
              Instruction
            </button>
            <button
              onClick={() => {
                setActiveTab("ingredient");
              }}
              className={`font-semibold text-sm px-4 ml-4 py-2 border-2 border-[#313131] ${
                activeTab === "ingredient" ? "bg-[#313131] text-white" : ""
              }`}
            >
              ingredient
            </button>
          </div>
          {activeTab === "instruction" ? (
            <section>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></div>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></div>
            </section>
          ) : (
            <ul className="list-disc text-sm list-inside">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
