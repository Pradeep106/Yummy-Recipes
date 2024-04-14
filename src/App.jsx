import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RecipeContext } from "./context/RecipeContext";
import useRecipes from "./api/useRecipes";
import { apiData } from "./constants/apiData";

function App() {
  let recipeData = useRecipes();
  if (!recipeData) {
    recipeData = apiData?.recipes;
  }
  console.log(" app", recipeData);
  return (
    <div className="px-10 py-5 font-inter">
      <RecipeContext.Provider value={recipeData}>
        <Header />
        <Outlet />
        <Footer />
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
