import React from "react";


export default function Footer(){

  return(

    <footer className="bg-dark text-light mt-5">


      <div className="container py-4">


        <div className="row">


          <div className="col-md-6">

            <h4 className="fw-bold">
              GraphJob AI
            </h4>


            <p>
              Smart Job Recommendation System
              powered by Graph Database.
            </p>

          </div>



          <div className="col-md-6 text-md-end">


            <h5>
              Quick Links
            </h5>


            <p className="mb-1">
              Jobs | Recommendation
            </p>


            <p className="mb-0">
              Register | Add Skills
            </p>


          </div>


        </div>


        <hr />


        <div className="text-center">

          <p className="mb-0">
            © 2026 GraphJob AI. All Rights Reserved.
          </p>

        </div>


      </div>


    </footer>

  )

}