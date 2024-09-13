import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaMailchimp } from 'react-icons/fa';
import FooterIcon from '/datapath-logo.png';
import './assets/Footer.css';

const BasicFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                <img
                    src={FooterIcon}
                    alt="Logo"
                    className="logo-image"
                />
                </div>
                <div className="footer-columns">
                <div className="footer-column">
                    <ul>
                    <li>Nuestro equipo</li>
                    <li>Reseñas</li>
                    <li>Contacto</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                    <li><FaFacebook/> Facebook</li>
                    <li><FaTwitter/> Twitter</li>
                    <li><FaLinkedin/> LinkedIn</li>
                    <li><FaYoutube/> YouTube</li>
                    <li><FaInstagram/> Instagram</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                    <li>Financiación y Precios</li>
                    <li>Admisión de personas con discapacidad</li>
                    <li>Data Scientist</li>
                    <li>Data Analyst</li>
                    <li>Data Engineer</li>
                    </ul>
                </div>
                <div className="footer-column" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button className="footer-button">
                    <Link to="/contact">Contacto</Link>
                    </button>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2024 Datapath – Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default BasicFooter;


