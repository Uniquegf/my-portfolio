'use client';
import Link from "next/link";
import React from "react";
//import ConnectBtn from "./ConnectBtn";
import { Big_Shoulders_Display, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--dmSans-font",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders_Display({
  variable: "--bigShoulders-font",
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  title: string;
  link: string;
}

const Navs: Props[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Education", link: "/education" },
  { title: "Experience", link: "/experience" },
  { title: "Projects", link: "/project" },
  { title: "Contact", link: "/contact" },
];


export default function Navbar(): React.ReactElement {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <nav className="flex  justify-between items-center px-6 py-9 max-w-7xl mx-auto bg-[#121212]/70 mt-4 top-0 sticky z-30 rounded-2xl backdrop-blur-md shadow-lg">
      <button className="block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-amber-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(prev => !prev)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div className={`text-xl font-semibold text-[#f0f0f0] ${bigShoulders.className}`}>GF</div>
        
      <div className="text-[#f0f0f0] bg-[#1a1a1a] hover:text-[#e0f11f] px-4 py-3.5  transition-colors duration-300 rounded-2xl"> 
        <Link href="/contact" className={`${dmSans} `}>
          Let&apos;s Talk
         </Link>
      </div>
     
      {/* mobile bar */}
      <div className={` absolute left-10 top-20 flex flex-col py-5 bg-[#121212]  px-3 gap-3 rounded-2xl text-sm text-[#f0f0f0] transition-transform duration-600 ease-in-out delay-200 ${bigShoulders.className}  ${open ? "flex" : "hidden"}`}>
        {Navs.map(nav => (
          <Link key={nav.title} href={nav.link} className={`font-[--bigShoulders-font]  hover:text-[#e0f11f] text-3xl transition-colors duration-300  `}>
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>    
  )
}

