import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Images
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import dslr from "../assets/dslr.jpg";

// Import Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: headset, title: "HEADSET" },
  { image: earbuds, title: "EARBUDS" },
  { image: dslr, title: "DSLR" },
];

function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // Faster auto-slide (2 seconds)
  };

  // Function to go to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div id="hero" className="w-full h-[600px] overflow-hidden relative">
      <Slider {...settings} ref={sliderRef} className="w-full h-full">
        {slides.map(({ image, title }, index) => (
          <div key={index} className="relative w-full h-[600px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 h-full flex flex-col justify-center items-start px-12 text-white"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-6xl font-extrabold tracking-wide"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-4xl font-bold mt-4"
              >
                Get Discount Up to{" "}
                <span className="text-yellow-400">80%</span>
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 px-6 py-3 bg-green-600 text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                Buy Now
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}

export default Hero;
