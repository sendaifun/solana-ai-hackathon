'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnLoad?: boolean;
  interval?: number;
}

// More elegant character set with similar visual weight
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZｦｧｨｩｪｫｬｭｮｯ';

export const ScrambleText = ({
  text,
  className = '',
  scrambleOnHover = true,
  scrambleOnLoad = false,
  interval,
}: ScrambleTextProps) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iterations = 0;
    const maxIterations = 15; // Increased iterations for smoother transition
    const frameRate = 30; // Smoother frame rate (30ms = ~33fps)

    // Calculate a unique delay for each character
    const charDelays = text.split('').map((_, i) => i * 0.7);

    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            // Custom easing for each character
            const charProgress = Math.max(0, iterations - charDelays[index]);
            const threshold = maxIterations * 0.7; // Show original character after 70% of iterations

            // Gradually increase chance of showing original character
            if (charProgress > threshold) {
              return Math.random() >
                (charProgress - threshold) / (maxIterations - threshold)
                ? CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                : char;
            }

            // Random character with higher chance of similar characters
            const randomChar =
              Math.random() > 0.5
                ? CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                : CHARACTERS[
                    Math.floor(Math.random() * (CHARACTERS.length / 2))
                  ];

            return randomChar;
          })
          .join('')
      );

      iterations += 1;

      if (iterations >= maxIterations + Math.max(...charDelays)) {
        clearInterval(interval);
        setScrambledText(text);
      }
    }, frameRate);

    setIntervalId(interval);
    return () => clearInterval(interval);
  };

  // Handle scramble on load with a slight delay
  useEffect(() => {
    if (scrambleOnLoad) {
      const loadDelay = setTimeout(() => {
        scramble();
      }, 300); // Slight delay for better visual effect
      return () => clearTimeout(loadDelay);
    }
  }, [scrambleOnLoad]);

  // Handle interval-based scrambling with smooth transitions
  useEffect(() => {
    if (interval) {
      const timer = setInterval(() => {
        scramble();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [interval]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleMouseEnter = () => {
    if (!scrambleOnHover) return;
    setIsHovering(true);
    scramble();
  };

  const handleMouseLeave = () => {
    if (!scrambleOnHover) return;
    setIsHovering(false);
    if (intervalId) {
      clearInterval(intervalId);
      setScrambledText(text);
    }
  };

  return (
    <motion.span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {scrambledText}
    </motion.span>
  );
};
