import React, { useState } from 'react';
import Grid from '../Grid';
import Card from '../Card';
import threeCourses from './assets/CoursesList';
import './assets/Banner.css';

const Categories = ["Todos", "Data Engineer", "Data Analyst", "Machine Learning"];

const CoursesLogos = ({ courses = threeCourses }) => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    // Filtrar cursos según la categoría seleccionada
    const filteredCourses = selectedCategory === "Todos"
        ? courses
        : courses.filter(course => course.category === selectedCategory);

    const courseLogos = filteredCourses.map((course, index) => {
        return (
            <Card key={index}>
                <img className='course-image' src={course.image} alt={course.title} />
                <h3 className='course-title'>{course.title}</h3>
                <div className='course-options'>
                    {course.course_options.map((option, optionIndex) => (
                        <React.Fragment key={optionIndex}>
                            <span 
                                className='course-options__item' 
                                style={optionIndex === 0 ? { backgroundColor: '#72dbeb' } : {}}
                            >
                                {option}
                            </span>
                            {optionIndex < course.course_options.length - 1 && 
                              <span className='course-options__separator'>|</span>}
                        </React.Fragment>
                    ))}
                </div>
                <p className='course-description'>{course.description}</p>
                <button 
                    className='course-button' 
                    onClick={() => window.open(course.href, '_blank')}
                >
                    Ver más
                </button>
            </Card>
        );
    });

    return (
        <div className='courses-logos'>
            <h1 className='courses-logos__title'>Cursos destacados</h1>

            {/* Menú de categorías */}
            <div className="courses-logos__menu">
                {Categories.map((category, index) => (
                    <button
                        key={index}
                        className={`courses-logos__menu-item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <Grid elements={courseLogos} columns={4} />
        </div>
    );
};

export default CoursesLogos;
