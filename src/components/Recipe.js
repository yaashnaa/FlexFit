import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <>
      <div className="recipe">
        <div className="recipe-flexbox"> 
        <h2>{label}</h2>

        <img src={image} alt={label} />

        <a href={url} target="_blank" rel="noopener noreferrer">
          Link to full recipe
        </a>
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
        </div>
        
      </div>
    </>
  );
};

export default Recipe;
