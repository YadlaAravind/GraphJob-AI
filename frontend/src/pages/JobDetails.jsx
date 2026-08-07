import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function JobDetails() {

  const { title } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobDetails();
  }, [title]);

  async function getJobDetails() {

    try {

      const decodedTitle = decodeURIComponent(title);

      const response = await axios.get(
        `https://graphjob-backend.onrender.com/job/${decodedTitle}`
      );

      console.log(response.data);

      if (response.data.status === "success") {
        setJob(response.data.job);
      }

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div className="container my-5">

      {
        job ? (

          <div className="card shadow">

            <div className="card-body">

              <h2>{job.title}</h2>

              <h5>Company: {job.company}</h5>

              <hr />

              <h5>Required Skills</h5>

              <ul>
                {job.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <button className="btn btn-success">
                Apply Now
              </button>

            </div>

          </div>

        ) : (

          <h4>Loading Job Details...</h4>

        )
      }

    </div>

  );

}