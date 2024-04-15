import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import useRecipes from "./api/useRecipes";
import { RecipeContext } from "./context/RecipeContext";
import ShimmerEffect from "./components/ShimmerEffect";

const LazyHeader = React.lazy(() => import("./components/Header"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

function App() {
  const recipeData = useRecipes();

  if (!recipeData) {
    return <ShimmerEffect />;
  }

  return (
    <div className="px-10 py-5 font-inter">
      <RecipeContext.Provider value={recipeData}>
        <Suspense fallback={<div>Loading Header...</div>}>
          <LazyHeader />
        </Suspense>
        <Outlet />
        <Suspense fallback={<div>Loading Footer...</div>}>
          <LazyFooter />
        </Suspense>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
