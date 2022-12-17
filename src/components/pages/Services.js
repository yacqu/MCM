import React from "react";
import '../../App.css';
import ServiceSection from "../sections/servicescontent/ServiceSection";
import TourSection from "../sections/TourSection";
import '../sections/TourSection.css'

function Services() {
  return (
    <>
    <div className="services-page">
      <h1 className="services">Services</h1>
      <div className="slideshow-container">
        <TourSection />        
      </div>
      <ServiceSection />
    </div>
      
    </>
  )
}

export default Services