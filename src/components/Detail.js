import React from "react";
import { Typography, Stack, Button, capitalize } from "@mui/material";
import bodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="exercise-flexbox">
      <div className="detail-image-div">
        {" "}
        <img src={gifUrl} Loading="lazy" className="detail-image" />{" "}
      </div>

      <div className="detail">
        <div className="exercise-name">{name}</div>
        {extraDetail.map((item) => (
          <div className='exercise-icon-name' key={item.name} direction="row" gap="24px">
            <div className="image-gif">
              <img src={item.icon} className="exercise-icon" />
            </div>
            <div className="extra-detail">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
