"use client";

import React, { useRef } from "react";
import judgesImg from "@/assets/images/svgs/bgs/abstract8.png";
import Image from "next/image";
import { ScrambleText } from "./ui/scramble-text";
import { motion, useInView } from "framer-motion";

// Img SVGs :
import alfonsoImg from "@/assets/images/judges/Alfonso.svg";
import benImg from "@/assets/images/judges/ben.svg";
import buffaluImg from "@/assets/images/judges/buffalu.svg";
import cherylImg from "@/assets/images/judges/Cheryl Chan .svg";
import craigImg from "@/assets/images/judges/Craig.svg";
import darylImg from "@/assets/images/judges/Daryl.svg";
import delhiImg from "@/assets/images/judges/delhi.svg";
import dynamicImg from "@/assets/images/judges/dynamic.svg";
import eclipseImg from "@/assets/images/judges/eclipse.svg";
import edgarImg from "@/assets/images/judges/edgar.svg";
import kaitoImg from "@/assets/images/judges/kaito.svg";
import kamranImg from "@/assets/images/judges/kamran.svg";
import karanNousImg from "@/assets/images/judges/karan_nous.svg";
import kyleImg from "@/assets/images/judges/kyle.svg";
import marginifImg from "@/assets/images/judges/marginif.svg";
import mertImg from "@/assets/images/judges/mert.svg";
import orcaImg from "@/assets/images/judges/orca.svg";
import qwImg from "@/assets/images/judges/qw.svg";
import shlokImg from "@/assets/images/judges/shlok.svg";
import samImg from "@/assets/images/judges/sam.svg";
import zerebroImg from "@/assets/images/judges/zerebro.svg";
import nickImg from "@/assets/images/judges/nick.svg";
import shawImg from "@/assets/images/judges/shaw.svg";
import somewhereImg from "@/assets/images/judges/somewheresy.svg";
import tarunImg from "@/assets/images/judges/tarun.svg";
import tengyanImg from "@/assets/images/judges/tengYan.svg";
import tolyImg from "@/assets/images/judges/toly.svg";
import tongImg from "@/assets/images/judges/tong.svg";
import kelImg from "@/assets/images/judges/kel.svg";
import zerebroAgentImg from "@/assets/images/judges/zerebroagent.svg";
import jadenImg from "@/assets/images/judges/jaden.svg";
import markImg from "@/assets/images/judges/mark.svg";
import yoheiImg from "@/assets/images/judges/yohei.svg";
import yannikImg from "@/assets/images/judges/yrschrade.svg";
import jjaliceaImg from "@/assets/images/judges/jjalicea.svg";
import maxsegalImg from "@/assets/images/judges/maxsegal.svg";
import kuleenImg from "@/assets/images/judges/kuleen.svg";
import ejaazImg from "@/assets/images/judges/ejaaz.svg";
import daveImg from "@/assets/images/judges/dave.svg";
import frankImg from "@/assets/images/judges/frank.svg";
import threadguyImg from "@/assets/images/judges/threadguy.svg";
import ryanImg from "@/assets/images/judges/ryan.svg";
import soljakeyImg from "@/assets/images/judges/soljakey.svg";
import ansemImg from "@/assets/images/judges/ansem.svg";
import mattyImg from "@/assets/images/judges/matty.svg";
import pedroImg from "@/assets/images/judges/pedro.svg";
import tukkaImg from "@/assets/images/judges/tukka.svg";
import { track } from "@vercel/analytics";

