"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "../_components/TextAnimate";
import HeadText from "../_components/HeadText";

// Animation variants
const fadeInUp = {
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

export default function Education() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const velocity = 100;

  return (
    <section className="text-center py-20 px-6 relative max-w-6xl mx-auto">
      <div>
        <HeadText title="Contact" />
      </div>

      <div className="grid md:grid-cols-2 gap-9 max-w-6xl mx-auto px-6 py-25">
        {/* Text Info Block */}
        <motion.div
          className="text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <p className="text-[#f0f0f0] text-3xl mb-4">
            Looking to start a project or you need consultation? Feel free to contact me.
          </p>
          <div>
            <p className="text-[#f0f0f0] text-xl">San Francisco, CA, USA</p>
            <p className="text-[#e0f11f] text-xl">lucas@email.com</p>
            <p className="text-[#e0f11f] text-xl">www.framer.website</p>
          </div>
        </motion.div>

        {/* Form Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={1}
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-[#282828] focus:outline-none focus:ring-2 placeholder:text-gray-400 w-full md:w-1/2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-[#282828] placeholder:text-gray-400 focus:outline-none w-full md:w-1/2"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg bg-[#282828] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e0f11f] text-gray-900 font-bold p-7 rounded-lg hover:bg-gray-400 transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Scroll Velocity Section */}
      <div
        ref={scrollContainerRef}
        className="bottom-4 relative text-9xl z-10 text-white"
      >
        <ScrollVelocity
          texts={["LET'S TALK DREAMS", "CREATIVITY INNOVATION"]}
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
