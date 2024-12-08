'use client';

import { motion } from 'framer-motion';
import { ScrambleText } from './scramble-text';

interface SectionHeadingProps {
  title: string;
  subtitle?: string[];
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-6 ${className}`}
    >
      <ScrambleText
        text={title}
        className='text-2xl md:text-3xl lg:text-4xl font-relish text-white tracking-wider leading-none'
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-gray-400 md:text-right text-xs md:text-base font-ppsans'
        >
          {subtitle[0]}
          <br />
          {subtitle[1]}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
