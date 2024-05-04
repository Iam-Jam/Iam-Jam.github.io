import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import hero1 from './assets/hero1.jpg'

const SavedSearches = () => {
  return (
    <>
      <div className="card mb-3 prop-card-2">
        <div className="row g-0">
          <div className="col-lg-5">
            <div className="card-body">
              <div className="container properties-scn-2">
                <h2 className="display-5 fw-bold">Welcome!</h2>
                <p className="text-left" style={{ fontSize: '28px' }}>I'm sure we have what it is you are looking for. If not, we'd be more than happy to search for properties that suit your needs.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <img src={hero1} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>

      <section className="container mt-5" id="Properties-Section">
        <div className="container col-lg-7 properties-scn">
          <h2 className="display-5 text-center fw-bold">Our Properties</h2>
          <p className="text-center">Feel free to check our numerous listings.</p>
        </div>
        <div>
          <div className="row" id="sect-properties">
            {/* You can map through your properties data and render property cards here */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SavedSearches;
