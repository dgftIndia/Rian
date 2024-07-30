import React from 'react';
import '../cards/BlogCard.css';
import { useNavigate } from 'react-router-dom';

const Blog = ({ id,title, category, timeToRead, description, image, htmlpath }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${id}`, { state: { id, title, category, timeToRead, description, image, htmlpath } });

      };

    return (
      <div className="blog-card">
        <img src={image} alt={title} className="blog-image" />
        <div className="blog-content">
          <h3>{title}</h3>
          <p className="blog-category">{category} - {timeToRead}</p>
          <p>{description}</p>
          <button onClick={handleReadMore} className="read-more-button">Read More</button>
        </div>
      </div>
    );
  };
  
  export default Blog;
