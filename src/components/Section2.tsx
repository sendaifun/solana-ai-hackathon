"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import connectImg from "@/assets/images/svgs/bgs/abstract.png";
import prizesImg from "@/assets/images/svgs/bgs/abstract3.png";
import opportunitiesImg from "@/assets/images/svgs/bgs/abstract2.png";

const PreviewCards = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const cards = [
    {
      title: "Connect",
      color: "#1BE1FF",
      image: connectImg,
      description: "Expert Sessions, 1:1 Mentorship,\nand Exclusive Networking",
    },
    {
      title: "Prizes",
      color: "#FFFF00",
      image: prizesImg,
      description: "$100,000+ in Prize Pool\nacross 6 Themed Tracks",
    },
    {
      title: "Opportunities",
      color: "#19FFCE",
      image: opportunitiesImg,
      description: "Access to VC/Angel Funding for\nTop-Selected Teams",
    },
  ];

  return (
    <div className="bg-black w-full py-20" ref={sectionRef}>
      {/* Container with horizontal scroll on mobile */}
      <div className="flex md:justify-center overflow-x-auto md:overflow-x-visible">
        <div className="flex gap-8 mx-2 md:flex-row md:justify-around md:gap-16 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="flex-none snap-center md:flex-1 mt-8"
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
                className="relative group w-[280px] md:w-[240px] lg:w-[320px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Glowing border using the specific hex color */}
                <motion.div
                  className="absolute -inset-0.5 rounded-lg opacity-75"
                  style={{ backgroundColor: card.color }}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                />

                <div className="relative bg-black rounded-lg">
                  {/* Title Tab with specific hex color */}
                  <motion.div
                    className="absolute -top-8 left-0 px-4 py-1 rounded-t text-black font-mono z-10"
                    style={{ backgroundColor: card.color }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + index * 0.2,
                    }}
                  >
                    {card.title}
                  </motion.div>

                  {/* Image and Content */}
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + index * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[200px] md:h-[180px] lg:h-[220px] object-cover brightness-75 rounded-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6 text-white text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.2,
                      }}
                    >
                      <p className="text-lg md:text-xl font-light leading-tight whitespace-pre-line">
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
    </div>
  );
};

export default PreviewCards;
