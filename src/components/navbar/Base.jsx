import { useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "./Navbar";

const Base = ({ title = "Rian", children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title; // Set the document title dynamically
  }, [title]);

  return (
    <div>
      <Navbar />
      
        {children}
     
      <Footer />
    </div>
  );
};

export default Base;