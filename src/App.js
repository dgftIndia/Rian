// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllBlogs from './pages/blogs/AllBlogs';
import BlogDetail from './pages/blogs/BlogDetail';
import BookADemo from './pages/bookADemo';
import './index.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
         <Route path="/blog/:id" element={<BlogDetail />} />
        {/* <Route path="/vendor-registration" element={<div>Vendor Registration Page</div>} /> */}
        {/* <Route path="/login" element={<div>Login Page</div>} /> */}
        {/* <Route path="/press-release" element={<div>Press Release Page</div>} />
        <Route path="/events" element={<div>Events Page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
};



export default App;