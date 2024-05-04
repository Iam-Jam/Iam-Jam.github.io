import 'bootstrap/dist/css/bootstrap.min.css';
import SPImg1 from "../assets/Magna 3.png"

const Services = () => {
  return (
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
  )
}

export default Services