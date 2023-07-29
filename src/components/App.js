import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ExerciseDetail from '../pages/ExerciseDetail'
import Login from './Login'
import Home from '../pages/Home';
import SearchExercisePage from '../pages/SearchExercisePage';

import PrivateRoutes from "./PrivateRoute";
import ForgotPassword from './ForgotPassword';
import UpdateProfile from "./UpdateProfile";
import Nutrition from "../pages/Nutrition";
import Meal from "../pages/Meals";
import RecipeLists from "./Recipe";
import SearchRecipes from '../pages/SearchRecipes'

import Authenticate from '../components/Authenticate'
function App() {
  return (
    
    <>
     <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Authenticate />} />
              
              <Route path="/login" element={<Authenticate />} />
              <Route path="/meal" element={<Meal />} />
           
              <Route path="/exercise" element={<SearchExercisePage />}>
                {" "}
              </Route>
              <Route path="/exercise/:id" element={<ExerciseDetail />}>
                {" "}
              </Route>

              <Route element={<PrivateRoutes />}>
              <Route path="/recipes" element={<SearchRecipes />} />
              </Route>


              <Route path="/" element={<Home />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/nutrition" element={<Nutrition />} />
              </Route>
               <Route element={<PrivateRoutes />}>
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
    </>
       
 
  );
}

export default App;
