import React from 'react';

const BlogCard = ({ blog }) => {
    const { image, title, description, href } = blog;

    return (
        <div className='blog-card'>
            <img className='blog-card__image' src={image} alt={title} />
            <h3 className='blog-card__title'>{title}</h3>
            <p className='blog-card__description'>{description}</p>
            <button className='blog-card__button' onClick={() => window.open(href, '_blank')}>
                Leer más
            </button>
        </div>
    );
};

export default BlogCard;
