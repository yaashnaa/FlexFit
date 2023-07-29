import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Signup from "../components/Signup";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Authenticate from "../components/Authenticate";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);
        console.log("Exercise Detail:", exerciseDetailData);

        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);
        console.log("Target Muscle Exercises:", targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
        console.log("Equipment Exercises:", equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  useEffect(() => {
    const fetchExerciseVideos = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);
        console.log("Exercise Videos:", exerciseVideosData);
      } catch (error) {
        console.error("Error fetching exercise videos:", error);
      }
    };

    if (exerciseDetail.name) {
      fetchExerciseVideos();
    }
  }, [exerciseDetail]);

  return (
    <>
      <Navbar />

      <div className="big-flexbox">
        <div className="exercise-extra-detail">
          <Detail exerciseDetail={exerciseDetail} />
        </div>
        <div className="signup-cont">
          {" "}
          <Authenticate />{" "}
        </div>
      </div>
      <div className="youtube-videos-1">
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
      </div>
      <div className="exercises-box">
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises.slice(0, 10)}
          equipmentExercises={equipmentExercises.slice(0,10)}
        />
      </div>

      <Footer />
    </>
  );
};

export default ExerciseDetail;
