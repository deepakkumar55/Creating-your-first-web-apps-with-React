import "./index.css";
import React from "react";
// TODO: Import RecipeTitle
import RecipeTitle from "./RecipeTitle";

// TODO: Import IngredientList
// TODO: Import IngredientList
import IngredientList from "./IngredientList";
function App() {
  // TODO: Add recipe object
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
  };
  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      {/* TODO: Add IngredientList component */}
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />
    </article>
  );
}

export default App;
