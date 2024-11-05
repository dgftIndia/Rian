import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllBlogs from './pages/blogs/AllBlogs';
import BlogDetail from './pages/blogs/BlogDetail';
import BookADemo from './pages/bookADemo';
import './index.css';
import Footer from './components/footer/Footer';
import PressRelease from './pages/pressRelease';
import CommunityPage from './pages/communityPage';
import './i18n';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/press-release" element={<PressRelease />} /> {/* Fixed route path */}
        <Route path="/communityPage" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;