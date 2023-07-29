import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail, logout }= useAuth(); 

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleLogout() {
    setError('')

    try{
        navigate('/login')
        await logout()
       

    } catch{
        setError('failed to logout')

    }
  }

   function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
      
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = []

    if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))

    }

    if (passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }
    console.log(promises)
    Promise.all(promises)
    .then(() => {
        navigate('/');
    })
    .catch(() => {
        setError('Failed to update account');
    })
    .finally(() => {
        setLoading(false);
    });

    }

  return (
    <>
    <Navbar /> 
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{marginRight:'200px', marginLeft:'200px', width:'500px'}}>
          <div className='heading'> Update Profile</div>
          {error && <Alert variant="danger"> {error} </Alert>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <Form.Label> Email </Form.Label>
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
            </div>
            <Form.Group id="password">
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" ref={passwordRef}  placeholder="Leave blank to keep the same"></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label> Password Confirmation </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                 placeholder="Leave blank to keep the same"
              ></Form.Control>
            </Form.Group>
            <button className='button-60' disabled={loading} type="submit">
              Update
            </button>
            <button className="button-60" variant="link" onClick={handleLogout}>
            Log out
          </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/"> Cancel </Link>
      </div>
    </>
  );
}
