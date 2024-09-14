import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '/datapath-logo.png';
import './assets/Header.css';

const header_items = [
    {
        name: 'Nuestros cursos',
        link: '/cursos'
    },
    {
        name: 'Carrera',
        link: '/carrera'
    },
    {
        name: 'Inscripción',
        link: '/inscripcion'
    },
    {
        name: 'Sobre nosotros',
        link: '/nosotros'
    },
    {
        name: 'Blog',
        link: '/blog',
    }
];

const MainHeader = () => {
    return (
        <header className='main-header'>
            <div className='header-logo'>
                <Link to='/'>
                    <img src={HeaderLogo} alt='DataPath Logo' />
                </Link>
            </div>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    {header_items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className='header-button'>
                <Link to='/inscripcion'>
                    ¡Inscríbete!
                </Link>
            </button>
        </header>
    )
}

export default MainHeader;