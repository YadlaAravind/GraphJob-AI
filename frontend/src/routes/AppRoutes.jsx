import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Job from "../pages/Job.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Contact from "../pages/Contact.jsx";
import AddSkills from "../pages/AddSkills.jsx";
import Recommendation from "../pages/Recommendation.jsx";
import JobDetails from "../pages/JobDetails";


function AppRoutes() {

  return (
    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />


      <Route 
        path="/jobs" 
        element={<Job />} 
      />

      <Route 
       path="/add-skills" 
       element={<AddSkills />}
       />


      <Route 
        path="/login" 
        element={<Login />} 
      />


      <Route 
        path="/register" 
        element={<Register />} 
      />
      <Route 
        path="/recommendation"
        element={<Recommendation />}
        />

        <Route
        path="/job/:title"
        element={<JobDetails />}
        />
        

      <Route 
        path="/contact" 
        element={<Contact />} 
      />


    </Routes>



  );
}


export default AppRoutes;