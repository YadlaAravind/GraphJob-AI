import React, { useState } from "react";
import axios from "axios";


export default function Recommendation(){

  const [jobs,setJobs] = useState([]);
  const [message,setMessage] = useState("");


  const user = JSON.parse(
    localStorage.getItem("user")
  );



  async function getRecommendations(){


    try{


      const response = await axios.post(
        "http://127.0.0.1:5000/recommend",
        {
          email:user.email
        }
      );

       console.log(response.data);
      setJobs(
        response.data.recommendations
      );


      setMessage(
        "Recommended Jobs Found"
      );


    }
    catch(error){

      console.log(error);

      setMessage(
        "No Recommendations Found"
      );

    }

  }



  return(

    <div className="container my-5">


      <h2 className="text-center mb-4">
        Job Recommendations
      </h2>



      {
        user &&

        <div className="alert alert-info">

          Welcome, {user.name}

        </div>

      }



      <div className="text-center">


        <button
          className="btn btn-success"
          onClick={getRecommendations}
        >

          Get Recommendations

        </button>


      </div>




      {
        message &&

        <h5 className="text-center mt-4">
          {message}
        </h5>

      }




      <div className="row mt-4">


        {
          jobs.map((job,index)=>(


            <div
              className="col-md-4 mb-3"
              key={index}
            >


              <div className="card shadow h-100">


                <div className="card-body">


                  <h5 className="card-title">

                    {job.job}

                  </h5>


                  <p className="card-text">

                    Company: {job.company}

                  </p>


                  <button className="btn btn-primary">

                    Apply Now

                  </button>


                </div>


              </div>


            </div>


          ))
        }


      </div>


    </div>

  )

}