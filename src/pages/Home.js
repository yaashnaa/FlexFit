import React, { useState } from "react";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import Description from '../components/Description';
import HeroBanner from '../components/HeroBanner';
import Features from '../components/Features';
import Resources from '../components/Resource';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import Authenticate from "../components/Authenticate";

const Home = () => {


  return (
    <>

    <Navbar /> 
    <HeroBanner /> 
    <Description />
    <Features /> 
    <Resources /> 
    <div className="background"> 
    <Authenticate />
    </div>
  

    
    <Footer />

   
    </>
  );
};

export default Home;
