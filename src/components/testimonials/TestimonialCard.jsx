import React, { useState } from 'react';
import './assets/styles/Testimonials.css';

const TestimonialCard = ({ name, position, text, image, videoUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`testimonial-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="testimonial-card-front">
        <p>{text}</p>
        <div className="testimonial-author">
          <img src={image} alt={name} className="testimonial-image" />
          <div>
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-back">
        <iframe 
          src={videoUrl} 
          title="Testimonial video" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="testimonial-video"
        ></iframe>
      </div>
    </div>
  );
};

export default TestimonialCard;
