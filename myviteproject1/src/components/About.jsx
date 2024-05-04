import { FaCheck } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/About.css";
import AboutIMg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="container-xxl about-scn mb-5" id="About-Section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src={AboutIMg} alt="About" />
            </div>
          </div>
          <div className="col-lg-6 about-txt">
            <h1 className="mb-4">I Will Help You Find The Perfect Property</h1>
            <p className="mb-4">
              As a licensed real estate broker in the Philippines for 10 years,
              I specialize in selling a variety of properties including lots,
              house and lots, condominium units, commercial and industrial
              properties. My services encompass assisting clients with their
              buying, leasing, and selling needs. <br />
              <br />
              Beyond mere transactions, I am deeply passionate about helping
              individuals find their dream homes and investment properties. For
              me, real estate entails creating the ideal connection between a
              property and its owner, offering invaluable guidance and support
              throughout the entire process.
            </p>
            <p className="abt-list">
              <FaCheck className="text-primary me-3" />
              Extensive Expertise
            </p>
            <p className="abt-list">
              <FaCheck className="text-primary me-3" />
              Personalized Guidance
            </p>
            <p className="abt-list">
              <FaCheck className="text-primary me-3" />
              Dedicated Client Focus
            </p>
            <a className="btn py-3 px-5 mt-3" href="home.html">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
