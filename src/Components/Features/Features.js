import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../images/2.webp'
import Reviews from '../Reviews/Reviews';
import './Features.css'

const Features = () => {
    return (
        <div>
            <div className='features'>
            <img src={img} alt="" />

            <div style={{margin:'0 20px'}}>
                <h1>2022 Toyota Corolla Cross</h1>
                <p>This is the place for Toyota enthusiasts. Keep up-to-date with the latest news on everything Toyota. Explore our series of informative articles, new car reviews and tips on how to get the most out of your Toyota.</p>
              <Link to='/dashboard'> <button className='hover-btn'>Show Demo</button> </Link>
              </div>
            </div>
        
        <Reviews></Reviews>
        </div>
    );
};

export default Features;