import React, { useState } from 'react';
import './assets/Reviews.css';
import reviewsList from './assets/ReviewsList';

const UsersReviews = ({ reviews = reviewsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-container">
      <h2>Lo que nuestros usuarios dicen</h2>
      <div className="review-card-wrapper">
        <div className="review-card">
          <h3>{reviews[currentIndex].name}</h3>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <span
                key={starIndex}
                className={starIndex < reviews[currentIndex].stars ? 'star filled' : 'star'}
              >
                ★
              </span>
            ))}
          </div>
          <p>{reviews[currentIndex].comment}</p>
        </div>
      </div>

      <div className="controls">
        <button className="prev-btn" onClick={prevReview}>⟨</button>
        <button className="next-btn" onClick={nextReview}>⟩</button>
      </div>

      <div className="indicators">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default UsersReviews;