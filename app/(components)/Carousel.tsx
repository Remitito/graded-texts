"use client";

import React, { useRef, useEffect } from "react";

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 10; // You can adjust this value for different scrolling speeds

    const startScrolling = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollSpeed;

        // If we have scrolled past the first set of children, reset scrollLeft to avoid the jump
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      requestAnimationFrame(startScrolling);
    };

    // Start the scrolling loop
    const animationFrame = requestAnimationFrame(startScrolling);

    // Clean up the animation frame on component unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-4/5 w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        style={{ willChange: "scroll-position" }}
      >
        {children}
        {children}{" "}
        {/* Duplicate the children to create the seamless looping effect */}
      </div>
    </div>
  );
};

export default Carousel;
