import React from 'react';
import ClaroLogo from './assets/images/claro-logo.png';
import GrupoBimbo from './assets/images/grupo-bimbo-logo.svg';
import ScotiaBankLogo from './assets/images/scotiabank-logo.png';
import EverisLogo from './assets/images/everis-logo.png';
import './assets/Banner.css';

const LegacyBanner = () => {
  return (
    <section className="legacy-banner">
      <h2>LEGADO</h2>
      <h1>DataPath se fundó en 2020.</h1>
      <p>Desde entonces, más de 10,000 graduados han comenzado un nuevo futuro con nosotros.</p>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <div className="circle-chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle"
                  strokeDasharray="85, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>
          <h3>85%</h3>
          <p>de tasa de empleabilidad.</p>
          <p>El 85% de nuestros egresados han conseguido un empleo en el sector de los datos tras completar nuestro programa de formación continua.</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <div className="stars">
              ★★★★★
            </div>
          </div>
          <h3>4,93/5</h3>
          <p>Los mejores de LATAM</p>
          <p>Con más de 240 reseñas en SwitchUp y una media de casi 5 estrellas, DataPath ofrece el mejor bootcamp de Europa.</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <div className="badge-icon">
              ✓
            </div>
          </div>
          <h3>2</h3>
          <p>socios académicos</p>
          <p>Nuestros cursos están amparados por universidades de primer plano a nivel europeo.</p>
        </div>
      </div>

      <div className="partners">
        <img src={ClaroLogo} alt="Claro" />
        <img src={GrupoBimbo} alt="Grupo Bimbo" />
        <img src={ScotiaBankLogo} alt="ScotiaBank" style={{scale: '2.1', marginInline: '20px'}} />
        <img src={EverisLogo} alt="Everis" />
      </div>
    </section>
  );
};

export default LegacyBanner;
