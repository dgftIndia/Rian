import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx'; // Import your Navbar component
import Home from './pages/Home';
import AllBlogs from './pages/blogs/AllBlogs';
import BlogDetail from './pages/blogs/BlogDetail';
import BookADemo from './pages/bookADemo';
import './index.css';
import Footer from './components/footer/Footer';
import PressRelease from './pages/pressRelease';
import CommunityPage from './pages/community/communityPage.jsx';
import './i18n';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Include the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/communityPage" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
