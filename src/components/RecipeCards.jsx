import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const RecipeCards = ({ recipeData, filteredData }) => {
  const navigate = useNavigate();
  let data;
  if (filteredData.length === 0) {
    data = recipeData;
    console.log("data", data);
  } else {
    data = filteredData;
  }

  const onclickHandler = (itemId) => {
    navigate(`/recipe-details/${itemId}`);
  };

  return (
    <div className="rounded-lg flex flex-wrap box-center mt-10 items-center gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-2 rounded-lg shadow-md shadow-gray-200 w-[250px]">
          <img src={item.image} alt="" className="rounded-lg" />
          <h2 className="font-semibold mt-2">{item.title}</h2>
          <button
            className="text-orange-500 border border-orange-500 m-2 text-sm p-1 rounded-sm"
            onClick={() => onclickHandler(item.id)}>
            View Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

RecipeCards.propTypes = {
  recipeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default RecipeCards;
