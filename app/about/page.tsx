'use client';

import { motion } from "framer-motion";
import HeadText from "../_components/HeadText";
import ProfileCard from "../_components/ProfileCard";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import ConnectBtn from "../_components/ConnectBtn";

type SkillCardProps = {
  id: number;
  icon?: React.ReactNode;
  title: string;
};

const cards: SkillCardProps[] = [
  { id: 1, icon: <FiFigma />, title: "Figma" },
  { id: 2, icon: <FaReact />, title: "React" },
  { id: 3, icon: <SiMongodb />, title: "MongoDB" },
  { id: 4, icon: <FaNodeJs />, title: "Node.js" },
  { id: 5, icon: <SiExpress />, title: "Express" },
  { id: 6, icon: <RiNextjsFill />, title: "Next.js" },
  { id: 7, icon: <SiTailwindcss />, title: "Tailwind CSS" },
  { id: 8, icon: <FaCss3Alt />, title: "CSS3" },
  { id: 9, icon: <RiJavascriptFill />, title: "JavaScript" },
];

export default function About(): React.ReactElement {
  return (
    <section className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeadText title="About" />
      </motion.div>

      {/* About Me */}
      <motion.div
        className="flex flex-col md:flex-row items-center space-y-2 my-3 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProfileCard />
        <div className="flex px-6 py-25 max-w-4xl mx-auto flex-grow lg:flex-col sm:flex-col md:flex-row gap-5 basis-[50%]">
          <div className="basis-1/2 md:pr-8">
            <p className="text-2xl text-[#818181] text-left leading-10">
              My passion lies in the intersection of art and technology,
              creating visually captivating interfaces and elevating overall
              user digital experiences.
            </p>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl text-[#eeeeee] text-left">
              I hold a Bachelor of Technology in Computer Science from the
              esteemed Art University and a Master of Fine Arts in Interactive
              Design. This academic foundation has equipped me with a solid
              understanding of the principles that underpin effective
              interaction design, providing me with the knowledge to create
              designs that seamlessly blend aesthetics and functionality.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 mt-7 gap-3 px-6 py-25 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#e0f11f] rounded-md flex justify-around items-center py-10 px-6"
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <span className="text-xl text-[#a1ad1b]">{item.icon}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="flex flex-col gap-7 text-center max-w-3xl mx-auto px-6 py-25"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="base-1/2">
          <p className="text-[#f0f0f0] text-3xl mb-4">
            Looking to start a project or you need consultation? Feel free to
            contact me.
          </p>
          <div>
            <p className="text-[#f0f0f0] text-xl">San Francisco, CA, USA</p>
            <p className="text-[#e0f11f] text-xl">lucas@email.com</p>
            <p className="text-[#e0f11f] text-xl">www.framer.website</p>
          </div>
        </div>
        <ConnectBtn />
      </motion.div>
    </section>
  );
}
