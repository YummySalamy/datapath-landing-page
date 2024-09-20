import React from 'react';
import TestimonialCard from './TestimonialCard';
import './assets/styles/Testimonials.css';

const TestimonialList = () => {
  const testimonials = [
    {
      name: 'Rosa Isela Cordova Ramos',
      position: 'QA AUTOMATION & QA ANALYST',
      text: '¡Me alegra contaros que he obtenido un nuevo certificado: Ingeniería de Datos con AWS de Smart Data!',
      image: 'https://i.pinimg.com/736x/f8/f7/2e/f8f72e4a47f43c6d4127fede7667f87c.jpg',
      videoUrl: 'https://www.youtube.com/embed/video_id_rosa'
    },
    {
      name: 'Christian Anderson Sanchez',
      position: 'Data Engineer - Analista De Proyectos BI',
      text: 'Me alegra compartir con todos ustedes que he obtenido un nuevo certificado...',
      image: 'https://i.pinimg.com/originals/a0/5a/1d/a05a1d8ce76262357f6ea2a9db72a371.jpg',
      videoUrl: 'https://www.youtube.com/embed/video_id_christian' 
    },
    {
      name: 'Santiago Quiroga Heighes',
      position: 'Cloud Data Engineer En Bluetab IBM',
      text: 'Después de una preparación a profundidad en la ingeniería de datos...',
      image: 'https://i.pinimg.com/originals/97/06/34/9706349268400e539d5cca27d7642405.png',
      videoUrl: 'https://www.youtube.com/embed/video_id_santiago'
    }
  ];

  return (
    <div className="testimonial-list">
      <h2>¿Qué opinan nuestros alumnos?</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            position={testimonial.position}
            text={testimonial.text}
            image={testimonial.image}
            videoUrl={testimonial.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
