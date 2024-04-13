import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { racipeData } from "../constants/recipeData";

const RecipeCards = () => {
  const navigate = useNavigate();

  const onclickHandler = (itemId) => {
    navigate(`/recipe-details/${itemId}`);
  };

  return (
    <div className=" rounded-lg flex flex-wrap box-center mt-10 items-center gap-5">
      {racipeData.map((item) => {
        return (
          <div
            key={item.id}
            className=" p-2 rounded-lg shadow-md shadow-gray-200 w-[200px]">
            <img src={item.image} alt="" className="rounded-lg" />
            <h2 className="font-semibold mt-2">{item.recipeName}</h2>
            <div className="flex gap-1">
              {item.ingredients.map((ingredient, index) => {
                return (
                  <p
                    key={index}
                    className="bg-orange-500 text-sm rounded-sm mt-2 px-1 text-white ">
                    {ingredient}
                  </p>
                );
              })}
            </div>
            <button
              className="text-orange-500 border border-orange-500 m-2 text-sm p-1 rounded-sm"
              onClick={() => onclickHandler(item.id)}>
              View Recipe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCards;
