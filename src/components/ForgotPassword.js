import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox");
      //   navigate("/dashboard");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
    <Navbar /> 
      <div className="forgot-container">
        <div className="forgot-form">
          <div className='heading'> Password Reset</div>
          {error && <Alert variant="danger"> {error} </Alert>}
          {message && <Alert variant="success"> {message} </Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label style={{fontSize:'24px'}}> Email </Form.Label>
              <Form.Control type="email" ref={emailRef}></Form.Control>
            </Form.Group>

            <button style={{marginTop:'50px', display:'flex', justifyContent:'center', margin:'0 auto'}} disabled={loading} className="button-89" type="submit">
              Reset password
            </button>
          </Form>
          <div className="text-login">
            <Link to="/login"> Login </Link>
          </div>
        </div>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"> Sign up </Link>
      </div>
      </div>
     
    </>
  );
}
