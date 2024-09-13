import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Hero.css';

const BasicHero = ({ title, description, buttonText, buttonLink }) => {
    return (
        <div className='basic-hero'>
            <h1>Empieza a darle forma a tu futuro con <span className='basic-hero__highlight'>DataPath</span></h1>
            <p>{description}</p>
            <Link to={buttonLink} className='hero-button-link'>
                <button className='hero-button'>
                    {buttonText}
                </button>
            </Link>
        </div>
    )
}

export default BasicHero;