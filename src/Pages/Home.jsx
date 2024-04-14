import React, { useContext, useState } from "react";
import RecipeCards from "../components/RecipeCards";
import { RecipeContext } from "../context/RecipeContext";
import { filterData } from "../helper/filterData";

const Home = () => {
  const recipeData = useContext(RecipeContext);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredData, setFilteredData] = useState(recipeData);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const searchData = filterData(recipeData, inputValue);
    setSuggestions(searchData);
  };
  const handleSuggestionClick = (title) => {
    setInputValue(title);
    setSuggestions([]); // Clear suggestions
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = filterData(recipeData, inputValue);
    console.log("Matched recipes:", searchData);
    setFilteredData(searchData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className=" mt-20 box-center  gap-5 relative border-red-500">
        <div className="w-[60%] relative">
          <input
            type="text"
            placeholder="Search Your favorite recipe "
            className="border shadow-md shadow-gray-300 bg-blend-multiply w-full px-5 py-2 outline-none rounded-full"
            value={inputValue}
            onChange={handleOnChange}
          />
          {suggestions.length > 0 && inputValue !== "" && (
            <div className="absolute shadow-md shadow-gray-300 bg-white rounded-lg top-10 p-5 border w-full">
              {suggestions.map((recipe) => (
                <div
                  key={recipe.id}
                  className="border-b p-1 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(recipe.title)}>
                  <p>{recipe.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 px-5 py-2 text-white rounded-full">
          Search
        </button>
      </form>
      <h1 className="text-lg font-bold mt-10">Popular Picks</h1>
      <RecipeCards filteredData={filteredData} />{" "}
    </div>
  );
};

export default Home;
