import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  "/images/cof1.jpeg",
  "/images/cof2.jpeg",
  "/images/cof3.jpeg",
];

const Homecontainer = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[120vh] overflow-hidden" aria-label="Welcome Section">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 py-10 min-h-[85vh]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 drop-shadow-md"
        >
          Welcome to Brew Hez ☕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-xl leading-relaxed text-white/90"
        >
          A perfect cup of coffee, made just for you. Discover our range of freshly brewed beans and join our love for coffee.
        </motion.p>
      </div>
    </section>
  );
};

export default Homecontainer;
