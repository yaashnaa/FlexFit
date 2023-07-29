
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SignupForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmitSignup(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      console.log("Signup successful");
      navigate("/");
    } catch (error) {
      setError("Failed to signup");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="signup-form">
      <div className="title">Signup</div>
      {error && <Alert variant="danger"> {error} </Alert>}
      <form onSubmit={handleSubmitSignup}>
        <div className="input-boxes">
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Re-enter your password"
              ref={passwordConfirmRef}
              required
            />
          </div>

          <button className="button-60" disabled={loading} type="submit">
            Signup
          </button>

          <div className="text sign-up-text">
            Already have an account?{" "}
            <label for="flip" style={{ color: "#E63946" }}>
              Login now
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
