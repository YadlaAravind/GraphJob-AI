import React, { useState } from "react";
import axios from "axios";

export default function AddSkills() {

  const [skillData, setSkillData] = useState({
    email: "",
    skills: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {

    const { name, value } = e.target;

    setSkillData({
      ...skillData,
      [name]: value
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://graphjob-backend.onrender.com/add-skills",
        {
          email: skillData.email,
          skills: skillData.skills
            .split(",")
            .map(skill => skill.trim())
        }
      );

      console.log(response.data);

      if (response.data.status === "success") {
        setMessage("✅ Skills Added Successfully");
      } else {
        setMessage(response.data.message || "Failed to add skills");
      }

    } catch (error) {

      console.error(error);

      setMessage("❌ Failed to add skills");

    }

  }

  return (

    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="text-center mb-4">
                Add Skills
              </h3>

              {
                message &&
                <div className="alert alert-info">
                  {message}
                </div>
              }

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={skillData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Skills
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="skills"
                    value={skillData.skills}
                    onChange={handleChange}
                    placeholder="Python, React, SQL"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Add Skills
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}