import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login(){
const navigate = useNavigate();

  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  });



  function handleChange(e){

    const {name,value} = e.target;

    setLoginData({
      ...loginData,
      [name]:value
    });

  }



  async function handleSubmit(e){

  e.preventDefault();


  try{

    const response = await axios.post(
      "http://127.0.0.1:5000/login",
      loginData
    );


    console.log(response.data);


    if(response.data.status === "success"){


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      alert("Login Successful");


      navigate("/recommendation");

    }


  }
  catch(error){

    console.log(error);

    alert("Invalid User");

  }

}


  return(

    <div className="container my-5">


      <div className="row justify-content-center">


        <div className="col-md-5">


          <div className="card shadow">


            <div className="card-body">


              <h3 className="text-center mb-4">
                Login
              </h3>



              <form onSubmit={handleSubmit}>


                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>


                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={loginData.email}
                    onChange={handleChange}
                  />

                </div>



                <div className="mb-3">


                  <label className="form-label">
                    Password
                  </label>


                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={loginData.password}
                    onChange={handleChange}
                  />


                </div>



                <button 
                  className="btn btn-primary w-100"
                >
                  Login
                </button>



              </form>


            </div>


          </div>


        </div>


      </div>


    </div>

  )

}