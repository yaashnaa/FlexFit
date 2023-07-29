import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {useNavigate, Link} from 'react-router-dom'
import Navbar from './Navbar';
export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout }= useAuth()
  const navigate= useNavigate()



  async function handleLogout() {
    setError('')

    try{
        navigate('/signup')
        await logout()
       

    } catch{
        setError('failed to logout')

    }
  }

  return (
    <>
    <Navbar />
      <div className='logout-div'>
        {/* <div >
          <div className="heading">Profile</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className='email-profile'> Email: {currentUser.email}</div> 
          
          
      
        </div> */}
        <div className="button-logout" >
          Are you sure you want to log out? 
        {/* <div className='button-60'> 
          <Link to='/update-profile' style={{textDecoration:'none', color:'black'}}> Update Profile</Link>
          </div> */}
          <button className='button-60' onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
