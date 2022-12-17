import React from 'react'
import '../../App.js';
import './CardSection.css';
import CardSectionItem from './CardSectionItem';

function CardSection () {
    return(
        <div className='cards'>
            <h1>Services Offered Here At MCM</h1>
            <div className='card-section-container'>
                <div className='card-section-wrapper'>
                    <ul className='cards__items'>
                        <CardSectionItem
                            src='/images/img-quran-program.jpg'
                            text='Check Out Our Quran Program for the Youth'
                            label='Youth Quran Program'
                            path='/services'
                        />
                        <CardSectionItem
                            src='/images/img-masjid-construction-1.jpg'
                            text='Take A Tour of MCM Phoenix'
                            label='Masjid Facilities'
                            path='/services'
                        />
                        <CardSectionItem
                            src='/images/img-community-services.jpg'
                            text='Explore The Services Offered To Our Community'
                            label='Community Programs'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardSection;