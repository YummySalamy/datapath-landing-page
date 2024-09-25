import React from 'react';
import MainHeader from '../components/header/MainHeader';
import BasicFooter from '../components/footer/BasicFooter';
import BlogIndex from '../components/blog/BlogIndex';
import ApplyNow from '../components/miscelaneous/ApplyNow';
import './assets/Views.css';

const Blog = () => {
    
    return (
        <div className='landing-page'>
            <MainHeader />
            <BlogIndex />
            <ApplyNow />
            <BasicFooter />
        </div>
    )
}

export default Blog;