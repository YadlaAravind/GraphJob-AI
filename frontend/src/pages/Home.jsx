import React from "react";
import { Link } from "react-router-dom";


export default function Home(){

  return(

    <div>


      {/* Hero Section */}

      <section className="bg-dark text-white py-5">

        <div className="container text-center">


          <h1 className="display-4 fw-bold">
            GraphJob AI
          </h1>


          <p className="lead mt-3">
            AI Powered Job Recommendation System using Graph Database
          </p>


          <p>
            Find the right job based on your skills using
            intelligent skill matching.
          </p>


          <Link
            to="/jobs"
            className="btn btn-primary btn-lg mt-3"
          >
            Explore Jobs
          </Link>


        </div>

      </section>





      {/* Features */}

      <section className="container my-5">


        <h2 className="text-center mb-4">
          Features
        </h2>



        <div className="row">


          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">


              <div className="card-body text-center">


                <h4>
                  Graph Based Matching
                </h4>


                <p>
                  Uses CognoDB graph relationships to
                  connect users, skills and jobs.
                </p>


              </div>


            </div>

          </div>





          <div className="col-md-4 mb-4">


            <div className="card shadow h-100">


              <div className="card-body text-center">


                <h4>
                  Skill Analysis
                </h4>


                <p>
                  Add your skills and get personalized
                  job recommendations.
                </p>


              </div>


            </div>


          </div>





          <div className="col-md-4 mb-4">


            <div className="card shadow h-100">


              <div className="card-body text-center">


                <h4>
                  Smart Recommendations
                </h4>


                <p>
                  AI finds suitable jobs based on
                  your skill profile.
                </p>


              </div>


            </div>


          </div>



        </div>


      </section>






      {/* How It Works */}

      <section className="bg-light py-5">


        <div className="container">


          <h2 className="text-center mb-4">
            How It Works
          </h2>



          <div className="row text-center">


            <div className="col-md-3">

              <h5>
                1. Register
              </h5>

              <p>
                Create your account
              </p>

            </div>



            <div className="col-md-3">

              <h5>
                2. Add Skills
              </h5>

              <p>
                Enter your technical skills
              </p>

            </div>



            <div className="col-md-3">

              <h5>
                3. AI Matching
              </h5>

              <p>
                Graph analyzes your profile
              </p>

            </div>



            <div className="col-md-3">

              <h5>
                4. Get Jobs
              </h5>

              <p>
                Receive recommendations
              </p>

            </div>



          </div>


        </div>


      </section>


    </div>

  )

}