import { useEffect } from "react";
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
     
      
    </div>
  );
};

export default Base;