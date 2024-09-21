import React from 'react';
import './assets/Miscelaneous.css';

const CompanyHighlight = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-left">
        <h2>Nuestra historia</h2>
        <p>
        Datapath se fundó en 2020, desde entonces, tenemos más de <span className="highlight-free">25,000 graduados en más de 10 países de Latinoamerica y España </span>que han comenzado un nuevo futuro con nosotros.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="highlight-right">
        <div className="stat-item">
          <span className="stat-number">+4</span>
          <span className="stat-label">Años de experiencia.</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">+15,000</span>
          <span className="stat-label">Horas dictadas.</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">+50</span>
          <span className="stat-label">Cursos de formación.</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">+4.6</span>
          <span className="stat-label">De valoración por parte de nuestros estudiantes.</span>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlight;
