'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function SectionLink({ title, href }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
   <Link
      href={href}
      className="group block w-full "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 transition-all duration-300">
        <h2 className={`text-[#e0f11f] font-bold uppercase whitespace-nowrap text-3xl md:text-5xl font-[--bigShoulders-font]`}>{title}</h2>
        <div className="flex-1 h-[3px] bg-gray-300 relative overflow-hidden">
          <motion.div
            className="absolute right-0 top-0 h-[3px] bg-[#e0f11f]"
            animate={{
              width: isHovered ? '0px' : '64px',
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="text-[#e0f11f]" size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  )
}


// <SectionLink title="About" href="/about" />



