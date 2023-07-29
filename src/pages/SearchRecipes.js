import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";

import Navbar from "../components/Navbar";
import { Alert, TextField } from "@mui/material";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "872e30d4";
  const APP_KEY = "ff588ec41d54ec60315d06f8b5f6c61d	";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        setAlert("No food with such name");
        setRecipes([]); // Clear recipes if no results found
      } else {
        setRecipes(result.data.hits);
        setAlert("");
      }
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <Navbar />
      <div className="margin-recipe">
        <div className="searchheading">Search for recipes</div>

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
            height="6px"
            placeholder="Search"
            variant="filled"
            name="query"
            onChange={onChange}
            value={query}
          />

          <button className="button-89" type="submit" onClick={onSubmit}>
            Search
          </button>
        </div>

        {alert !== "" && <Alert severity="error" alert={alert} />}

        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe key={uuidv4()} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
