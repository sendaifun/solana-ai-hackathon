"use client";

import { motion } from "framer-motion";

const borderVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    filter: "brightness(1.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const LeftBorder = () => (
  <motion.svg
    width="73"
    height="14"
    viewBox="0 0 73 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[50px] sm:w-[73px] h-auto"
    variants={borderVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    whileInView={{
      x: [-5, 0, -5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }}
  >
    <path
      d="M73.0088 0.0507812H69.5768L62.7047 13.2726H66.1366L73.0088 0.0507812Z"
      fill="white"
    />
    <g opacity="0.9">
      <path
        d="M66.1307 0.0507812H62.6987L55.8347 13.2726H59.2667L66.1307 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        d="M59.2684 0.0507812H55.8364L48.9642 13.2726H52.4044L59.2684 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.7">
      <path
        d="M52.4068 0.0507812H48.9666L42.1026 13.2726H45.5346L52.4068 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.6">
      <path
        d="M45.5363 0.0507812H42.1043L35.2321 13.2726H38.6723L45.5363 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.5">
      <path
        d="M38.6709 0.0507812H35.2307L28.3667 13.2726H31.7987L38.6709 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.4">
      <path
        d="M31.7972 0.0507812H28.3652L21.5012 13.2726H24.9332L31.7972 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.3">
      <path
        d="M24.9346 0.0507812H21.5026L14.6304 13.2726H18.0624L24.9346 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.2">
      <path
        d="M18.061 0.0507812H14.629L7.76495 13.2726H11.1969L18.061 0.0507812Z"
        fill="white"
      />
    </g>
    <g opacity="0.1">
      <path
        d="M11.1982 0.0507812H7.76624L0.894073 13.2726H4.32607L11.1982 0.0507812Z"
        fill="white"
      />
    </g>
    <path d="M73.008 6.66602L69.576 13.277H73.008V6.66602Z" fill="white" />
    <g opacity="0.05">
      <path
        d="M0.892914 0.0488281H4.32491L0.892914 6.65976V0.0488281Z"
        fill="white"
      />
    </g>
  </motion.svg>
);

const RightBorder = () => (
  <motion.svg
    width="73"
    height="14"
    viewBox="0 0 73 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[50px] sm:w-[73px] h-auto"
    variants={borderVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    whileInView={{
      x: [5, 0, 5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }}
  >
    <path
      d="M0.0158796 0.050293H3.44787L10.32 13.2722H6.88805L0.0158796 0.050293Z"
      fill="white"
    />
    <g opacity="0.9">
      <path
        d="M6.89401 0.050293H10.326L17.1901 13.2722H13.758L6.89401 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        d="M13.7562 0.050293H17.1883L24.0604 13.2722H20.6203L13.7562 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.7">
      <path
        d="M20.6198 0.050293H24.06L30.924 13.2722H27.492L20.6198 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.6">
      <path
        d="M27.4925 0.050293H30.9245L37.7967 13.2722H34.3565L27.4925 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.5">
      <path
        d="M34.3534 0.050293H37.7936L44.6576 13.2722H41.2256L34.3534 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.4">
      <path
        d="M41.2297 0.050293H44.6617L51.5258 13.2722H48.0938L41.2297 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.3">
      <path
        d="M48.092 0.050293H51.524L58.3962 13.2722H54.9642L48.092 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.2">
      <path
        d="M54.9615 0.050293H58.3935L65.2575 13.2722H61.8255L54.9615 0.050293Z"
        fill="white"
      />
    </g>
    <g opacity="0.1">
      <path
        d="M61.8282 0.050293H65.2602L72.1324 13.2722H68.7004L61.8282 0.050293Z"
        fill="white"
      />
    </g>
    <path
      d="M0.0176535 6.66602L3.44965 13.277H0.0176535V6.66602Z"
      fill="white"
    />
    <g opacity="0.05">
      <path
        d="M72.1328 0.0488281H68.7008L72.1328 6.65976V0.0488281Z"
        fill="white"
      />
    </g>
  </motion.svg>
);

interface SubtitleSectionProps {
  className?: string;
}

const SubtitleSection = ({ className }: SubtitleSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-white text-xs sm:text-sm tracking-[0.2em] flex items-center gap-2 md:gap-3 flex-wrap justify-center relative z-10 ${className}`}
    >
      <LeftBorder />
      <span className="md:block hidden">10th - 23rd Dec. global & online.</span>
      {/* <span className="opacity-50 md:block hidden">·</span> */}
      <span>$210k+ in prizes</span>
      <RightBorder />
    </motion.div>
  );
};

export default SubtitleSection;
