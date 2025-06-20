import { DM_Sans } from "next/font/google";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const dmSans = DM_Sans({
  variable: "--dmSans-font",
  subsets: ["latin"],
});

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
  { id: 10, icon: <RiJavascriptFill />, title: "TypeScript" },
];


export default function SkillCard(): React.ReactElement {
  return (
   <div className="flex flex-col mt-7 gap-3">
      {cards.map((item) => (
        <div
          className="bg-[#e0f11f] rounded-md flex justify-around items-center py-2 px-1"
          key={item.id}
        >
          <p className={`text-lg font-semibold ${dmSans.className}`}>{item.title}</p>
          <span className="text-xl text-[#a1ad1b]">{item.icon}</span>
          
        </div>
      ))}
    </div>
  )
}








