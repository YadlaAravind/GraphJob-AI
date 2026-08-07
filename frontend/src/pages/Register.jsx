import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://graphjob-backend.onrender.com";

export default function Register() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.post(
        `${API}/register`,
        userData
      );

      console.log(response.data);

      if (response.data.status === "success") {

        setMessage("✅ Registration Successful");

        setTimeout(() => {
          navigate("/login");
        }, 1000);

      } else {

        setMessage(response.data.message);

      }

    } catch (error) {

      console.error(error);

      if (error.response) {
        setMessage(error.response.data.message || "Registration Failed");
      } else {
        setMessage("Server Error");
      }

    }
  }

  return (
    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="text-center mb-4">
                Register
              </h3>

              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Register
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
} 