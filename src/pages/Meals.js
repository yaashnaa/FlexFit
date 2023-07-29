import React, { useState } from "react";
import MealList from "../components/MealList";
import Navbar from "../components/Navbar";
import { TextField, Alert } from "@mui/material";
import Footer from "../components/Footer";

const Meal = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getMealData = () => {
    if (!calories.trim() || isNaN(calories)) {
      setErrorMessage("Please enter a valid number for calories.");
    } else {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=c1760f6e0dd24ff9bbb20cc6dbcde36e&timeFrame=day&targetCalories=${calories}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMealData(data);
          setErrorMessage("");
          console.log(data);
        })
        .catch((error) => {
          console.log("Error:", error);
          setErrorMessage("An error occurred while fetching the meal data.");
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="margin-recipe">
        <div className="searchheading">Get a meal plan</div>
        <div className="search-bar" style={{ marginBottom: "50px" }}>
          <TextField
            sx={{
              input: {
                type: "number",
                alignItems: "center",
                borderRadius: "20px",
                fontWeight: "700",
                border: "none",
                fontSize: "20px",
              },
              borderRadius: "20px",
              width: "60%",
            }}
            id="filled-basic"
            type="text"
            height="76px"
            placeholder="Enter calories (e.g 2000)"
            variant="filled"
            onChange={handleChange}
          />
          <button
            onClick={getMealData}
            className="button-89"
            style={{ width: "200px" }}
          >
            <span style={{ textAlign: "center" }}>Get meal plan</span>
          </button>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </div>
        <div className="flexbox-recipe">
          {mealData && <MealList mealData={mealData} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meal;
