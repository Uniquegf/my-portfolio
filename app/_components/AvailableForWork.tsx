"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// Pulse circle animation variants
const pulseCircle: Variants = {
  animate: {
    scale: [1.5, 1.3, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier easeInOut
    },
  },
};

// Fade-in text animation variants
const fadeInText: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0, 0, 0.58, 1], // cubic-bezier easeOut
    },
  },
};

const AvailableForWork: React.FC = () => {
  return (
    <div className="flex items-center gap-4 p-4">
      {/* Pulsing Circle */}
      <motion.div
        className="w-4 h-4 rounded-full bg-green-500"
        variants={pulseCircle}
        animate="animate"
      />

      {/* Text */}
      <motion.span
        className="text-[#6f6f6f] text-lg font-semibold"
        variants={fadeInText}
        initial="initial"
        animate="animate"
      >
        Available for work
      </motion.span>
    </div>
  );
};

export default AvailableForWork;
