'use client';

import imgabsR3 from '@/assets/images/svgs/bgs/abstract.png';
import imgabsL3 from '@/assets/images/svgs/bgs/abstract10.png';
import imgabsR2 from '@/assets/images/svgs/bgs/abstract2.png';
import imgabsL1 from '@/assets/images/svgs/bgs/abstract6.png';
import imgabsL2 from '@/assets/images/svgs/bgs/abstract9.png';
import imgabsR1 from '@/assets/images/svgs/bgs/ai16zdotted.svg';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Frame = ({
  children,
  className = '',
  title,
  hasAccent = false,
  titleColor = '#00ffff',
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  hasAccent?: boolean;
  titleColor?: string;
}) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Content - moved to back */}
      <div className='relative z-0 overflow-hidden'>
        <motion.div
          initial={false}
          whileHover={{
            filter: 'brightness(1.2) contrast(1.1)',
            transition: { duration: 0.2 },
          }}
        >
          {children}
        </motion.div>

        {/* Digital scan effect */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-[#00ffff]/10 to-transparent opacity-0 group-hover:opacity-100'
          initial={false}
          animate={{
            y: ['0%', '200%'],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
      </div>

      {/* Digital frame effect */}
      <motion.div
        className='absolute -inset-[1px] z-10'
        initial={false}
        whileHover={{
          boxShadow: `0 0 20px ${titleColor}33, inset 0 0 15px ${titleColor}33`,
          transition: { duration: 0.2 },
        }}
      >
        {/* Corner markers */}
        <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity' />
        <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity' />
        <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity' />
        <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity' />
      </motion.div>

      {/* Title with digital effect */}
      {title && (
        <motion.div
          className='absolute -top-8 left-0 z-20'
          initial={false}
          whileHover={{
            x: 5,
            transition: { duration: 0.2 },
          }}
        >
          <div
            className='px-3 py-1 text-black text-sm font-medium relative overflow-hidden'
            style={{ backgroundColor: titleColor }}
          >
            {title}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 mix-blend-overlay'
              animate={{
                x: ['-100%', '200%'],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 0.5,
                },
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Main border with glow */}
      <motion.div
        className='absolute inset-0 border-[3px] rounded-xl z-[5]'
        style={{ borderColor: titleColor }}
        initial={false}
        animate={{
          boxShadow: [
            '0 0 0px transparent',
            `0 0 10px ${titleColor}66`,
            '0 0 0px transparent',
          ],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        {/* Accent bar with pulse */}
        {hasAccent && (
          <motion.div
            className='absolute bottom-0 left-0 h-1.5 w-16 flex rounded-bl-xl overflow-hidden'
            animate={{
              opacity: [1, 0.6, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <div className='w-1/3 h-full bg-yellow-400' />
            <div className='w-1/3 h-full bg-[#00ffff]' />
            <div className='w-1/3 h-full bg-yellow-400' />
          </motion.div>
        )}
      </motion.div>

      {/* Scan lines */}
      <div className='absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_50%,rgba(0,255,255,0.05)_50%,transparent_51%)] bg-[length:100%_3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[8] pointer-events-none mix-blend-overlay' />
    </motion.div>
  );
};

const BackgroundImages = () => {
  return (
    <div className='absolute inset-0 w-full h-full'>
      <div className='absolute inset-0 z-10 max-w-[1800px] mx-auto'>
        {/* Left Abstract Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='absolute top-6 left-0 md:top-12 w-[80px] md:w-[200px]'
        >
          <Frame title='DeFi Agents' hasAccent titleColor='#19FFCE'>
            <div className='w-full'>
              <Image
                src={imgabsL1}
                alt='Left Abstract 1'
                className='w-full h-full object-fit'
              />
            </div>
          </Frame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='absolute top-16 left-6 md:top-28 md:left-28 z-20 w-[100px] md:w-[240px]'
        >
          <Frame title='Agent Tooling' hasAccent titleColor='#00ffff'>
            <div className='w-full aspect-square'>
              <Image
                src={imgabsL2}
                alt='Left Abstract 2'
                className='w-full h-full object-cover'
              />
            </div>
          </Frame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='absolute top-40 left-2 md:top-72 md:left-8 w-[60px] md:w-[160px]'
        >
          <Frame title='Social Agents' hasAccent titleColor='#00ffff'>
            <div className='w-full aspect-square'>
              <Image
                src={imgabsL3}
                alt='Left Abstract 3'
                className='w-full h-full object-cover'
              />
            </div>
          </Frame>
        </motion.div>

        {/* Right Abstract Images */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='absolute bottom-[50px] right-12 md:bottom-54 md:right-126 z-30 w-[90px] md:w-[180px]'
        >
          <Frame title='10th to 23rd dec' titleColor='#FFD600'>
            <div className='w-full aspect-[1/1.2]'>
              <Image
                src={imgabsR2}
                alt='Right Abstract 2'
                className='w-full h-full object-cover opacity-40'
              />
            </div>
          </Frame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='absolute bottom-[100px] right-0 md:bottom-48 md:right-0 w-[150px] md:w-[380px]'
        >
          <Frame title='Agent Aggregators' hasAccent titleColor='#00ffff'>
            <div className='w-full aspect-[1.6/1]'>
              <Image
                src={imgabsR2}
                alt='Right Abstract 2'
                className='w-full h-full object-cover'
              />
            </div>
          </Frame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='absolute bottom-4 right-2 md:bottom-24 md:right-0 w-[100px] md:w-[280px]'
        >
          <Frame titleColor='#19FFCE' title='Agents'>
            <div className='w-full aspect-square overflow-hidden p-1'>
              <Image
                src={imgabsR3}
                alt='Right Abstract 3'
                className='w-full h-full'
              />
            </div>
          </Frame>
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundImages;
