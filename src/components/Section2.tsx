'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import connectImg from '@/assets/images/svgs/bgs/abstract.png';
import prizesImg from '@/assets/images/svgs/bgs/abstract3.png';
import opportunitiesImg from '@/assets/images/svgs/bgs/abstract2.png';

const PreviewCards = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) {
        // Only on mobile/tablet
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const cards = [
    {
      title: 'Connect',
      color: '#1BE1FF',
      image: connectImg,
      description: 'Expert Sessions, 1:1 Mentorship,\nand Exclusive Networking',
      gradient: 'from-[#1BE1FF]/20 to-transparent',
    },
    {
      title: 'Prizes',
      color: '#FFFF00',
      image: prizesImg,
      description: '$250,000+ in Prize Pool\nacross 6 Themed Tracks',
      gradient: 'from-[#FFFF00]/20 to-transparent',
    },
    {
      title: 'Opportunities',
      color: '#19FFCE',
      image: opportunitiesImg,
      description: 'Access to VC/Angel Funding for\nTop-Selected Teams at Demo Day',
      gradient: 'from-[#19FFCE]/20 to-transparent',
    },
  ];

  return (
    <div className='bg-black w-full relative' ref={sectionRef}>
      {/* Scroll indicators */}
      <div className='absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden z-10' />
      <div className='absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden z-10' />

      <div
        ref={scrollContainerRef}
        className='flex md:justify-center overflow-x-auto px-4 md:px-8 hide-scrollbar'
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
        }}
      >
        <div className='flex gap-4 sm:gap-12 md:gap-16 lg:gap-20 pb-4 md:pb-0 py-8 pl-2 md:pl-0'>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className='flex-none scroll-snap-align-start'
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Card Container */}
              <motion.div
                className='relative group w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px]'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className='relative rounded-lg rounded-tl-none border-2 md:border-4'
                  style={{ borderColor: card.color }}
                >
                  {/* Title Tab with cyberpunk styling */}
                  <motion.div
                    className='absolute -top-6 sm:-top-8 -left-0.5 md:-left-1 px-2 sm:px-4 py-1 md:py-1.5 rounded-t font-mono z-10 flex items-center gap-2 backdrop-blur-md'
                    style={{ backgroundColor: card.color }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
                  >
                    <span className='text-black text-xs sm:text-md font-bold tracking-wider'>
                      {card.title}
                    </span>
                    <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 hidden bg-black rounded-full animate-pulse'></div>
                  </motion.div>

                  {/* Image and Content Container */}
                  <div className='relative overflow-hidden '>
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + index * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className='relative'
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        className='w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover brightness-90 rounded-md rounded-tl-none'
                      />
                      {/* Gradient overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg' />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      className='absolute bottom-8 left-0 right-0 p-2 sm:p-3'
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    >
                      <p className='text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line text-center text-white/90 shadow-md font-bold md:font-medium'>
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
};

export default PreviewCards;
