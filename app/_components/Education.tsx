'use client';

import { motion } from "framer-motion";
import SectionLink from './SectionLink';

export default function Education() {
  const educationItems = [
    {
      title: "Bachelor of Fine Arts",
      institution: "University of Design",
      period: "2015 — 2019",
      description:
        "Led the redesign of the flagship mobile application, resulting in an increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
    },
    {
      title: "Senior UX/UI Designer",
      institution: "SuperCo",
      period: "2019 — Present",
      description:
        "Led the redesign of the flagship mobile application, resulting in an increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
    },
    {
      title: "Senior UX/UI Designer",
      institution: "SuperCo",
      period: "2019 — Present",
      description:
        "Led the redesign of the flagship mobile application, resulting in an increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
    },
    {
      title: "Senior UX/UI Designer",
      institution: "SuperCo",
      period: "2019 — Present",
      description:
        "Led the redesign of the flagship mobile application, resulting in an increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
    },
  ];

  return (
    <section className="text-center py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        className="my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionLink title="EDUCATION" href="/education" />
      </motion.div>

      <div className="grid md:grid-cols-2 grid-rows-1 gap-4 max-w-6xl mx-auto px-6 py-25">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-left text-[#f0f0f0]">{item.title}</h3>
            <h5 className="text-sm font-semibold mb-2 text-left text-[#f0f0f0]">{item.institution}</h5>
            <h5 className="text-sm font-semibold mb-2 text-left text-[#f0f0f0]">{item.period}</h5>
            <div className="my-5">
              <p className="text-[#f0f0f0] text-left">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
