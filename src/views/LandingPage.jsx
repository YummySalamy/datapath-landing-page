import React from 'react';
import MainHeader from '../components/header/MainHeader';
import BasicHero from '../components/hero/BasicHero';
import VideoBanner from '../components/banner/VideoBanner';
import BasicFooter from '../components/footer/BasicFooter';
import CoursesLogos from '../components/banner/CoursesLogos';
import CoursesBeneficts from '../components/banner/CoursesBeneficts';
import LegacyBanner from '../components/banner/LegacyBanner';
import CompanyLogos from '../components/banner/CompanyLogos';
import TechIcons from '../components/miscelaneous/TechIcons';
import CompanyHighlight from '../components/miscelaneous/CompanyHighlight';
import UsersReviews from '../components/reviews/UsersReviews';
import TestimonialList from '../components/testimonials/TestimonialsList';
import ApplyNow from '../components/miscelaneous/ApplyNow';
import B2BServices from '../components/banner/B2BServices';
import WhatsappContact from '../components/floating-buttons/WhatsappContact';
import './assets/Views.css';

const hero_data = {
    title: 'Empieza a darle forma a tu futuro con DataPath',
    description: 'Incrementa tus habilidades como Data Analyst, Data Engineer, Cloud engineer o AI Engineer y obtén las mejores certificaciones',
    buttonText: 'Explora nuestros cursos',
    buttonLink: '/cursos'
}

const video_data = {
    iframeSrc: 'https://www.youtube.com/embed/EZInRScZ-QM?si=2XcoM43msp7Ep8aW'
}

const LandingPage = () => {
    
    return (
        <div className='landing-page'>
            <WhatsappContact />
            <MainHeader />
            <div style={{ display: 'flex',}}>
                <BasicHero 
                    title={hero_data.title} 
                    description={hero_data.description} 
                    buttonText={hero_data.buttonText} 
                    buttonLink={hero_data.buttonLink}
                />
                {/* <VideoBanner iframeSrc={video_data.iframeSrc} /> */}
            </div>
            <TechIcons />
            <CoursesLogos />
            <CompanyLogos />
            <CoursesBeneficts />
            <CompanyHighlight />
            <B2BServices />
            {/* <LegacyBanner /> */}
            {/* <UsersReviews /> */}
            <TestimonialList />
            <ApplyNow />
            <BasicFooter />
        </div>
    )
}

export default LandingPage;