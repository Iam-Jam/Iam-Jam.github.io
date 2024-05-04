import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Featured from "./components/Featured";
import PropertyDetails from "./components/PropertyDetails";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/PropertyDetails" element={<PropertyDetails />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;


// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Home from "./components/Home"

// function App() {

//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//     </div>
//   )
// }

// export default App



