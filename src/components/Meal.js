import React, { useState, useEffect } from 'react';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c1760f6e0dd24ff9bbb20cc6dbcde36e&addRecipeNutrition=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setCalories(data.nutrition.caloricBreakdown.calories);
      })
      .catch(() => {
        console.log('error');
      });
  }, [meal.id]);

  return (
    <div className='meal-container'>
      <div className='meal-box'>
        <div className='meal-image'>
          <img src={imageUrl} alt="Meal" />
        </div>
        <div className='meal-info'>
          <div className='meal-title'>{meal.title}</div>
          <div>
            <div>Preparation time: {meal.readyInMinutes} minutes</div>
            <br />
            <div>Number of servings: {meal.servings}</div>
          </div>
          {calories && (
            <div className='nutritional-info'>
              <h3>Nutritional Information</h3>
              <p>Calories: {calories}</p>
            </div>
          )}
          <a className='recipe-link' href={meal.sourceUrl}>
            Go to recipe
          </a>
        </div>
      </div>
    </div>
  );
}
