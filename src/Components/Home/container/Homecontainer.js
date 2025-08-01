import React from "react";
import { motion } from "framer-motion";

const Homecontainer = () => {
  return (
    <section
      className="bg-primary text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-4"
      aria-label="Welcome Section"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Welcome to Brew Hez ☕
      </motion.h1>
      <p className="text-lg max-w-xl">
        A perfect cup of coffee, made just for you. Discover our range of freshly brewed beans and join our love for coffee.
      </p>
    </section>
  );
};

export default Homecontainer;
