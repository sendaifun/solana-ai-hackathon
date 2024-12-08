'use client';

import { motion, useInView } from 'framer-motion';
import {
  Trophy,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useRef, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Brain,
  Code2,
  Coins,
  Gamepad2,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PrizeCard from './ui/PrizeCard';

// Dummy SVG Logos
const SolanaFoundationLogo = () => (
  <svg width='120' height='16' viewBox='0 0 120 16' fill='none'>
    <path d='M20 4H0V6H20V4Z' fill='currentColor' />
    <path d='M20 7H0V9H20V7Z' fill='currentColor' />
    <path d='M0 10H20V12H0V10Z' fill='currentColor' />
    <path d='M40 4H25V6H40V4Z' fill='currentColor' />
    <path d='M40 7H25V12H40V7Z' fill='currentColor' />
  </svg>
);

const DialectLogo = () => (
  <svg width='120' height='16' viewBox='0 0 120 16' fill='none'>
    <path d='M15 4H0V12H15V4Z' fill='currentColor' />
    <path d='M35 4H20V12H35V4Z' fill='currentColor' />
  </svg>
);

const HeliusLogo = () => (
  <svg width='120' height='16' viewBox='0 0 120 16' fill='none'>
    <path d='M10 4H0V12H10V4Z' fill='currentColor' />
    <path d='M25 4H15V12H25V4Z' fill='currentColor' />
    <path d='M40 4H30V12H40V4Z' fill='currentColor' />
  </svg>
);

const BackpackLogo = () => (
  <svg width='120' height='16' viewBox='0 0 120 16' fill='none'>
    <path d='M20 4H0V12H20V4Z' fill='currentColor' />
    <circle cx='30' cy='8' r='4' fill='currentColor' />
  </svg>
);

// Use these logos in the components
const logos = [
  { component: SolanaFoundationLogo },
  { component: DialectLogo },
  { component: HeliusLogo },
  { component: BackpackLogo },
];

const trackTabs = [
  {
    title: 'Agent Aggregators',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M12 4L4 8L12 12L20 8L12 4Z' />
        <path d='M4 16L12 20L20 16' />
        <path d='M4 12L12 16L20 12' />
      </svg>
    ),
  },
  {
    title: 'Conversational Agents',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z' />
      </svg>
    ),
  },
  {
    title: 'Agent Tooling',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
      </svg>
    ),
  },
  {
    title: 'Agent Infra',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M22 12H2M22 12L16 6M22 12L16 18' />
      </svg>
    ),
  },
  {
    title: 'DeFi Agents',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12' />
      </svg>
    ),
  },
];

const tracksPrizeData = [
  {
    totalPrize: '$15,000',
    mainSponsor: {
      title: 'Track',
      logo: SolanaFoundationLogo,
    },
    prizes: [
      {
        title: '1st Prize',
        amount: '$10,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: '2nd Prize',
        amount: '$5,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#1BE1FF',
    title: 'Agent Aggregators',
    description:
      'Build AI agents that can aggregate and orchestrate multiple specialized agents to solve complex tasks.',
  },
  {
    totalPrize: '$15,000',
    mainSponsor: {
      title: 'Track',
      logo: DialectLogo,
    },
    prizes: [
      {
        title: '1st Prize',
        amount: '$10,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: '2nd Prize',
        amount: '$5,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#FF1B1B',
    title: 'Conversational Agents',
    description:
      'Create AI agents that can engage in natural language conversations and assist users effectively.',
  },
  {
    totalPrize: '$15,000',
    mainSponsor: {
      title: 'Track',
      logo: HeliusLogo,
    },
    prizes: [
      {
        title: '1st Prize',
        amount: '$10,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: '2nd Prize',
        amount: '$5,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#00FF85',
    title: 'Agent Tooling',
    description:
      'Develop tools and infrastructure to help build, test, and deploy AI agents on Solana.',
  },
  {
    totalPrize: '$15,000',
    mainSponsor: {
      title: 'Track',
      logo: BackpackLogo,
    },
    prizes: [
      {
        title: '1st Prize',
        amount: '$10,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: '2nd Prize',
        amount: '$5,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#A855F7',
    title: 'Agent Infra',
    description:
      'Build infrastructure components that enable AI agents to interact with the Solana blockchain.',
  },
  {
    totalPrize: '$15,000',
    mainSponsor: {
      title: 'Track',
      logo: SolanaFoundationLogo,
    },
    prizes: [
      {
        title: '1st Prize',
        amount: '$10,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: '2nd Prize',
        amount: '$5,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#F59E0B',
    title: 'DeFi Agents',
    description:
      'Create AI agents that can interact with DeFi protocols and execute complex financial strategies.',
  },
];

const Section3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);

  const grandPrizeData = {
    totalPrize: '$40,000',
    mainSponsor: {
      title: 'Main Track',
      logo: SolanaFoundationLogo,
    },
    prizes: [
      {
        title: 'First Grand Prize',
        amount: '$25,000',
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: 'Second Prize',
        amount: '$15,000',
        progressPercentage: 60,
      },
    ],
    supporters: logos,
    accentColor: '#1BE1FF',
  };

  return (
    <div className='bg-black' ref={sectionRef}>
      <div className='max-w-6xl mx-auto px-6 flex flex-col gap-16 md:gap-24'>
        <div className='w-full flex flex-col gap-8 md:gap-12'>
          <SectionHeading
            title='GRAND PRIZE'
            subtitle={[
              'Build the best overall AI',
              'Agents to win the Grand Prize',
            ]}
          />
          <PrizeCard {...grandPrizeData} isInView={isInView} />
        </div>
        <div className='w-full flex flex-col gap-8 md:gap-12'>
          <SectionHeading
            title='TRACKS'
            subtitle={['Build the coolest AI', ' Agents across 6 Themes']}
          />
          <div className='flex flex-col gap-12'>
            <div className='flex space-x-12'>
              {trackTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    'group flex items-center gap-2.5 py-2 transition-colors duration-200',
                    activeTab === index
                      ? 'text-white'
                      : 'text-[#878A8C] hover:text-gray-300'
                  )}
                >
                  <span
                    className={cn(
                      'transition-colors duration-200',
                      activeTab === index
                        ? 'text-white'
                        : 'text-[#878A8C] group-hover:text-gray-300'
                    )}
                  >
                    {tab.icon}
                  </span>
                  <span className='text-sm md:text-lg font-ppsans whitespace-nowrap'>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
            <div className='relative min-h-[360px]'>
              {tracksPrizeData.map((track, index) => (
                <motion.div
                  key={index}
                  className='absolute w-full'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                    pointerEvents: activeTab === index ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <PrizeCard
                    {...track}
                    isInView={isInView && activeTab === index}
                  />
                </motion.div>
              ))}
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
