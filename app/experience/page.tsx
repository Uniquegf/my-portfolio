"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import HeadText from "../_components/HeadText";
import Stats from "../_components/Stats";
import ScrollVelocity from "../_components/TextAnimate";

const experienceCards = [
  {
    title: "Senior UX/UI Designer",
    company: "SuperCo",
    period: "2019 — Present",
    description:
      "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
  },
  {
    title: "Frontend Developer",
    company: "TechNova",
    period: "2017 — 2019",
    description:
      "Developed and maintained responsive web applications using React and TypeScript. Collaborated with designers to create seamless user experiences and improved site performance by 30%.",
  },
  {
    title: "UI Designer",
    company: "PixelWorks",
    period: "2015 — 2017",
    description:
      "Designed user interfaces for SaaS products, focusing on usability and accessibility. Conducted user research and prototyping, resulting in a 20% increase in customer satisfaction.",
  },
  {
    title: "Junior Web Designer",
    company: "Creative Minds",
    period: "2013 — 2015",
    description:
      "Assisted in designing and launching marketing websites. Supported senior designers in creating wireframes and mockups, and contributed to successful project deliveries.",
  },
];

// Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Experiences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const velocity = 100;

  return (
    <section className="text-center py-20 px-6">
      <div>
        <HeadText title="Experience" />
      </div>

      <div className="grid md:grid-cols-2 grid-rows-1 gap-4 max-w-6xl mx-auto px-6 py-25">
        {experienceCards.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#e0f11f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2 text-left">{exp.title}</h3>
            <h5 className="text-sm font-semibold mb-2 text-left">{exp.company}</h5>
            <h5 className="text-sm font-semibold mb-2 text-left">{exp.period}</h5>
            <div className="my-5">
              <p className="text-gray-700 text-left">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="my-5">
        <Stats />
      </div>

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
          texts={["UNIQUE GF EXCELLENCE", "CREATIVITY INNOVATION"]}
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
