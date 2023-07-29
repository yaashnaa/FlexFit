import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import signupImage from "../assets/icons/signup.png";
import SignupForm from "./Signup";
import LoginForm from "./Login";
import SignupLogin from "../components/SignupLogin.css";

export default function Authenticate() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "200px" }}></div>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={signupImage} alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src={signupImage} alt=""></img>
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <SignupForm />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
