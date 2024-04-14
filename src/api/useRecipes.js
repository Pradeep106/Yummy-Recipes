import { useEffect, useState } from "react";
import { getRecipe } from "./recipeApi"; // Assuming getRecipe is the function to fetch recipes

const useRecipes = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // Update the endpoint path if necessary
        const data = await getRecipe(20);
        setRecipeDetails(data.recipes);
        console.log("recipes", data.recipes);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, []); // Empty dependency array to run once on mount

  return recipeDetails;
};

export default useRecipes;
