import React from 'react'
import '../../App.js';
import { Button } from '../Button';
import './CenterSection.css';


function CenterSection() {
  return (
    <div className='center-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Help Our Masjid</h1>
        <p>We Can't Do this Without Your Contributions</p>
        <div className='hero-btns'>
            <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--L'
            >
                Click Here to Donate
            </Button>
            <Button
                className='btns' 
                buttonStyle='btn--plain'
                buttonSize='btn--L'
            >
                Watch Video <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default CenterSection