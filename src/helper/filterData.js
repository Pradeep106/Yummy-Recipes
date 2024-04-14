
export const filterData = (recipeData,value) => {
  const searchData = recipeData.filter((recipe) =>
    recipe.title.toLowerCase().includes(value.toLowerCase())
  );
  return searchData;
};
