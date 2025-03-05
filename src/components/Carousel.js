import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Carousel.css";
import img1 from "../assets/Car1.jpg";
import img2 from "../assets/Car2.jpg";
import img3 from "../assets/Car3.jpg";
import img4 from "../assets/Car4.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="carousel">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Porsche 911 GT3 Touring"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
