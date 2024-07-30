import React, { useState, useEffect } from 'react';
import Blog from '../../components/cards/BlogCard';
import '../blogs/AllBlogs.css';

import Base from "../../components/navbar/Base"



const AllBlogs = () => {
  
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    fetch('/data/blogdata.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (

    <Base>
    
    <div className="all-blogs-container">
       
      <div className="blogs-grid">
        {currentBlogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {indexOfLastBlog < blogs.length && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
      
    </div>
    </Base>
  );
};

export default AllBlogs;