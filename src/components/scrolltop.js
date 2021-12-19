import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
        <>
        {isVisible && (
        <div className="back-to-top d-flex align-items-center justify-content-center ">
            <Link to="#" onClick={scrollToTop} class="">⌃</Link>
         </div>
         )}
      </>
  );
}
