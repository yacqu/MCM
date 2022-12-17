
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  '/images/img-masjid-new-1.jpg',
  '/images/img-masjid-new-2.jpg',
  '/images/img-masjid-new-3.jpg',

];

const TourSection = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img alt='Construction' key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default TourSection;