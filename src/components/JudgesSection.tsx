'use client';

import React, { useRef } from 'react';
import judgesImg from '@/assets/images/svgs/bgs/abstract8.png';
import Image from 'next/image';
import { ScrambleText } from './ui/scramble-text';
import { motion, useInView } from 'framer-motion';

const judges = [
  {
    id: 1,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 2,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 3,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 4,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 5,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 6,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 7,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 8,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 9,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
  {
    id: 10,
    name: 'Tarun Chitra',
    role: 'Partner @DragonFly',
    image: judgesImg,
  },
];

const JudgesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const getColors = (index: number): string => {
    switch (index % 4) {
      case 0:
        return '#1BE1FF'; // Cyan
      case 1:
        return '#FFFF00'; // Yellow
      case 2:
        return '#19FFCE'; // Mint/Green
      case 3:
        return '#FFFF00'; // Yellow
      default:
        return '#787B7E';
    }
  };

  return (
    <div className='bg-black' ref={sectionRef}>
      <div className='max-w-7xl w-full mx-auto px-4'>
        {/* Title Section */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-center'>
            <ScrambleText
              text={'JUDGED AND MENTORED'}
              className='text-xl md:text-3xl lg:text-4xl font-relish text-white tracking-wider leading-none'
            />
            <motion.p
              className='text-2xl text-white font-ppsans hidden md:block'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              by top Crypto x AI Leaders:
            </motion.p>
          </div>
        </motion.div>

        {/* Judges Grid */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {judges.map((judge, index) => (
            <motion.div
              key={judge.id}
              className='relative group'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              style={
                {
                  '--hover-color': getColors(index),
                } as React.CSSProperties
              }
            >
              {/* Glowing border effect */}
              <div className='absolute inset-0 bg-[#1E1E1E] rounded-lg transition-all duration-300 group-hover:bg-[var(--hover-color)] opacity-0 group-hover:opacity-10 blur-xl'></div>

              {/* Card Container */}
              <div className='relative bg-[#1E1E1E] rounded-lg overflow-hidden'>
                {/* Top accent line */}
                <div className='absolute top-0 left-0 w-full h-[2px] bg-[#353637] transition-all duration-300 group-hover:bg-[var(--hover-color)]'></div>

                {/* Corner accents */}
                <div className='absolute top-0 left-0 w-4 h-[2px] bg-[#353637] transform -rotate-45 origin-top-left transition-all duration-300 group-hover:bg-[var(--hover-color)] group-hover:w-6'></div>
                <div className='absolute top-0 right-0 w-4 h-[2px] bg-[#353637] transform rotate-45 origin-top-right transition-all duration-300 group-hover:bg-[var(--hover-color)] group-hover:w-6'></div>

                {/* Image Container */}
                <div className='aspect-square overflow-hidden border-2 border-[#353637] transition-all duration-300 group-hover:border-[var(--hover-color)]'>
                  <Image
                    src={judge.image}
                    alt={judge.name}
                    className='w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110'
                  />

                  {/* Overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30'></div>
                </div>

                {/* Info Section */}
                <div className='relative mt-3 p-2 flex items-center gap-2 bg-[#1E1E1E]'>
                  <div className='flex-grow'>
                    <h3 className='text-white font-mono text-sm transition-colors duration-300 group-hover:text-[var(--hover-color)]'>
                      {judge.name}
                    </h3>
                    <p className='text-gray-500 font-mono text-xs transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60'>
                      {judge.role}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div
                    className='ml-auto transform transition-all duration-300 group-hover:translate-x-1'
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 45 45'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='transition-colors duration-300 text-[#787B7E] group-hover:text-[var(--hover-color)]'
                    >
                      <path
                        d='M1.44057 44.4354L0.530273 43.525L21.4415 22.6138L0.530273 1.70261L1.44057 0.792236L23.2621 22.6138L1.44057 44.4354Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      />
                      <path
                        d='M22.8008 44.4354L21.9033 43.525L42.8146 22.6138L21.9033 1.70261L22.8008 0.792236L44.6223 22.6138L22.8008 44.4354Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JudgesSection;
