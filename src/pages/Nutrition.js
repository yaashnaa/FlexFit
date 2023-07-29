import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Alert, TextField } from "@mui/material";

const apiKey = "PritHHVFJRgoKY4JvTBJSg==Skzg9ao1tdYXBeGC";
const apiUrl = "https://api.calorieninjas.com/v1/nutrition";

const Nutrition = () => {
  const [nutritionData, setNutritionData] = useState(null);
  const [query, setQuery] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    if (query !== "") {
      axios
        .get(apiUrl, {
          params: {
            query: query,
          },
          headers: {
            "X-Api-Key": apiKey,
          },
        })
        .then((response) => {
          const nutritionData = response.data;
          setNutritionData(nutritionData);
          console.log(nutritionData);
          if (nutritionData.items.length === 0) {
            setAlertMessage("No results found");
          } else {
            setAlertMessage("");
          }
        })
        .catch((error) => {
          console.error("Request failed:", error);
          setNutritionData(null);
          setAlertMessage("Error fetching data");
        });
    } else {
      // setAlertMessage("Please enter a food name");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Query:", query);
    
    if (!query.trim()) {
      console.log("Empty query");
      setAlertMessage("Please fill the form");
      setNutritionData(null);
    } else {
      console.log("Non-empty query");
      fetchData();
    }
  };
  
  

  return (
    <>
      <Navbar />
      <div className="margin-nutrition">
        <div className="searchheading">Search for foods</div>
        <div className="search-bar" style={{ marginBottom: "50px" }}>
          <TextField
            sx={{
              input: {
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
            placeholder="Search"
            variant="filled"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button className="button-89" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {alertMessage && <Alert severity="error">{alertMessage}</Alert>}


        {nutritionData && nutritionData.items && (
          <div className="nutrition-data">
            <div className="display-data">
              {nutritionData.items.map((item, index) => (
                <div key={index}>
                  <div className="heading">Nutrition Information:</div>
                  <p style={{ fontSize: "30px" }}>
                      Name: {item.name.toUpperCase()}
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Calories: </span>{" "}
                      {item.calories}
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Serving Size: </span>
                      {item.serving_size_g}g
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Fat: </span>
                      {item.fat_total_g}g
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Protein: </span>{" "}
                      {item.protein_g}g
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Sodium: </span>{" "}
                      {item.sodium_mg}mg
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Potassium: </span>
                      {item.potassium_mg}mg
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Cholesterol: </span>
                      {item.cholesterol_mg}mg
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>
                        Carbohydrates:
                      </span>{" "}
                      {item.carbohydrates_total_g}g
                    </p>
                    <p>
                      {" "}
                      <span style={{ color: "#1D3557" }}>Fiber: </span>{" "}
                      {item.fiber_g}g
                    </p>
                    <p>
                      <span style={{ color: "#1D3557" }}>Sugar:</span>{" "}
                      {item.sugar_g}g
                    </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {!nutritionData && (
          <div className="no-data">No data found.</div>
        )} */}
      </div>
    </>
  );
};

export default Nutrition;
