import React from 'react';
import './AllBlogs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const blogsData = [
  {
    href: "./Blogs/blog How Podcast Localization Can Skyrocket Your Listener Base.html",
    title: "How Podcast Localization Can Skyrocket Your Listener Base",
    content: "Did you know? Podcasting is exploding, with millions of episodes across countless genres available to listeners worldwide. In the U.S. alone, 144 million people have listened to a podcast, and over 75% of the population is familiar with the term \"podcasting.\" With stats like this, podcast creators must optimize their reach and widen their global opportunity through localization.",
    date: "June 21, 2024"
  },
  {
    href: "./Blogs/blog Why you need AI-based Localization for YouTube Channel.html",
    title: "Why you need AI-based localization for your YouTube channel.",
    content: "AI-driven localization makes podcasts more accessible globally by capturing nuances and cultural contexts that traditional methods often miss. AI technologies like natural language processing (NLP) and machine learning enable more accurate translations, resonating better with target audiences.",
    date: "May 17, 2024"
  },
  {
    href: "./Blogs/blog A 4-step guide for the Content Localization Process.html",
    title: "A 4-step guide for the Content Localization Process",
    content: "When any business is thinking of going beyond its native place, communication is one of the obstacles they face. While most businesses tend to use English as a default language, there's no denying that it works but it does not have the same impact that a native language can have.",
    date: "April 3, 2024"
  },
  {
    href: "./Blogs/blog When and How to deploy Content Localization.html",
    title: "When and How to deploy Content Localization?",
    content: "Content localization is crucial for organizations to enter new markets given the expanding size in which they operate. It facilitates the development of a relationship with your audience, which in turn promotes higher conversion rates and levels of brand loyalty. A well-planned localization strategy can aid in the success of a company's expansion.",
    date: "March 15, 2024"
  },
  {
    href: "./Blogs/blog Podcasts for Business Promotion.html",
    title: "Podcasts for Business Promotion",
    content: "Language is the backbone of human existence. Ever since the human race has evolved, the ability to communicate effectively and with multiple dimensions sets us apart from other animals on this planet. At Rian, we understand the art and science of this backbone – “Language” very well.",
    date: "February 10, 2024"
  },
  {
    href: "./Blogs/blog Unlock Global Growth through CRM Localization.html",
    title: "Unlock Global Growth through CRM Localization",
    content: "Customer Service Management- includes all the activities and steps that a company takes to manage its interactions with its current and potential customers. It is a powerful tool that helps businesses to build strong relationships with their customers, create loyalty and ensure customer retention.",
    date: "January 7, 2024"
  }
];

const AllBlogs = () => {
  return (
    
    <section className="blog-section">
      <Navbar />
      <div className="blogs-container">
        <h1 className="blog-Title">Blogs</h1>
        <div className="blogs">
          {blogsData.map((blog, index) => (
            <a key={index} href={blog.href} className="blog">
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p className="date">{blog.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AllBlogs;