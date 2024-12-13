"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./scramble-text";
import React, { ComponentType } from "react";

interface Prize {
  title: string;
  amount: string;
  progressPercentage: number;
  showTrophy?: boolean;
}

interface Supporter {
  component: ComponentType;
}

interface PrizeCardProps {
  totalPrize: string;
  mainSponsor: {
    title: string;
    logo: ComponentType;
  };
  mainSponsor2?: {
    title: string;
    logo: ComponentType;
  };
  mainSponsor3?: {
    title: string;
    logo: ComponentType;
  };
  prizes: Prize[];
  description?: string;
  supporters?: Supporter[];
  accentColor?: string;
  className?: string;
  isInView?: boolean;
}

const PrizeCard = ({
  totalPrize,
  mainSponsor,
  mainSponsor2,
  mainSponsor3,
  prizes,
  description,
  supporters = [],
  accentColor = "#1BE1FF",
  className = "",
  isInView = true,
}: PrizeCardProps) => {
  const MainSponsorLogo = mainSponsor.logo;
  const MainSponsorLogo2 = mainSponsor2?.logo;
  const MainSponsorLogo3 = mainSponsor3?.logo;

  // Function to adjust color opacity
  const adjustColorOpacity = (color: string, opacity: number) => {
    // Convert hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <motion.div
      className={`relative rounded-md overflow-hidden max-w-[100%] md:max-w-full w-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Accent border on the left */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 z-10"
        style={{ backgroundColor: accentColor }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 0% 50%, ${adjustColorOpacity(
            accentColor,
            0.15
          )} 0%, transparent 25%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative rounded-lg p-8 md:p-12 cyberpunk-card"
        style={{
          background: `linear-gradient(135deg, 
            #0A0B0D 0%, 
            ${adjustColorOpacity(accentColor, 0.03)} 25%, 
            ${adjustColorOpacity(accentColor, 0.05)} 50%,
            #13151A 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row gap-12 justify-between items-top">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-12 w-full">
            {/* Header Section */}
            <motion.div
              className="flex flex-col gap-4 md:gap-6 justify-start lg:justify-start items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ScrambleText
                text={totalPrize}
                className="text-3xl md:text-4xl lg:text-6xl font-relish font-bold text-white"
              />
              <div className="flex lg:items-center gap-2">
                <span className="font-ppsans text-gray-400 text-xs lg:text-sm">
                  {mainSponsor.title} by
                </span>
                <div className="text-gray-400 hover:text-gray-300 transition-colors flex flex-wrap gap-6">
                  {/* To avoid type error and optional - undefined */}
                  {mainSponsor2?.logo && React.createElement(mainSponsor2.logo)}
                  <MainSponsorLogo />
                  {mainSponsor3?.logo && React.createElement(mainSponsor3.logo)}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-auto font-ppsans text-gray-400 text-xs lg:text-sm whitespace-pre-line"
            >
              {" "}
              {description}{" "}
            </motion.div>

            {/* Supporters section */}
            {supporters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-auto"
              >
                <p className="text-gray-500 text-sm mb-4 font-ppsans">Supported by</p>
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  {supporters.map((supporter, index) => {
                    const SupporterLogo = supporter.component;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <SupporterLogo />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Prize Details */}
          <motion.div
            className="flex flex-col gap-2 md:gap-4 h-full max-w-[320px] w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <span className="text-white text-base lg:text-lg font-ppsans">
                  {prize.title}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-white text-base lg:text-lg font-relish">
                    {prize.amount}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 10px ${adjustColorOpacity(accentColor, 0.1)};
          }
          50% {
            box-shadow: 0 0 20px ${adjustColorOpacity(accentColor, 0.2)};
          }
          100% {
            box-shadow: 0 0 10px ${adjustColorOpacity(accentColor, 0.1)};
          }
        }

        .cyberpunk-card {
          position: relative;
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        .cyberpunk-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${adjustColorOpacity(accentColor, 0.05)} 25%,
            ${adjustColorOpacity(accentColor, 0.05)} 75%,
            transparent 100%
          );
          opacity: 0;
          animation: glowPulse 3s ease-in-out infinite;
          pointer-events: none;
          border-radius: inherit;
        }

        .cyberpunk-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default PrizeCard;
