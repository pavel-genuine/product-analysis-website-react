import React from 'react';

import img from '../../images/2.webp'
import Reviews from '../Reviews/Reviews';
import './Features.css'

const Features = () => {
    return (
        <div>
            <div style={{display:'flex', margin:'100px'}}>
            <img src={img} alt="" />

            <div>
                <h1>2022 Toyota Corolla Cross</h1>
                <p>This is the place for Toyota enthusiasts. Keep up-to-date with the latest news on everything Toyota. Explore our series of informative articles, new car reviews and tips on how to get the most out of your Toyota.</p>
                <button className='hover-btn'>Show Demo</button>
            </div>
            </div>
        
        <Reviews></Reviews>
        </div>
    );
};

export default Features;