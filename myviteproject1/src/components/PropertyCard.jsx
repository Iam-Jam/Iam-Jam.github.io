import { FaHeart, FaMapMarkerAlt, FaRulerCombined, FaHome, FaBed, FaBath } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import PCImg1 from "../assets/Magna 8.jpg";

const PropertyCard = () => {
  return (
    
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card property-item rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <img src={PCImg1} className="card-img-top border border-bottom-dark" style={{ height: '300px' }} alt="Property" />
          <div className="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">BUY</div>
          <div className="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Residential | House and Lot</div>
        </div>
        <div className="p-4 pb-0">
          <div className="price-heart d-flex justify-content-between align-items-center">
            <h5 className="prop-price mb-2 fw-bold">9,000,000.00 Php</h5>
            <button className="heart-btn">
              <FaHeart className="fa-xl fa-regular" style={{ color: 'secondary' }} /> 
            </button>
          </div>
          <h3 className="d-block h5 mb-2 text-decoration-none">High-End Lot with a view of Macajalar Bay</h3>
          <p><FaMapMarkerAlt className="me-2" />Teakwood Hills</p> 
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2"><FaRulerCombined className="me-2" />1,000 sqm</small>
          <small className="flex-fill text-center border-end py-2"><FaHome className="me-2" />200 sqm</small> 
          <small className="flex-fill text-center border-end py-2"><FaBed className="me-2" />5 BRs</small> 
          <small className="flex-fill text-center py-2"><FaBath className="me-2" />3 BathRs</small> 
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
