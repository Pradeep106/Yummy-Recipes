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
    <div className="mt-20 w-[80%] mx-auto">
      <h2 className="text-2xl font-bold">{selectedRecipe.title}</h2>
      <img
        src={selectedRecipe.image}
        alt={selectedRecipe.title}
        className="rounded-lg mt-10 w-full h-[400px]"
      />
      <h1 className="text-xl font-bold my-5">Ingredience</h1>
      <div className="capitalize">
        {selectedRecipe.extendedIngredients.map((item, index) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-2 w-[50%]  border-gray-200">
              <p className="p-1">{item.name}</p>
              <p>{item.original}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl font-bold my-5">Instructions </h1>
      {selectedRecipe.analyzedInstructions.map((instruction) => {
        return (
          <div key={instruction.id}>
            {instruction.steps.map((step, index) => {
              return (
                <div key={step.id} className=" mt-5 p-5 ">
                  <p className="text-orange-500">
                    <span className="font-semibold">Step {index + 1}.</span>
                    <span className="text-black font-"> {step.step}</span>
                  </p>
                  <p className="font-semibold mt-2">Equipments:</p>
                  <div className="flex items-center gap-10 capitalize">
                    {step.equipment.map((item) => {
                      return (
                        <div key={item.id}>
                          <img src={item.image} alt="" />
                        </div>
                      );
                    })}
                  </div>
                  <p className="font-semibold mt-10">Ingredients</p>
                  <div className="flex capitalize  flex-wrap gap-10">
                    {step.ingredients.map((item) => {
                      return (
                        <div key={item.id}>
                          <img src={item.image} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
