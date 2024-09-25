import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Hero.css';

const BasicHero = ({ title, description, buttonText, buttonLink }) => {
    return (
        <div className='basic-hero'>
            <div className='basic-hero__content'>
                <h1 className='basic-hero__highlight'>Inicia tu carrera en Data e Inteligencia Artificial</h1>
                {/* <span className='basic-hero__highlight'>DataPath</span> */}
                <p>{description}</p>
                <div className='basic-hero__buttons'>
                    <Link to={buttonLink} className='hero-button-link'>
                        <button className='hero-button green__highlight'>
                            {buttonText}
                        </button>
                    </Link>
                    <Link to='/inscripcion' className='hero-button-link'>
                        <button className='hero-button'>
                            ¡Inscríbete!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BasicHero;