import "bootstrap/dist/css/bootstrap.min.css";
import PropertyCard from "./PropertyCard";
import "../components/Featured.css"
const Featured = () => {
  return (
    <div className="container Properties-Section">
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
  );
};

export default Featured;
