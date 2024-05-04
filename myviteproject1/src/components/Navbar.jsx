import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarLogo from "../assets/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Featured from "./Featured";
import PropertyDetails from "./PropertyDetails";
import Favorites from "./Favorites";
import Contact from "./Contact";

const CustomNavbar = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
          <div className="container-fluid">
            <div className="logo w-20">
              <img src={NavbarLogo} alt="Jammie" />
            </div>
            <Navbar.Brand
              className="navbar-brand fw-bold text-light"
              href="#home"
            >
              Jammie Torayno Realty
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto navbar-nav">
                <Nav.Link className="nav-link text-light" as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link text-light" as={Link} to="/About">
                  About
                </Nav.Link>
                <Nav.Link
                  className="nav-link text-light"
                  as={Link}
                  to="/Services"
                >
                  Services
                </Nav.Link>

                <NavDropdown
                  title="Properties"
                  id="basic-nav-dropdown"
                  className="Nav-Dropdown text-light"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/Featured"
                    className="Nav-Dropdown"
                  >
                    Featured
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/PropertyDetails"
                    className="Nav-Dropdown"
                  >
                    Property Details
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Favorites"
                    className="Nav-Dropdown"
                  >
                    Favorites
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  className="nav-link text-light"
                  as={Link}
                  to="/Contact"
                >
                  Contact
                </Nav.Link>
                <li className="nav-item">
                  <a
                    className="nav-link d-lg-none text-warning fw-bold"
                    href="https://calendly.com/jtorayno2022/30min"
                    target="_blank"
                  >
                    Book a Viewing
                  </a>
                </li>
              </Nav>
            </Navbar.Collapse>
            <a
              className="btn btn-outline-dark d-none d-lg-block btn-warning"
              href="https://calendly.com/jtorayno2022/30min"
              target="_blank"
            >
              Book a Viewing
            </a>
          </div>
        </Navbar>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/PropertyDetails" element={<PropertyDetails />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default CustomNavbar;
