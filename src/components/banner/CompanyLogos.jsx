import React from 'react';

import GoogleLogo from './assets/images/google-icon.png';
import MercadoLibreLogo from './assets/images/mercadolibre-logo.svg';
import GlobantLogo from './assets/images/globant-icon.png';
import SantanderLogo from './assets/images/scotiabank-logo.png';
import PayPalLogo from './assets/images/paypal-icon.png';
import RappiLogo from './assets/images/rappi-logo.svg';
import './assets/Banner.css';

const CompanyLogos = () => {
  const companies = [
    { name: 'Google', logo: GoogleLogo},
    { name: 'Mercado Libre', logo: MercadoLibreLogo },
    { name: 'Globant', logo: GlobantLogo },
    { name: 'Santander', logo: SantanderLogo },
    { name: 'PayPal', logo: PayPalLogo },
    { name: 'Rappi', logo: RappiLogo }
  ];

  return (
    <div className="company-logos-container">
      <h3>Nuestro talento ya forma parte de las compañías que están construyendo el futuro.</h3>
      <div className="company-logos-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-logo">
            <img src={company.logo} alt={company.name} style={company.name === 'Santander' ? { scale: '1.5' } : {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
