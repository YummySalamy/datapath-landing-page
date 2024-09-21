import React from 'react';
import './assets/Banner.css';

const VideoBanner = ({ iframeSrc }) => {
    return (
        <div className='video-banner'>
            <iframe 
                width="70%"
                height="70%"
                src={iframeSrc}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBanner;