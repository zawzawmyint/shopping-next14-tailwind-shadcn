"use client";
import React from "react";
import { motion } from "framer-motion";
const MotionDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      whileInView={{
        opacity: 1,
        scale: [1, 0.7, 0.5, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
