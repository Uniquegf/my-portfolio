'use client';

import { useRef } from 'react';
import HeadText from '../_components/HeadText';
import ScrollVelocity from '../_components/TextAnimate';




export default function Education() {
     const scrollContainerRef = useRef<HTMLDivElement>(null);
     const velocity = 100; // or any desired number

  return (
    
     <section className="text-center py-20 px-6  max-w-6xl mx-auto ">
    <div className="my-3 px-6 max-w-6xl mx-auto">
        <HeadText title="Education"/>
    </div>

    <div className="grid md:grid-cols-2 grid-rows-1 gap-4  max-w-6xl mx-auto px-6 py-25  ">
        <div className="bg-[#e0f11f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <h3 className="text-xl font-semibold mb-2 text-left">Bachelor of Fine Arts</h3>
            <h5 className="text-sm font-semibold mb-2 text-left">University of Design</h5>
            <h5 className="text-sm font-semibold mb-2 text-left">2015 — 2019</h5>
            <div className="my-5">
                <p className="text-gray-700 text-left">Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.

                </p>
            </div>
            
        </div>
    
        <div className="bg-[#e0f11f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-left">Senior UX/UI Designer</h3>
            <h5 className="text-sm font-semibold mb-2 text-left">SuperCo</h5>
            <h5 className="text-sm font-semibold mb-2 text-left">2019 — Present</h5>
            <div className="my-5">
                <p className="text-gray-700 text-left">Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.

                </p>
            </div>
            
        </div>
    
        <div className="bg-[#e0f11f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-left">Senior UX/UI Designer</h3>
            <h5 className="text-sm font-semibold mb-2 text-left">SuperCo</h5>
            <h5 className="text-sm font-semibold mb-2 text-left">2019 — Present</h5>
            <div className="my-5">
                <p className="text-gray-700 text-left">Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.

                </p>
            </div>
            
        </div>
    
        <div className="bg-[#e0f11f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-left">Senior UX/UI Designer</h3>
            <h5 className="text-sm font-semibold mb-2 text-left">SuperCo</h5>
            <h5 className="text-sm font-semibold mb-2 text-left">2019 — Present</h5>
            <div className="my-5">
                <p className="text-gray-700 text-left">Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.

                </p>
            </div>
            
        </div>
    </div>
      
      
              <div ref={scrollContainerRef} className="bottom-4 relative text-9xl z-10  text-white ">
                <ScrollVelocity
                  texts={['UNIQUE GF EXCELLENCE', 'CREATIVITY INNOVATION', ]}
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
  )
}
