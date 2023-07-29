import React, { useEffect, useState } from "react";
import "../App.css";
import { Box, Button, Stack, TextField, Typography, Alert } from "@mui/material";
import WebFont from "webfontloader";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      if (searchedExercises.length > 0) {
        setExercises(searchedExercises);
        setSearch("");
        setErrorMessage("");
      } else {
        setExercises([]);
        setErrorMessage("No exercises found.");
      }
    } else {
      setErrorMessage("Please enter a search query.");
    }
  };

  return (
    <>
      <div className="searchheading">Search for exercises</div>
      <div className="search-bar">
        <TextField
          sx={{
            input: {
              alignItems: "center",
              borderRadius: "20px",
              fontWeight: "700",
              border: "none",
            },
            borderRadius: "20px",
            width: "1170px",
          }}
          id="filled-basic"
          type="text"
          height="76px"
          placeholder="Search"
          variant="filled"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="button-89" role="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <div className="scroll-menu">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </>
  );
};

export default SearchExercises;
