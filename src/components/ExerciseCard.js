import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} Loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#E63946",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecoration: "underline",
            textDecorationColor: "#C9ADA7",
            transition: "background-color 0.3s ease", // Add transition
            "&:hover": {
              background: "#A68781",
              textDecoration: "underline",
              textDecorationColor: "#A68781" // Darker background color on hover
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#457B9D",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecoration: "underline",
            textDecorationColor: "#3C887E",
            transition: "background-color 0.3s ease", // Add transition
            "&:hover": {
              background: "#27625B",
              textDecoration: "underline",
            textDecorationColor: "#27625B" // Darker background color on hover
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "white", // Remove text decoration
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
