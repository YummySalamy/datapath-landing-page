import React from 'react';
import BlogGrid from './BlogGrid';
import './assets/Blog.css';

const BlogIndex = ({ blogs }) => {
    return (
        <div className='blog-index'>
            <h1 className='blog-index__title'>Últimas publicaciones</h1>
            <BlogGrid blogs={blogs} />
        </div>
    );
};

export default BlogIndex;
