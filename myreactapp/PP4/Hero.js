import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Hero = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <main className="card mb-3 prop-card-1 hero-scn" id="Hero-Section">
        <div className="row align-items-center g-0">
          {/* Text column */}
          <div className="col-lg-5 hero-text">
            <div className="container">
              <h1 className="display-6 fw-bold">Find your Dream Home with Jammie</h1>
              <p className="lead">Your Key to Perfect Living.</p>
            </div>
            <div>
              <div className="row search-btns">
                <div className="container position-relative search-btn">
                  <button className="btn btn-color buy-btn">BUY</button>
                  <button className="btn btn-color rent-btn">RENT</button>
                  <button className="btn btn-color sell-btn">SELL</button>
                </div>
              </div>
              <div className="input-group mb-3 search-bar">
                <input type="text" className="form-control" id="search-input" placeholder="Looking for a house, lot or condo unit?" aria-label="Looking for" aria-describedby="button-addon2" />
                <button className="btn" type="button" id="search-button">Search</button>
              </div>
            </div>
          </div>
          {/* Image column */}
          <div className="col-lg-7">
            <img src="assets/hero 1.jpg" className="img-fluid" alt="..." />
          </div>
        </div>
      </main>

      {/* SEARCH RESULTS HERE */}
      <section id="Searched-Properties-Section">
        <div className="container properties-scn">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h2 className="display-5 text-center fw-bold mt-5">Your Searched Properties</h2>
              <p className="text-center">We'll help you choose the Best Property for you.</p>
            </div>
          </div>
          <div id="filtered-properties" className="row row-cols-1 row-cols-md-3 justify-content-center">
            {/* Searched Properties will be displayed here */}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section className="container mt-5" id="Properties-Section">
        <div className="container col-lg-7 properties-scn">
          <h2 className="display-5 text-center fw-bold mt-5">Our Featured Properties</h2>
          <p className="text-center">Feel Free to Check our numerous listings.</p>
        </div>
        <div className="row g-4 Featured-props">
          {/* Featured Prop - 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card property-item rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img src="assets/property-1.jpg" className="card-img-top border border-bottom-dark" style={{ height: '300px' }} alt="Property" />
                <div className="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">BUY</div>
                <div className="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Residential | House and Lot</div>
              </div>
              <div className="p-4 pb-0">
                <div className="price-heart d-flex justify-content-between align-items-center">
                  <h5 className="prop-price mb-2 fw-bold">9,000,000.00 Php</h5>
                  <button className="heart-btn">
                    <i className="fa fa-regular fa-heart fa-xl" style={{ color: 'secondary' }}></i>
                  </button>
                </div>
                <h3 className="d-block h5 mb-2 text-decoration-none">High-End Lot with a view of Macajalar Bay</h3>
                <p><i className="fa fa-map-marker-alt me-2"></i>Teakwood Hills</p>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2"></i>1,000 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-solid fa-house me-2"></i>$200 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2"></i>5 BRs</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2"></i>3 BathRs</small>
              </div>
            </div>
          </div>
          {/* Featured Prop - 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card property-item rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img src="assets/property-1.jpg" className="card-img-top border border-bottom-dark" style={{ height: '300px' }} alt="Property" />
                <div className="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">BUY</div>
                <div className="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Residential | House and Lot</div>
              </div>
              <div className="p-4 pb-0">
                <div className="price-heart d-flex justify-content-between align-items-center">
                  <h5 className="prop-price mb-2 fw-bold">9,000,000.00 Php</h5>
                  <button className="heart-btn">
                    <i className="fa fa-regular fa-heart fa-xl" style={{ color: 'secondary' }}></i>
                  </button>
                </div>
                <h3 className="d-block h5 mb-2 text-decoration-none">High-End Lot with a view of Macajalar Bay</h3>
                <p><i className="fa fa-map-marker-alt me-2"></i>Teakwood Hills</p>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2"></i>1,000 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-solid fa-house me-2"></i>$200 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2"></i>5 BRs</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2"></i>3 BathRs</small>
              </div>
            </div>
          </div>
          {/* Featured Prop - 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card property-item rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img src="assets/property-1.jpg" className="card-img-top border border-bottom-dark" style={{ height: '300px' }} alt="Property" />
                <div className="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">BUY</div>
                <div className="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Residential | House and Lot</div>
              </div>
              <div className="p-4 pb-0">
                <div className="price-heart d-flex justify-content-between align-items-center">
                  <h5 className="prop-price mb-2 fw-bold">9,000,000.00 Php</h5>
                  <button className="heart-btn">
                    <i className="fa fa-regular fa-heart fa-xl" style={{ color: 'secondary' }}></i>
                  </button>
                </div>
                <h3 className="d-block h5 mb-2 text-decoration-none">High-End Lot with a view of Macajalar Bay</h3>
                <p><i className="fa fa-map-marker-alt me-2"></i>Teakwood Hills</p>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2"></i>1,000 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-solid fa-house me-2"></i>$200 sqm</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2"></i>5 BRs</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2"></i>3 BathRs</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-2">
          <a className="btn py-2 px-5" href="properties.html">Browse More Properties</a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
