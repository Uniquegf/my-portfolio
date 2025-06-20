"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnView;
