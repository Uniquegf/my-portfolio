'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./TextAnimate";
import SectionLink from "./SectionLink";

export default function Contact() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const velocity = 100;

  return (
    <section className="text-center py-20 px-6 relative max-w-6xl mx-auto">
      <motion.div
        className="my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionLink title="CONTACT" href="/contact" />
      </motion.div>

      <div className="grid md:grid-cols-2 grid-rows-1 gap-9 max-w-6xl mx-auto px-6 py-25">
        <motion.div
          className="base-1/2 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[#f0f0f0] text-3xl mb-4">
            Looking to start a project or you need consultation? Feel free to
            contact me.
          </p>
          <div>
            <p className="text-[#f0f0f0] text-xl">San Francisco, CA, USA</p>
            <p className="text-[#e0f11f] text-xl">lucas@email.com</p>
            <p className="text-[#e0f11f] text-xl">www.framer.website</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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

      <motion.div
        ref={scrollContainerRef}
        className="bottom-4 relative text-9xl z-10 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
      </motion.div>
    </section>
  );
}
