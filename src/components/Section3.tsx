"use client";

import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import dialectLogo from "@/assets/images/logos/DialectLogo.svg";
import superteamLogo from "@/assets/images/logos/SendWhiteLogo.svg";
import solanaFndnImg from "@/assets/images/logos/SolanaFoundationLogo.svg";
import squadsLogo from "@/assets/images/logos/SquadsLogo.svg";
import tensorLogo from "@/assets/images/logos/TensorLogo.svg";

const Section3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-black py-12 md:py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-relishGargler text-white tracking-wider">
            GRAND PRIZE
          </h2>
          <p className="text-gray-400 md:text-right text-base md:text-lg font-PPSans">
            Build the best overall AI
            <br />
            Agents to win the Grand Prize
          </p>
        </motion.div>

        {/* Prize Card */}
        <motion.div 
          className="relative max-w-[100%] md:max-w-full mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Cyan border on the left */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.div 
            className="bg-gray-900/70 rounded-lg p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Mobile Layout */}
            <div className="flex flex-col lg:hidden">
              {/* Top Section */}
              <motion.div 
                className="flex justify-between items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-relishGargler font-bold text-white">
                  $40,000
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-PPSans text-gray-300 text-sm hidden md:block">Main Track by</span>
                  <span className="font-PPSans text-gray-300 ml-4 text-sm md:hidden sm:block"> by</span>
                  <Image
                    src={solanaFndnImg}
                    alt="Solana Foundation"
                    className="h-4"
                  />
                </div>
              </motion.div>

              {/* Prize Details */}
              <motion.div 
                className="space-y-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* First Prize */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-white hidden" />
                    <span className="text-white text-lg font-PPSans">1st Prize</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-800">
                      <motion.div 
                        className="h-full bg-gray-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      />
                    </div>
                    <span className="text-white text-lg font-relishGargler whitespace-nowrap">
                      $25,000
                    </span>
                  </div>
                </div>

                {/* Second Prize */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white text-lg font-PPSans">2nd Prize</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-800">
                      <motion.div 
                        className="h-full bg-gray-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "60%" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </div>
                    <span className="text-white text-lg font-relishGargler whitespace-nowrap">
                      $15,000
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Supporters section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-gray-500 text-sm mb-3">Supported by</p>
                <div className="grid grid-cols-2 gap-4">
                  {[dialectLogo, squadsLogo, superteamLogo, tensorLogo].map((logo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                    >
                      <Image
                        src={logo}
                        alt={`Supporter ${index + 1}`}
                        className="h-4 sm:h-6 text-white"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {/* Left side */}
              <div>
                <motion.h3 
                  className="text-6xl font-relishGargler font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  $40,000
                </motion.h3>
                <motion.div 
                  className="flex items-center gap-3 mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="text-gray-300">Main Track by</span>
                  <Image
                    src={solanaFndnImg}
                    alt="Solana Foundation"
                    className="h-6"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <p className="text-gray-500 mb-4">Supported by</p>
                  <div className="grid grid-cols-2 gap-6">
                    {[dialectLogo, squadsLogo, superteamLogo, tensorLogo].map((logo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      >
                        <Image
                          src={logo}
                          alt={`Supporter ${index + 1}`}
                          className="h-8 text-white"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right side */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* First Prize */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-white" />
                    <span className="text-white text-xl">First Grand Prize</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-gray-800">
                      <motion.div 
                        className="h-full bg-gray-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      />
                    </div>
                    <span className="text-white text-xl font-relishGargler">
                      $25,000
                    </span>
                  </div>
                </div>

                {/* Second Prize */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white text-xl ml-9">Second Prize</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-gray-800">
                      <motion.div 
                        className="h-full bg-gray-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "60%" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </div>
                    <span className="text-white text-xl font-relishGargler">
                      $15,000
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;