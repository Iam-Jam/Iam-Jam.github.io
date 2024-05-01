import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
      <div className="container-fluid">
        <div className="logo">
          <img src="assets/logo.png" alt="Jammie" />
        </div>
        <a className="navbar-brand fw-bold text-light" href="pp3-new.html">Jammie Torayno Realty</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        {/* Navigation Bar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="pp3-new.html">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="services.html">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="properties.html">Properties</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="contact.html">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-lg-none text-warning fw-bold"
                href="https://calendly.com/jtorayno2022/30min" target="_blank">Book a Viewing</a>
            </li>
          </ul>
          <a className="btn btn-outline-dark d-none d-lg-block btn-warning"
            href="https://calendly.com/jtorayno2022/30min" target="_blank">Book a Viewing</a>
          {/* Favorites Button */}
          <button type="button" id="btn-show-favorites" className="btn position-relative fave-btn" data-bs-toggle="modal"
            data-bs-target="#modal-favorites">
            <i className="fa fa-regular fa-heart fa-xl" style={{ color: 'secondary' }}></i>
            <span id="spn-badge" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
