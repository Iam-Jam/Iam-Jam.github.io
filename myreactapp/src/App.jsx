import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PP4/styles.css';
import Navbar from './PP4/Navbar';
import Hero from './PP4/Hero'
import About from './PP4/About';
import Services from './PP4/Services'
import Properties from './PP4/Properties'
import SavedSearches from './PP4/SavedSearches'
import Contact from './PP4/Contact'
import Footer from './PP4/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Properties />
      <SavedSearches />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
