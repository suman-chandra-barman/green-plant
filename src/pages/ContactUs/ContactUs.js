import React from "react";
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="300">
      <div className="py-5 container mx-auto">
        <h2 className="fs-1 fw-bold text-center my-4">Contact us</h2>
        <p className="text-center mx-auto mb-5 fs-5 w-75">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row" style={{ backgroundColor: "#e0f2da" }}>
          <div className="col-md-7 p-2 p-md-5 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form my-2">
                    <label htmlFor="name" className="mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control py-2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form  my-2">
                    <label htmlFor="email" className="mb-2">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control py-2"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form  my-2">
                    <label htmlFor="subject" className="mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control py-2"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form my-2">
                    <label htmlFor="message" className="mb-2">
                      Your message
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="4"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-md-left my-2">
              <button
                className="btn btn-green-black"
                onClick="document.getElementById('contact-form').submit();"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="col-md-5 p-md-0">
            <div className="w-100">
              <div
                style={{
                  overflow: "hidden",
                  maxWidth: "100%",
                  height: "500px",
                }}
              >
                <div
                  id="gmap-canvas"
                  style={{ maxWidth: "100%", width: "100%", height: "100%" }}
                >
                  <iframe
                    title="green_plant"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Thakurgaon+Super+Market,+Bangabandhu+Road,+Thakurgaon,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-4">
            <div className="w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <div
                  className="bg-green p-3 text-white rounded-circle"
                  style={{ backgroundColor: "#79a206" }}
                >
                  <FaMapMarkerAlt className="fs-3 " />
                </div>
              </div>
              <div className="text mt-2">
                <p>
                  <span>Address:</span> Bangabandhu Road ,Thakurgaon, Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <div
                  className="bg-green p-3 text-white rounded-circle"
                  style={{ backgroundColor: "#79a206" }}
                >
                  <FaPhoneAlt className="fs-3 " />
                </div>
              </div>
              <div className="text mt-2">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="w-100 text-center">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="bg-green p-3 text-white rounded-circle"
                  style={{ backgroundColor: "#79a206" }}
                >
                  <FaRegEnvelope className="fs-3 " />
                </div>
              </div>
              <div className="text mt-2">
                <p>
                  <span>Email: </span>
                  <a href="mailto:greenplant@gmail.com">greenplant@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
