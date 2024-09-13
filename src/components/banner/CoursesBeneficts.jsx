import React from 'react';
import Grid from '../Grid';
import Card from '../Card';
import threeBeneficts from './assets/BenefictsList';
import { FaGrinStars } from "react-icons/fa";
import './assets/Banner.css';

const CoursesBeneficts = ({ courses=threeBeneficts }) => {
    const courseLogos = courses.map((course, index) => {
        return (
            <Card key={index} style={{ height: '200px' }}>
                <img className='course-image' src={course.image} alt={course.title} />
                <h3 className='course-title'>{course.title}</h3>
                <p className='course-description'>{course.description}</p>
            </Card>
        )
    })

    return (
        <div className='courses-beneficts'>
            <span className='courses-beneficts__upper'>Cursos profesionales y avanzados</span>
            <h2 className='courses-beneficts__title'>Un programa pedagógico personalizado y basado en la práctica a través del uso de casos profesionales completos.</h2>
            <Grid elements={courseLogos} columns={4} />
            <button className='courses-beneficts__button'>Empezar ahora <FaGrinStars /></button>
        </div>
    )
}

export default CoursesBeneficts;