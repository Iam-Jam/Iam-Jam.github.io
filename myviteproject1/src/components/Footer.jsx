// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import FImg from "../assets/Magna 8.jpg";

const Footer = () => {
  return (
    <div className="footer-scn" id="Footer-Section">
      <div className="container-fluid text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Get In Touch with Us</h5>

              <p className="mb-2">
                <FaMapMarkerAlt className="me-3" />
                Cagayan de Oro City
              </p>
              <p className="mb-2">
                <FaPhoneAlt className="me-3" />
                +639178504514
              </p>
              <p className="mb-2">
                <FaEnvelope className="me-3" />
                jammietorayno@gmail.com
              </p>

              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Jam_miE"
                >
                  <FaTwitter />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/jammieakut22/"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCozCfuxJk0nnhGCcT07_sgA"
                >
                  <FaYoutube />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jammietorayno/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <a className="btn btn-link text-white-50" href="about.html">
                About Us
              </a>
              <a className="btn btn-link text-white-50" href="services.html">
                Our Services
              </a>
              <a className="btn btn-link text-white-50" href="properties.html">
                Our Properties
              </a>
              <a className="btn btn-link text-white-50" href="contact.html">
                Contact Us
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Photo Gallery</h5>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a href="properties.html">
                    <img
                      className="img-fluid rounded bg-light p-1"
                      src={FImg}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Stay in the loop with exclusive updates and offers. Sign up for
                our newsletter today!
              </p>
              <div
                className="position-relative mx-auto text-white"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control w-100 py-3 ps-4 pe-5 sign-up-text"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn position-absolute top-0 end-0 mt-2 me-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 footer-cr">
                &copy; Jammie Torayno Realty, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="pp3-new.html">Home</a>
                  <a href="contact.html">Privacy</a>
                  <a href="contact.html">Help</a>
                  <a href="contact.html">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
