'use client';

import { motion } from 'framer-motion';
import SectionLink from './SectionLink';
import SkillCard from './SkillCard';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  variable: "--dmSans-font",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="text-center py-20">
      <motion.div
        className="my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionLink title="About" href="/about" />
      </motion.div>

      <div className="flex px-6 py-25 max-w-6xl mx-auto flex-col md:flex-row gap-5">
        <motion.div
          className="basis-1/2 md:pr-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={` ${dmSans.className} text-2xl text-[#818181] text-left leading-10`}>
            My passion lies in the intersection of art and technology, creating
            visually captivating interfaces and elevating overall user digital
            experiences.
          </p>
        </motion.div>

        <motion.div
          className="basis-1/2 md:pl-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={`text-2xl text-[#eeeeee] text-left ${dmSans.className}`}>
            I hold a Bachelor of Technology in Computer Science from the
            esteemed Art University and a Master of Fine Arts in Interactive
            Design. This academic foundation has equipped me with a solid
            understanding of the principles that underpin effective interaction
            design, providing me with the knowledge to create designs that
            seamlessly blend aesthetics and functionality.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SkillCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
