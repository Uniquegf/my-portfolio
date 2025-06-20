'use client';

import { motion } from 'framer-motion';
// import DecayCard from './DecayCard';
import AvailableForWork from './AvailableForWork';

export default function Hero() {
  return (
    <section className="text-center py-20 px-6 max-w-4xl mx-auto">
      <div
        className="my-3"
        
      >
        {/* Top Section */}
        <motion.div
          className="flex flex-col items-center space-y-2 "
         initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
        >
          <span className="text-center">
            <AvailableForWork />
          </span>
          <motion.p initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }} className="text-sm md:text-2xl font-bold leading-13 text-center text-[#6f6f6f] px-4 py-1">
            CRAFTING DIGITAL GOODS SINCE — Y:2017
          </motion.p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className={`text-9xl md:text-[180px] flex flex-col  font-bold leading-tight text-[#e0f11f] font-[--bigShoulders-font]`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 1.9, ease: "easeOut" }}
        >
           <span>UNIQUE</span>  <span>GF</span> 
        </motion.h1>

        {/* Decay Card */}
        

        {/* Description */}
        <motion.div
          className="flex-col"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 2, ease: "easeOut" }} 
        >
          <p className="text-2xl text-gray-600 mt-6 max-w-2xl text-center m-auto">
            I’m Lucas Miller — a senior product designer passionately creating
            digital experiences and solutions for over 10 years
          </p>
        </motion.div>
      </div>
    </section>
  );
}
