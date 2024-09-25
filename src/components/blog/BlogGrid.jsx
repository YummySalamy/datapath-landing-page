import React from 'react';
import BlogCard from './BlogCard';

const dummie_blogs = [
    {
        image: 'https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg',
        title: 'Primer Blog',
        description: 'Este es un resumen del primer blog.',
        href: 'https://example.com/primer-blog'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_P94osOyQmImVhWXE_mHwr8YsvVMY4b2PA&s',
        title: 'Segundo Blog',
        description: 'Este es un resumen del segundo blog.',
        href: 'https://example.com/segundo-blog'
    },
    {
        image: 'https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=3840&q=100&fit=clip&auto=format',
        title: 'Tercer Blog',
        description: 'Este es un resumen del tercer blog.',
        href: 'https://example.com/tercer-blog'
    },
    {
        image: 'https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=3840&q=100&fit=clip&auto=format',
        title: 'Tercer Blog',
        description: 'Este es un resumen del tercer blog.',
        href: 'https://example.com/tercer-blog'
    },
    {
        image: 'https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=3840&q=100&fit=clip&auto=format',
        title: 'Tercer Blog',
        description: 'Este es un resumen del tercer blog.',
        href: 'https://example.com/tercer-blog'
    },
    {
        image: 'https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=3840&q=100&fit=clip&auto=format',
        title: 'Tercer Blog',
        description: 'Este es un resumen del tercer blog.',
        href: 'https://example.com/tercer-blog'
    },
];

const BlogGrid = ({ blogs=dummie_blogs }) => {
    return (
        <div className='blog-grid'>
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogGrid;
