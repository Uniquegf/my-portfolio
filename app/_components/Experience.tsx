'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./TextAnimate";
import SectionLink from './SectionLink';
import Stats from './Stats';

export default function Experiences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const velocity = 100;

  // Sample data to map for consistency
  const experienceData = Array(4).fill({
    title: "Senior UX/UI Designer",
    company: "SuperCo",
    period: "2019 — Present",
    description:
      "Led the redesign of the flagship mobile application, resulting in an increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
  });

  return (
    <section className="text-center py-20 px-6">
      <motion.div
        className="my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionLink title="EXPERIENCES" href="/experience" />
      </motion.div>

      <div className="grid md:grid-cols-2 grid-rows-1 gap-4 max-w-6xl mx-auto px-6 py-25">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-left text-[#f0f0f0]">{exp.title}</h3>
            <h5 className="text-sm font-semibold mb-2 text-left text-[#f0f0f0]">{exp.company}</h5>
            <h5 className="text-sm font-semibold mb-2 text-left text-[#f0f0f0]">{exp.period}</h5>
            <div className="my-5">
              <p className=" text-left text-[#f0f0f0]">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>

      <div
        ref={scrollContainerRef}
        className="bottom-0 relative text-9xl text-white"
        style={{ overflow: "hidden" }}
      >
        {/* Fading side borders */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-16"
          style={{
            background: "linear-gradient(to right, rgba(8,0,0,0.45), transparent)",
            zIndex: 10,
          }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-16"
          style={{
            background: "linear-gradient(to left, rgba(8,0,0,0.45), transparent)",
            zIndex: 10,
          }}
        />
        <ScrollVelocity
          texts={['UNIQUE GF EXCELLENCE', 'CREATIVITY INNOVATION']}
          velocity={velocity}
          className="custom-scroll-text"
          scrollContainerRef={scrollContainerRef}
          damping={50}
          stiffness={400}
          numCopies={6}
          velocityMapping={{ input: [0, 1000], output: [0, 5] }}
          parallaxClassName="py-8"
          scrollerClassName="px-4"
        />
      </div>
    </section>
  );
}
