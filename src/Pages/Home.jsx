import { useEffect, useState } from "react";
// import RecipeCards from "../constants/RecipeCards"; // Remove if not used
import { getRecipe } from "../api/recipeApi";
import RecipeCards from "../components/RecipeCards";
import { racipeData } from "../constants/recipeData";

const Home = () => {
//   const [recipeDetails, setRecipeDetails] = useState(null);

//   useEffect(() => {
//     const fetchRecipeDetails = async () => {
//       try {
//         const data = await getRecipe("/random");
//         setRecipeDetails(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching recipe details:", error);
//       }
//     };

//     fetchRecipeDetails();
//   }, []); // Pass an empty dependency array if you only want this effect to run once on component mount

  return (
    <div className="">
      {/* search */}
      <form action="" className="box-center border relative mt-20 gap-5 border-red-500">
        <input
          type="text"
          className="border bg-gray-200 py-1 w-[50%] rounded-full"
        />

        <button className="bg-orange-500 rounded-full text-white px-2 py-1">
          Search
        </button>
      </form>

      <h1 className="text-lg font-bold mt-10">Popular Picks</h1>
      <RecipeCards/>
    </div>
  );
};

export default Home;
