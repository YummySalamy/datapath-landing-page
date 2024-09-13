import React from 'react';
import Grid from '../Grid';
import Card from '../Card';
import threeCourses from './assets/CoursesList';
import './assets/Banner.css';

const CoursesLogos = ({ courses=threeCourses }) => {
    const courseLogos = courses.map((course, index) => {
        return (
            <Card key={index}>
                <img className='course-image' src={course.image} alt={course.title} />
                <h3 className='course-title'>{course.title}</h3>
                <div className='course-options'>
                    { course.course_options.map((option, index) => (
                        <>
                        <span key={index} className='course-options__item' style={index === 0 ? { backgroundColor: '#72dbeb'} : {}}>{option}</span>
                        {index < course.course_options.length - 1 && <span className='course-options__separator'>|</span>}
                        </>
                    ))}
                </div>
                <p className='course-description'>{course.description}</p>
                <button className='course-button' onClick={() => {
                    window.open(course.href, '_blank');
                }}>Ver más</button>
            </Card>
        )
    })

    return (
        <div className='courses-logos'>
            <h1 className='courses-logos__title'>Cursos destacados</h1>
            <Grid elements={courseLogos} columns={4} />
        </div>
    )
}

export default CoursesLogos;