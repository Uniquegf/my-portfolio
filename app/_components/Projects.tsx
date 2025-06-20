'use client';

import Link from 'next/link';
import SectionLink from './SectionLink';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CardItem = {
  photo: string;
  name: string;
  description: string;
  stack: string[];
  visitSite: string;
};

const cards: CardItem[] = [
  {
    photo:
      "/photo-1.png",
    name: "Website Review Check",
    description: "A responsive UI for reviewing websites quickly and cleanly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    visitSite: "https://example.com",
  },
  {
    photo:
      "/photo-1.png",
    name: "Creative Dashboard",
    description: "An admin dashboard built with a modern tech stack.",
    stack: ["React", "Tailwind CSS", "Chart.js"],
    visitSite: "https://example2.com",
  },
];

export default function Projects() :React.ReactElement {
  return (
    <section className="text-center py-20">
      <motion.div
        className="my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionLink title="Projects" href="/projects" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-25">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group flex flex-col lg:flex-row bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Section */}
            <div className="lg:w-2/5 relative overflow-hidden">
              <Image
                src={card.photo}
                alt={card.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 p-6 flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#f0f0f0] mb-2">
                  {card.name}
                </h2>
                <p className={`text-[#f0f0f0] text-sm font-[--dmSans-font]`}>{card.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#e0f11f] px-2 py-1 text-xs rounded-full text-[#1a1a1a] shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={card.visitSite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#e0f11f] text-[#1a1a1a] text-sm px-4 py-2 rounded-md hover:bg-slate-700 transition"
              >
                Visit Site
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
