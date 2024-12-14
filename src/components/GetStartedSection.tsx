"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrambleText } from "./ui/scramble-text";
import { track } from "@vercel/analytics";

interface CardItem {
  id: string;
  title: string;
  href: string;
  icon: () => JSX.Element;
}

const GetStartedSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleLinkClick = (title: string) => {
    track("get_started_link_click", { title });
  };

  const getColors = (index: number): string => {
    switch (index % 4) {
      case 0:
        return "#1BE1FF"; // Cyan
      case 1:
        return "#FFFF00"; // Yellow
      case 2:
        return "#19FFCE"; // Mint/Green
      case 3:
        return "#FFFF00"; // Yellow
      default:
        return "#787B7E";
    }
  };

  const cardItems: CardItem[] = [
    {
      id: "ideaboard",
      title: "Ideaboard",
      href: "https://www.sendai.fun/ideas",
      icon: () => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 46V58L26 64H38L44 58V46L48.9584 41.0416C53.467 36.533 56 30.4057 56 24.0294C56 10.7746 45.2548 0 32 0C18.7452 0 8 10.7746 8 24.0294C8 30.4057 10.533 36.533 15.0416 41.0416L20 46ZM38 55.5147V48H26V55.5147L28.4853 58H35.5147L38 55.5147ZM39.5147 42H35V24H29V42H24.4853L19.2843 36.799C15.9031 33.4178 14 28.8176 14 24.0294C14 14.0787 22.0684 6 32 6C41.9316 6 50 14.0787 50 24.0294C50 28.8176 48.0969 33.4178 44.7157 36.799L39.5147 42Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "resources",
      title: "Resources",
      href: "https://docs.google.com/document/d/1anJ_YRzLbgrqm3zB7gC02AxPvOlGzC2aySZLcRkjKo8",
      icon: () => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V52H19.7574L27.7574 60H36.2426L44.2426 52H64V8H43C38.5381 8 34.5637 10.0873 32 13.3388C29.4363 10.0873 25.4619 8 21 8H0ZM29 22C29 17.5817 25.4183 14 21 14H6V46H22.2426L30.2426 54H33.7574L41.7574 46H58V14H43C38.5817 14 35 17.5817 35 22V40H29V22Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "agent-kit",
      title: "Solana Agent Kit",
      href: "https://solanaagentkit.xyz/",
      icon: () => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
        >
          <path
            d="M30.7617 0V7.12501H45.7032L56.2501 30.2813L50.9766 41.8594L46.3855 39.1875L50.442 30.2813L42.329 12.4688H13.921L5.80802 30.2813L13.921 48.0938H35.5957L36.9141 53.4375H10.5469L0 30.2813L10.5469 7.12501H25.4883V0H30.7617Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M21.0938 28.5C23.0354 28.5 24.6094 26.905 24.6094 24.9375C24.6094 22.97 23.0354 21.375 21.0938 21.375C19.1521 21.375 17.5781 22.97 17.5781 24.9375C17.5781 26.905 19.1521 28.5 21.0938 28.5Z"
            fill="currentColor"
          />
          <path
            d="M38.6719 24.9375C38.6719 26.905 37.0979 28.5 35.1563 28.5C33.2147 28.5 31.6407 26.905 31.6407 24.9375C31.6407 22.97 33.2147 21.375 35.1563 21.375C37.0979 21.375 38.6719 22.97 38.6719 24.9375Z"
            fill="currentColor"
          />
          <path
            d="M36.3603 39.6148L35.4933 34.3438L33.1817 34.7342L28.125 35.5882L23.0683 34.7342L20.7567 34.3438L19.8898 39.6148L22.6348 40.0784L28.125 41.0056L33.6152 40.0784L36.3603 39.6148Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "find-team",
      title: "Find a Team",
      href: "https://t.me/solana_ai_hackathon/19",
      icon: () => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 26C29.0751 26 34 21.0751 34 15C34 8.92487 29.0751 4 23 4C16.9249 4 12 8.92487 12 15C12 21.0751 16.9249 26 23 26ZM23 20C25.7614 20 28 17.7614 28 15C28 12.2386 25.7614 10 23 10C20.2386 10 18 12.2386 18 15C18 17.7614 20.2386 20 23 20Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57 17C57 21.9706 52.9706 26 48 26C43.0294 26 39 21.9706 39 17C39 12.0294 43.0294 8 48 8C52.9706 8 57 12.0294 57 17ZM51 17C51 18.6569 49.6569 20 48 20C46.3431 20 45 18.6569 45 17C45 15.3431 46.3431 14 48 14C49.6569 14 51 15.3431 51 17Z"
            fill="currentColor"
          />
          <path
            d="M6 44V54H26V60H0V44C0 37.3726 5.37258 32 12 32H26V38H12C8.68629 38 6 40.6863 6 44Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.2355 52.9929C58.9802 50.43 60 47.3341 60 44C60 35.1634 52.8366 28 44 28C35.1634 28 28 35.1634 28 44C28 52.8366 35.1634 60 44 60C47.3341 60 50.43 58.9802 52.9929 57.2355L59.4787 63.7213L63.7213 59.4787L57.2355 52.9929ZM44 54C49.5229 54 54 49.5229 54 44C54 38.4772 49.5229 34 44 34C38.4772 34 34 38.4772 34 44C34 49.5229 38.4772 54 44 54Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 mt-64 md:mt-32">
        {/* Animated Title Section */}
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            <motion.span
              className="font-relishGargler tracking-wider inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.span>
            <ScrambleText
              text={"GET STARTED"}
              className="text-xl md:text-3xl lg:text-4xl font-relish text-white tracking-wider leading-none"
            />
            <motion.span
              className="text-xl md:text-3xl text-white px-2 font-ppsans hidden md:inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {" "}
              on building
            </motion.span>
          </h2>
          <motion.p
            className="text-xl md:text-3xl text-white font-ppsans hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            your Crypto x AI Project:
          </motion.p>
        </motion.div>

        {/* Animated Cards */}
        <div className="flex flex-col gap-2  relative w-full overflow-hidden">
          <div className="flex flex-wrap md:pb-0 snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto items-center justify-center scrollbar-hide">
            {cardItems.map((item, index) => (
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                style={
                  {
                    aspectRatio: "1/1",
                    "--hover-color": getColors(index),
                  } as React.CSSProperties
                }
                className="flex-none h-[120px] w-[120px] sm:w-[210px] sm:h-[210px] snap-center border-2 md:border-4 border-[#353637] rounded-lg p-2 md:p-6 lg:p-8 
                  flex flex-col items-center justify-center transition-all duration-300
                  hover:border-[var(--hover-color)] group bg-[#1E1E1E]"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 50,
                  scale: isInView ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                onClick={() => handleLinkClick(item.title)}
              >
                <motion.div
                  className=" text-[#787B7E] group-hover:text-[var(--hover-color)] transition-colors duration-300 w-8 h-8 md:w-16 md:h-16 lg:w-[64px] lg:h-[64px]"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isInView ? 1 : 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  {item.icon()}
                </motion.div>
                <motion.span
                  className="text-[#787B7E] text-center group-hover:text-[var(--hover-color)] text-sm md:text-base lg:text-lg font-PPSans mt-2 md:mt-4 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.1,
                  }}
                >
                  {item.title}
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
