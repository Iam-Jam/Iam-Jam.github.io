import "../components/Home.css"
import "../components/styles.css"
import { Container, FormControl, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa'; 
import backgroundImage from '../assets/hero1.jpg'
import SPImg1 from "../assets/Magna 3.png"
import AboutIMg from '../assets/about.jpg'
import PropertyCard from "./PropertyCard";
import BookingCalendar from "./calendar";

const Home = () => {
  return (
    <div>
    {/* // Start of Hero Section */}
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className="hero-sec-2 justify-content-center align-items-center h-100">
        <div className="container text-center hero-text ">
          <h1 className="fw-bold display-4 display-lg-3 text-primary">Find your Dream Home with Jammie</h1>
          <p className="lead fs-5 fs-lg-4 fw-bold">Your Key to Perfect Living.</p>
        </div>
        <div className=" row search-btns">
          <div className="container search-btn">
            <button className="btn btn-color buy-btn">BUY</button>
            <button className="btn btn-color rent-btn">RENT</button>
            <button className="btn btn-color sell-btn">SELL</button>
           </div>
        </div>
        <div className="input-group mb-3 search-bar">
          <FormControl type="text" className="form-control" id="search-input" placeholder="Looking for a house, lot or condo unit?" aria-label="Looking for" aria-describedby="button-addon2" />
          <Button className="btn" type="button" id="search-button">Search</Button>
        </div>
      </Container>
      </div>
    {/* End of Hero Section */}

    {/* Start of the Featured Section */}
      <div className="container mt-5" id="Properties-Section">
        <div className="container col-lg-7 properties-scn">
          <h2 className="display-5 text-center fw-bold mt-5">
            Our Featured Properties
          </h2>
          <p className="text-center">Feel Free to Check our numerous listings.</p>
        </div>
        <div className="row g-4 Featured-props">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    {/* End of the Featured Section */}
    
    {/* Start of About Section */}
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
            <p className="mb-4">As a licensed real estate broker in the Philippines for 10 years, I specialize in
              selling a variety of properties including lots,
              house and lots, condominium units, commercial and industrial properties. My services encompass
              assisting clients
              with their buying, leasing, and selling needs. <br /><br />Beyond mere transactions, I am deeply
              passionate about helping
              individuals find their dream homes and investment properties. For me, real estate entails creating
              the ideal connection
              between a property and its owner, offering invaluable guidance and support throughout the entire
              process.</p>
            <p className="abt-list"><FaCheck className="text-primary me-3" />Extensive Expertise</p> 
            <p className="abt-list"><FaCheck className="text-primary me-3" />Personalized Guidance</p> 
            <p className="abt-list"><FaCheck className="text-primary me-3" />Dedicated Client Focus</p> 
            <a className="btn py-3 px-5 mt-3" href="home.html">Read More</a>
          </div>
        </div>
      </div>
    </section>
  {/* End of About Section */}

  {/* Start of Services Section */}
  <section className="services" id="Services-Section">
      <div className="container col-lg-7">
        <h2 className="display-5 text-center fw-bold">How Can I Help You Today?</h2>
        <p className="text-center">Here at Jammie Torayno Realty, our mission is to provide unparalleled brokering services
          in the
          industry. Whether you&aposre aiming to sell your property or seeking your next investment opportunity, we&aposre
          dedicated
          to guiding you every step of the way.</p>
      </div>
      <div className="container services-scn">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-3">
            <div className="card text-center">
              <img src={SPImg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mb-4">I want to Buy a Property</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                  the
                  card&aposs content.</p>
                <a href="properties.html" className="btn">View Listings for Sale</a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card text-center">
              <img src={SPImg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mb-4">I Want to Lease a Property</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                  the
                  card&aposs content.</p>
                <a href="properties.html" className="btn">View Listings for Rent</a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card text-center">
              <img src={SPImg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mb-4">I Want to Sell My Property</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                  the
                  card&aposs content.</p>
                <a href="properties.html" className="btn">List My Property</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/* End of Services Section */}

  <div>
    <BookingCalendar/>
  </div>
  </div>
  )
}

export default Home

