import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar(){

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  function logout(){

    localStorage.removeItem("user");

    navigate("/login");

  }



  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">


      <div className="container">


        <Link 
          className="navbar-brand fw-bold fs-4"
          to="/"
        >
          GraphJob AI
        </Link>



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >

          <span className="navbar-toggler-icon"></span>

        </button>



        <div 
          className="collapse navbar-collapse"
          id="navbarMenu"
        >


          <ul className="navbar-nav ms-auto">


            <li className="nav-item">

              <Link className="nav-link" to="/">
                Home
              </Link>

            </li>



            <li className="nav-item">

              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>

            </li>



            {
              !user &&

              <li className="nav-item">

                <Link className="nav-link" to="/login">
                  Login
                </Link>

              </li>

            }



            {
              !user &&

              <li className="nav-item">

                <Link className="nav-link" to="/register">
                  Register
                </Link>

              </li>

            }



            {
              user &&

              <li className="nav-item">

                <Link className="nav-link" to="/add-skills">
                  Add Skills
                </Link>

              </li>

            }



            {
              user &&

              <li className="nav-item">

                <Link className="nav-link" to="/recommendation">
                  Recommendation
                </Link>

              </li>

            }



            {
              user &&

              <li className="nav-item">

                <button
                  className="btn btn-danger ms-2"
                  onClick={logout}
                >
                  Logout
                </button>

              </li>

            }



          </ul>


        </div>


      </div>


    </nav>

  )

}