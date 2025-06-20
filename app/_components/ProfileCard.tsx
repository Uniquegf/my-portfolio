// components/ProfileCard.tsx
"use client";

import Image from "next/image";
import { FaInstagram, FaDribbble, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className=" min-h-[400px] flex items-center justify-center p-4">
      <div className="relative rounded-xl overflow-hidden">
        {/* Profile Image */}
        <div className="relative z-10">
          <Image
            src="/photo-1.png" // replace with actual profile image path
            alt="Profile"
            width={300}
            height={400}
            className="rounded-t-xl object-cover"
          />

          {/* Signature Overlay */}
          <Image
            src="/signature.svg" // bright yellow signature SVG
            alt="Signature"
            width={100}
            height={100}
            className="absolute top-[-20px] right-[-20px] z-20"
          />
        </div>

        {/* Footer Card */}
        <div className="bg-[#e0f11f] flex  justify-center absolute top-[calc(100%-16px)] left-20 gap-6 py-4 rounded-b-xl z-0">
          <a href="#" className="text-black text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-black text-xl">
            <FaDribbble />
          </a>
          <a href="#" className="text-black text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-black text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