const judges = [
  {
    id: "anatoly",
    name: "Anatoly Yakovenko",
    role: "Co-Founder, Solana",
    twitter: "https://x.com/aeyakovenko",
    image: tolyImg,
  },
  {
    id: "kyle",
    name: "Kyle Samani",
    role: "Managing Partner, Multicoin",
    twitter: "https://x.com/KyleSamani",
    image: kyleImg,
  },
  {
    id: "shaw",
    name: "Shaw",
    role: "Founder, ai16z and Eliza Labs",
    twitter: "https://x.com/shawmakesmagic",
    image: shawImg,
  },
  {
    id: "zerebro",
    name: "Zerebro",
    role: "AI Agent",
    twitter: "https://x.com/0xzerebro",
    image: zerebroAgentImg,
  },
  {
    id: "tarun",
    name: "Tarun Chitra",
    role: "Robot Ventures and Gauntlet",
    twitter: "https://x.com/tarunchitra",
    image: tarunImg,
  },
  {
    id: "mert",
    name: "Mert",
    role: "Co-Founder, Helius",
    twitter: "https://x.com/0xMert_",
    image: mertImg,
  },
  {
    id: "buffalu",
    name: "Lucas Bruder",
    role: "Co-founder, Jito",
    twitter: "https://x.com/buffalu__",
    image: buffaluImg,
  },
  {
    id: "sandra",
    name: "Sandra Leow",
    role: "Research Partner, Kaito",
    twitter: "https://x.com/sandraaleow",
    image: kaitoImg,
  },
  {
    id: "zerebro",
    name: "Jeffy Yu",
    role: "Creator of Zerebro",
    twitter: "https://x.com/jyu_eth",
    image: zerebroImg,
  },
  {
    id: "karan",
    name: "Karan",
    role: "CoFounder, Nous",
    twitter: "https://x.com/karan4d",
    image: karanNousImg,
  },
  {
    id: "cheryl",
    name: "Cheryl Chan",
    role: "Partner, Dragonfly Capital",
    twitter: "https://x.com/cheryldchan",
    image: cherylImg,
  },
  {
    id: "eclipse",
    name: "Vijay Chetty",
    role: "CEO, Eclipse",
    twitter: "https://x.com/0xLitquidity",
    image: eclipseImg,
  },
  {
    id: "somewhere",
    name: "Somewheresy",
    role: "CEO, Somewhere Systems",
    twitter: "https://x.com/somewheresystem",
    image: somewhereImg,
  },
  {
    id: "edgar",
    name: "Edgar Pavlovsky",
    role: "Paladin and mtnDAO",
    twitter: "https://x.com/edgarpavlovsky",
    image: edgarImg,
  },
  {
    id: "delhi",
    name: "Alex Golding",
    role: "VC, Delphi Ventures",
    twitter: "https://x.com/HelpedHope",
    image: delhiImg,
  },
  {
    id: "shlok",
    name: "Shlok Khemani",
    role: "Researcher, Decentralised.co",
    twitter: "https://x.com/shloked_",
    image: shlokImg,
  },
  {
    id: "tengyan",
    name: "Teng Yan",
    role: "Founder, Chain of Thought",
    twitter: "https://x.com/0xprismatic?s=21&t=c",
    image: tengyanImg,
  },
  {
    id: "craig",
    name: "Craig Burel",
    role: "General Partner, Reciprocal Ventures",
    twitter: "https://x.com/CraigBurel",
    image: craigImg,
  },
  {
    id: "sam",
    name: "Sam Hogan",
    role: "Co-founder, Kuzco",
    twitter: "https://x.com/0xSamHogan",
    image: samImg,
  },
  {
    id: "dynamic",
    name: "Itai Turbahn",
    role: "Co-founder, Dynamic",
    twitter: "https://x.com/turbahn",
    image: dynamicImg,
  },
  {
    id: "alfonso",
    name: "Alfonso Gomez Jordana",
    role: "Co-founder, Crosssmint",
    twitter: "https://x.com/alfongj",
    image: alfonsoImg,
  },
  {
    id: "kamran",
    name: "Kamran",
    role: "Co-Founder and GP MH Ventures",
    twitter: "https://x.com/0xKDOT",
    image: kamranImg,
  },
  {
    id: "ben",
    name: "Ben Chow",
    role: "Co-founder, Meteora",
    twitter: "https://x.com/hellochow",
    image: benImg,
  },
  {
    id: "daryl",
    name: "Daryl Lau",
    role: "Investor, Not3lau Capital",
    twitter: "https://x.com/Daryllautk",
    image: darylImg,
  },
  {
    id: "nick",
    name: "Nick Havryliak",
    role: "Co-founder, Assisterr",
    twitter: "https://x.com/nick_havryliak",
    image: nickImg,
  },
  {
    id: "kel",
    name: "Kel",
    role: "Investor",
    twitter: "https://x.com/kelxyz_",
    image: kelImg,
  },
  {
    id: "orca",
    name: "Nathan Davis",
    role: "CEO, Orca",
    twitter: "https://x.com/nthndvs",
    image: orcaImg,
  },
  {
    id: "marginif",
    name: "Jakob",
    role: "Temporal and MarginFi",
    twitter: "https://x.com/libsvm",
    image: marginifImg,
  },
  {
    id: "tong",
    name: "Tong",
    role: "Founder, Hologram",
    twitter: "https://x.com/tong0x?s=21&t=c5eqG",
    image: tongImg,
  },
  {
    id: "jaden",
    name: "Jaden",
    role: "Chief Architect, Aethir, Intern, hAIyez",
    twitter: "https://x.com/jadenonclouds",
    image: jadenImg,
  },
  {
    id: "mark",
    name: "Mark Rydon",
    role: "Co-founder, Aethir",
    twitter: "https://x.com/MRRydon",
    image: markImg,
  },
  {
    id: "yohei",
    name: "Yohei",
    role: "Untapped Capital, BabyAGI, Pippin",
    twitter: "https://x.com/yoheinakajima",
    image: yoheiImg,
  },
  {
    id: "yannik",
    name: "Yannik Schrade",
    role: "Co-Founder & CEO, Arcium",
    twitter: "https://x.com/yrschrade",
    image: yannikImg,
  },

  {
    id: "jjalicea",
    name: "JJ Alicea",
    role: "Partner, Anagram",
    twitter: "https://x.com/darkmarketio",
    image: jjaliceaImg,
  },
  {
    id: "max",
    name: "Max Segall",
    role: "COO, Privy",
    twitter: "https://x.com/segall_max",
    image: maxsegalImg,
  },
  {
    id: "kuleen",
    name: "Kuleen Nimkar",
    role: "AI Lead, The Solana Foundation",
    twitter: "https://x.com/knimkar",
    image: kuleenImg,
  },
  {
    id: "ejaaz",
    name: "Ejaaz",
    role: "Investor, 26cryptocapital",
    twitter: "https://x.com/cryptopunk7213",
    image: ejaazImg,
  },
  {
    id: "dave",
    name: " David Ching",
    role: "Investment & Strategic Partnership Director, Animoca Brands",
    twitter: "https://x.com/0xAbcdave",
    image: daveImg,
  },
  {
    id: "frank",
    name: "Frank",
    role: "degods",
    twitter: "https://x.com/frankdegods",
    image: frankImg,
  },
  {
    id: "threadguy",
    name: "Threadguy",
    role: "probably nothing",
    twitter: "https://x.com/notthreadguy",
    image: threadguyImg,
  },
  {
    id: "ryan",
    name: "Ryan Watkins",
    role: "Cofounder, Syncracy Capital",
    twitter: "https://x.com/RyanWatkins_",
    image: ryanImg,
  },
  {
    id: "jakey",
    name: "Jakey",
    role: "",
    twitter: "https://x.com/soljakey",
    image: soljakeyImg,
  },
  {
    id: "ansem",
    name: "Ansem",
    role: "",
    twitter: "https://x.com/blknoiz06",
    image: ansemImg,
  },
  {
    id: "matty",
    name: "Matty Tay",
    role: "Cofounder & GP, Colosseum",
    twitter: "https://x.com/mattytay",
    image: mattyImg,
  },
  {
    id: "pedro",
    name: "Pedro",
    role: "Consumer, Solana Foundation",
    twitter: "https://x.com/voteforpedrito",
    image: pedroImg,
  },
  {
    id: "tukka",
    name: "Tuukka Tuomikoski",
    role: "Investor",
    twitter: "https://x.com/PepegaQuant",
    image: tukkaImg,
  },
];

const JudgesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // To track click events on judges
  const handleJudgeClick = (judge: any) => {
    track("judge_profile_click", {
      judgeName: judge.name,
      judgeRole: judge.role,
      twitterHandle: judge.twitter,
    });
  };

  const handleSectionView = () => {
    if (isInView) {
      track("judges_section_view", {
        totalJudges: judges.length,
      });
    }
  };

  React.useEffect(() => {
    handleSectionView();
  }, [isInView]);

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

  return (
    <div className="bg-black" ref={sectionRef}>
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <ScrambleText
              text={"JUDGED AND MENTORED"}
              className="text-xl md:text-3xl lg:text-4xl font-relish text-white tracking-wider leading-none"
            />
            <motion.p
              className="text-2xl text-white font-ppsans hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              by top Crypto & AI Leaders:
            </motion.p>
          </div>
        </motion.div>

        {/* Judges Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {judges.map((judge, index) => (
            <a
              key={judge.id}
              href={judge.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleJudgeClick(judge)}
            >
              <motion.div
                key={judge.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                style={
                  {
                    "--hover-color": getColors(index),
                  } as React.CSSProperties
                }
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-[#1E1E1E] rounded-lg transition-all duration-300 group-hover:bg-[var(--hover-color)] opacity-0 group-hover:opacity-10 blur-xl"></div>

                {/* Card Container */}
                <div className="relative bg-[#1E1E1E] rounded-lg overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#353637] transition-all duration-300 group-hover:bg-[var(--hover-color)]"></div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-[#353637] transform -rotate-45 origin-top-left transition-all duration-300 group-hover:bg-[var(--hover-color)] group-hover:w-6"></div>
                  <div className="absolute top-0 right-0 w-4 h-[2px] bg-[#353637] transform rotate-45 origin-top-right transition-all duration-300 group-hover:bg-[var(--hover-color)] group-hover:w-6"></div>

                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden border-2 border-[#353637] transition-all duration-300 group-hover:border-[var(--hover-color)]">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
                  </div>

                  {/* Info Section */}
                  <div className="relative mt-3 p-2 flex items-center gap-2 bg-[#1E1E1E]">
                    <div className="flex-grow">
                      <h3 className="text-white font-mono text-sm transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                        {judge.name}
                      </h3>
                      <p className="text-gray-500 font-mono text-xs transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60">
                        {judge.role}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="ml-auto transform transition-all duration-300 group-hover:translate-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors duration-300 text-[#787B7E] group-hover:text-[var(--hover-color)]"
                      >
                        <path
                          d="M1.44057 44.4354L0.530273 43.525L21.4415 22.6138L0.530273 1.70261L1.44057 0.792236L23.2621 22.6138L1.44057 44.4354Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                        <path
                          d="M22.8008 44.4354L21.9033 43.525L42.8146 22.6138L21.9033 1.70261L22.8008 0.792236L44.6223 22.6138L22.8008 44.4354Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JudgesSection;
