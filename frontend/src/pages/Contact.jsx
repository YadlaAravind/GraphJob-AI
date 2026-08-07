import React from "react";

function Contact() {

  return (
    <div className="container my-5">


      <h1 className="text-center mb-5">
        Contact Us
      </h1>



      <div className="row g-4">


        {/* Contact Details */}

        <div className="col-md-5">


          <div className="card shadow h-100">


            <div className="card-body">


              <h3 className="mb-4">
                Get In Touch
              </h3>


              <p>
                📧 Email: support@graphjob.com
              </p>


              <p>
                📞 Phone: +91 9876543210
              </p>


              <p>
                📍 Location: Hyderabad, India
              </p>


              <p>
                Feel free to contact us for any queries.
              </p>


            </div>


          </div>


        </div>




        {/* Contact Form */}

        <div className="col-md-7">


          <div className="card shadow">


            <div className="card-body p-4">


              <h3 className="mb-4">
                Send Message
              </h3>



              <form>


                <div className="mb-3">

                  <label className="form-label">
                    Name
                  </label>


                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />

                </div>




                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>


                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                </div>




                <div className="mb-3">

                  <label className="form-label">
                    Message
                  </label>


                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>


                </div>



                <button className="btn btn-primary">
                  Send Message
                </button>


              </form>


            </div>


          </div>


        </div>



      </div>


    </div>
  );
}


export default Contact;