import React from 'react';
import MainHeader from '../components/header/MainHeader';
import BasicFooter from '../components/footer/BasicFooter';
import ApplyNow from '../components/miscelaneous/ApplyNow';
import './assets/Views.css';

const Blog = () => {
    
    return (
        <div className='landing-page'>
            <MainHeader />
            <ApplyNow />
            <BasicFooter />
        </div>
    )
}

export default Blog;