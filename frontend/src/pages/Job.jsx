import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Job() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    try {

      const response = await axios.get(
        "https://graphjob-backend.onrender.com/jobs"
      );

      console.log("Full Response:", response.data);
      console.log("Jobs:", response.data.jobs);

      if (response.data.status === "success") {
        setJobs(response.data.jobs);
      } else {
        setJobs([]);
      }

    } catch (error) {

      console.error("Jobs Error:", error);
      setJobs([]);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">
        Available Jobs
      </h2>

      {
        loading ? (

          <div className="text-center">
            <h5>Loading Jobs...</h5>
          </div>

        ) : jobs.length === 0 ? (

          <div className="alert alert-warning text-center">
            No Jobs Available
          </div>

        ) : (

          <div className="row">

            {
              jobs.map((job, index) => (

                <div
                  className="col-md-4 mb-4"
                  key={index}
                >

                  <div className="card shadow h-100">

                    <div className="card-body">

                      <h5 className="card-title">
                        {job.job}
                      </h5>

                      <p className="card-text">
                        <strong>Company:</strong> {job.company}
                      </p>

                      <Link
                        className="btn btn-primary"
                        to={`/job/${job.job}`}
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}