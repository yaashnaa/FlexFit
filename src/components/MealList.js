import React from "react";
import Meal from "./Meal";
import Footer from "./Footer";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  return (
    <>
      <div>
        <div>
          <div className="nutrients">
            <div className="heading"> Macros </div>
            <div style={{textAlign:'center', fontSize:'28px'}}>
              <div> Calories: {nutrients.calories.toFixed(0)} </div>
              <div> Carbs: {nutrients.carbohydrates.toFixed(0)} </div>
              <div> Fat: {nutrients.fat.toFixed(0)} </div>
              <div> Protein: {nutrients.protein.toFixed(0)} </div>
            </div>
          </div>
        </div>

      </div>
      <div className="meals"> 
      {mealData.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />
      })}
      </div>
    
    </>
  );
}
