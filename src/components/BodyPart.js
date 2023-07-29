import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import ChestImage from '../assets/icons/chest.png';
import LowerarmsImage from '../assets/icons/lowerarms.png';
import CardioImage from '../assets/icons/cardio.png';


const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #353535",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 500, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: "140px", height: "140px" }} />
      <Typography
        fontSize="24px"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
