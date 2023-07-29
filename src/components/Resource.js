import React from "react";
import recipe1 from "../assets/icons/recipe1.jpeg";
import recipe2 from "../assets/icons/recipe2.jpeg";
import recipe3 from "../assets/icons/recipe3.jpeg";

const Resources = () => {
  return (
    <div>
      <div class="resources-title">Featured recipes</div>
      <div class="resources-text">
        Access a wealth of valuable resources to support your wellness journey.
        Explore a wide range of articles, videos, and guides covering nutrition,
        fitness, mindfulness, and more.{" "}
        <span className="hide-recipe">
          {" "}
          Stay informed and empowered as you discover expert advice, tips, and
          inspiration to help you achieve your health and fitness goals. Whether
          you're a beginner or an experienced enthusiast, our curated collection
          of resources has something for everyone.
        </span>
      </div>
      <div className="articles">
        <div className="article">
          <div className="heading-article">
          <a href="https://www.edamam.com/results/recipe/?recipe=chicken-and-sausage-with-blackberry-reduction-c64c7e537141d1fbb5e647c00382e09a/search=">Chicken and Sausage with Blackberry</a> 
          </div>
          <div className="article-text">
            <img
              src={recipe1}
              alt="Chicken and Sausage with Blackberry Reduction"
            />
          </div>
    
        </div>
        <div className="article">
          <div className="heading-article"> <a href="https://www.edamam.com/results/recipe/?recipe=herbed-beef-in-prosciutto-c217f6a518516320ccee30e89c2e789b/search=dinner">Herbed Beef in Prosciutto </a> </div>
          <div className="article-text">
            <img src={recipe2} alt="Herbed Beef in Prosciutto" />
          </div>
     
        </div>
        <div className="article">
          
          <div className="heading-article">
          <a href="https://www.edamam.com/results/recipe/?recipe=fennel-and-orange-salad-80752914dec49cc3def054506be8bc12/search=salad">Fennel and Orange Salad </a>
          </div>
          <div className="article-text">
            <img src={recipe3} alt="Fennel and Orange Salad" />
          </div>
          <div className="readmore">
            {" "}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
