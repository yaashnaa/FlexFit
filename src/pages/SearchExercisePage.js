import React from 'react'
import { useState } from "react";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';

const SearchExercisePage = () => {
    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);
    console.log(bodyPart)
  return (

    <div>
    <Navbar /> 

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  )
}

export default SearchExercisePage
