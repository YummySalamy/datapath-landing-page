import React from "react";
import WhatsappIcon from "./assets/icons8-whatsapp.svg";
import './assets/FloatingButtons.css';

const WhatsappContact = () => {

    const handleClick = () => {
        window.open("https://wa.me/51946561058"+ "?text=Hola%20DataPath%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20cursos%20de%20Data%20Science%20y%20Machine%20Learning", "_blank");
    }

    return (
        <div className="whatsapp-contact">
            <button onClick={handleClick} className="whatsapp-contact-button">
                <img src={WhatsappIcon} alt="Whatsapp Icon" />
            </button>
        </div>
    );
};

export default WhatsappContact;