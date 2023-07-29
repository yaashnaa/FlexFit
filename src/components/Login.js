// LoginForm.js
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmitLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login-form">
      <div className="title">Login</div>
      {error && <Alert variant="danger"> {error} </Alert>}
      <form onSubmit={handleSubmitLogin}>
        <div className="input-boxes">
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="text" style={{ marginTop: "20px" }}>
            <Link to='/forgot-password'>Forgot password?</Link>
          </div>
          <button className="button-60" disabled={loading} type="submit">
            Login
          </button>
          <div className="text sign-up-text">
            Don't have an account?{" "}
            <label for="flip" style={{ color: "#E63946" }}>
              Sigup now
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
