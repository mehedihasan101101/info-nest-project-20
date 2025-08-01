import React from 'react';

const NewsCard = ({ eachData }) => {
    const { author } = eachData;
    return (
        <div>
            <img className='rounded-full' src={author.img} alt="" />
        </div>
    );
};

export default NewsCard;