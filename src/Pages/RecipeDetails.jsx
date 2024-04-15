import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams(); // Destructure id from useParams
  const recipeData = useContext(RecipeContext);
  const recipeId = parseInt(id);

  const selectedRecipe = recipeData.find((item) => item.id === recipeId);
  if (!selectedRecipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="mt-20 w-[90%] mini:w-full md:w-[80%] mx-auto">
      <h2 className="text-2xl font-bold">{selectedRecipe.title}</h2>
      <img
        src={selectedRecipe.image}
        alt={selectedRecipe.title}
        className="rounded-lg mt-10 w-full md:h-[400px] object-cover"
      />
      <h1 className="text-xl font-bold my-5">Ingredients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedRecipe.extendedIngredients.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-md p-3">
            <p className="font-semibold">{item.name}</p>
            <p>{item.original}</p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold my-5">Instructions</h1>
      {selectedRecipe.analyzedInstructions.map((instruction, index) => (
        <div key={index}>
          {instruction.steps.map((step, stepIndex) => (
            <div key={stepIndex} className="mt-5">
              <p className="text-orange-500 font-semibold">
                Step {stepIndex + 1}: {step.step}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="font-semibold mt-2">Equipments:</p>
                <div className="flex items-center flex-wrap gap-2">
                  {step.equipment.map((equipment) => (
                    <div key={equipment.id}>
                      <img src={equipment.image} alt={equipment.name} />
                    </div>
                  ))}
                </div>
                <p className="font-semibold mt-2">Ingredients:</p>
                <div className="flex items-center flex-wrap gap-2">
                  {step.ingredients.map((ingredient) => (
                    <div key={ingredient.id}>
                      <img src={ingredient.image} alt={ingredient.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecipeDetails;
