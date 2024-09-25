import React from 'react';
import './assets/Banner.css';

const companies = [
    { name: 'ProCredit Bank', logo: 'path_to_logo_1' },
    { name: 'easysoft', logo: 'path_to_logo_2' },
    { name: 'Colbun', logo: 'path_to_logo_3' },
    { name: 'Banco Santa Cruz', logo: 'path_to_logo_4' },
    { name: 'Alpayana', logo: 'path_to_logo_5' }
];

const B2BServices = () => {
    return (
        <div className='b2b-services'>
            <div className='b2b-services__separator'>
                <div className='b2b-services__header'>
                    <h2 className='b2b-services__title'>
                        También ofrecemos para su empresa <br />
                        <span className='b2b-services__title-highlight'>
                            Servicios B2B de capacitaciones
                        </span>
                    </h2>
                    <p className='b2b-services__description'>
                        En Smart Data, también potenciamos equipos a través de soluciones in house,
                        capacitaciones para su empresa con los mejores profesionales.
                    </p>
                    <button className='b2b-services__button'>Contáctese con nosotros</button>
                </div>
                <div className='b2b-services__content'>
                    <img
                        className='b2b-services__image'
                        src='https://images.inc.com/uploaded_files/image/1920x1080/getty_951514270_400405.jpg'
                        alt='Servicios de capacitaciones'
                    />
                </div>
            </div>
            <div className='b2b-services__trusted'>
                <h3 className='b2b-services__trusted-title'>
                    Empresas que confiaron en nuestros servicios
                </h3>
                <div className='b2b-services__logos'>
                    {companies.map((company, index) => (
                        <div key={index} className='b2b-services__logo-item'>
                            <img src={company.logo} alt={company.name} className='b2b-services__logo' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default B2BServices;
