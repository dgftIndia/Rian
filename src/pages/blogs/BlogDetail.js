import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Base from "../../components/navbar/Base";


const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (!location.state || location.state.id === undefined) {
      navigate("/");
    } else {
      const { id, htmlpath } = location.state;
      console.log(`Blog ID: ${id}, HTML Path: ${htmlpath}`);
      setBlogData(location.state);

      // Fetch the HTML content from the given path
      fetch(htmlpath)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((html) => {
          console.log('Fetched HTML:', html);
          setHtmlContent(html);
        })
        .catch((error) => console.error('Error fetching HTML:', error));
    }
  }, [location.state, navigate]);

  if (!blogData) {
    return <p>Loading...</p>; // Or a loading indicator
  }

  return (
    <Base>
    
    <div className='blogDetails'>
      
      {htmlContent && (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}
    </div>
    </Base>
  );
}

export default BlogDetail;
