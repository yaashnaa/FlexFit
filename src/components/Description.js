import React from "react";
import { Icon } from "@iconify/react";


const Description = () => {
  return (
    <div>
      <div className="description-cont">
        <div className="cont-1">
          <div className="content">
            <div className="descrip-heading">Nutritional info</div>
            Unlock the power of nutrition knowledge. Our search provides
            in-depth nutritional information for various foods. From calories to
            macronutrients, discover the facts you need to make informed dietary
            choices. Simple and reliable results at your fingertips.
          </div>

          <div className="content-image">
            <Icon
              icon="fluent:food-16-filled"
              width="150"
              height="150"
              className="food"
            />
          </div>
        </div>
        <div className="cont-2">
          <div className="content">
            <div className="descrip-heading">Exercise Search</div>
            Find the perfect exercises for your fitness goals. Our search
            feature helps you discover workouts based on body parts, equipment,
            or target muscles. Get detailed descriptions, images, and videos to
            ensure proper form and effectiveness.
          </div>
          <div className="content-image">
            <Icon
              icon="map:gym"
              width="150"
              height="150"
              className="dumbell"
            />
          </div>
        </div>
        <div className="cont-1">
          <div className="content">
            <div className="descrip-heading">Recipe search</div>
            Explore delicious and healthy recipes with ease. Our search feature
            offers a vast collection of recipes tailored to your dietary
            preferences. From breakfast to dinner, find inspiring dishes with
            ingredient lists, step-by-step instructions, and nutritional info.
          </div>
          <div className="content-image">
            <Icon
              icon="grommet-icons:resources"
              width="150"
              height="150"
              className="resources"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
