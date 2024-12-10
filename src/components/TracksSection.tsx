'use client';

import { useState } from 'react';
import { Trophy } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Network,
  MessageSquare,
  Brain,
  Layers,
  TrendingUp,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const trackData = [
  {
    id: 1,
    title: 'TRACKS',
    subtitle: ['Build the best overall AI', 'Agents to win the Main Prize'],
    amount: '$40,000',
    color: 'yellow-400',
    borderColor: 'bg-yellow-400',
    gradient: 'from-yellow-400/20 via-yellow-400/10 to-transparent',
    prizes: { first: 25000, second: 15000 },
  },
  {
    id: 2,
    title: 'TRACKS',
    subtitle: ['Build the coolest AI', 'Agents across 6 Themes'],
    amount: '$40,000',
    borderColor: 'bg-cyan-400',
    gradient: 'from-cyan-400/20 via-cyan-400/10 to-transparent',
    prizes: { first: 25000, second: 15000 },
  },
];

const agentTabs = [
  {
    value: 'aggregators',
    label: 'Agent Aggregators',
    icon: Network,
  },
  {
    value: 'conversational',
    label: 'Conversational Agents',
    icon: MessageSquare,
  },
  {
    value: 'tooling',
    label: 'Agent Tooling',
    icon: Brain,
  },
  {
    value: 'infra',
    label: 'Agent Infra',
    icon: Layers,
  },
  {
    value: 'defi',
    label: 'DeFi Agents',
    icon: TrendingUp,
  },
];

const TrackCard = ({ data }: { data: (typeof trackData)[number] }) => (
  <Card className='relative w-full bg-gray-900/70 border-none'>
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-r rounded-lg',
        data.gradient
      )}
    />
    <div
      className={cn('absolute left-0 top-0 bottom-0 w-1', data.borderColor)}
    />
    <CardContent className='p-4 md:p-6 lg:p-8 relative'>
      {/* Mobile Layout */}
      <div className='lg:hidden'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-4xl md:text-5xl font-relishGargler font-bold text-white'>
            {data.amount}
          </h3>
          <div className='flex items-center gap-2'>
            <span className='text-gray-300 text-sm font-PPSans'>by</span>
            <div className='h-4 w-16 bg-gray-700' />
          </div>
        </div>

        <div className='space-y-4 mb-6'>
          {/* First Prize */}
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Trophy className='h-5 w-5 text-white hidden md:block' />
              <span className='text-white text-lg font-PPSans'>1st Prize</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-20 h-2 bg-gray-800'>
                <div className='w-full h-full bg-gray-600' />
              </div>
              <span className='text-white text-lg whitespace-nowrap font-relishGargler'>
                ${data.prizes.first.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Second Prize */}
          <div className='flex items-center justify-between gap-2'>
            <span className='text-white text-lg font-PPSans'>2nd Prize</span>
            <div className='flex items-center gap-2'>
              <div className='w-20 h-2 bg-gray-800'>
                <div className='w-3/5 h-full bg-gray-600' />
              </div>
              <span className='text-white text-lg whitespace-nowrap font-relishGargler'>
                ${data.prizes.second.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className='text-gray-500 text-sm mb-3'>Supported by</p>
          <div className='grid grid-cols-2 gap-4'>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className='h-6 bg-gray-700' />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='hidden lg:grid grid-cols-2 gap-8'>
        <div>
          <h3 className='text-6xl font-relishGargler font-bold text-white mb-6'>
            {data.amount}
          </h3>
          <div className='flex items-center gap-3 mb-12'>
            <span className='text-gray-300'>Main Track by</span>
            <div className='h-6 w-24 bg-gray-700' />
          </div>
          <div>
            <p className='text-gray-500 mb-4'>Supported by</p>
            <div className='grid grid-cols-2 gap-6'>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className='h-8 bg-gray-700' />
              ))}
            </div>
          </div>
        </div>
        <div className='space-y-8'>
          {/* First Prize */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <Trophy className='h-6 w-6 text-white' />
              <span className='text-white text-xl'>First Main Prize</span>
            </div>
            <div className='flex items-center gap-4'>
              <div className='w-32 h-2 bg-gray-800'>
                <div className='w-full h-full bg-gray-600' />
              </div>
              <span className='text-white text-xl font-relishGargler'>
                ${data.prizes.first.toLocaleString()}
              </span>
            </div>
          </div>
          {/* Second Prize */}
          <div className='flex items-center justify-between gap-4'>
            <span className='text-white text-xl ml-9'>Second Prize</span>
            <div className='flex items-center gap-4'>
              <div className='w-32 h-2 bg-gray-800'>
                <div className='w-3/5 h-full bg-gray-600' />
              </div>
              <span className='text-white text-xl font-relishGargler'>
                ${data.prizes.second.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TracksSection = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeTab, setActiveTab] = useState('aggregators');

  return (
    <div className='bg-black py-12 md:py-20' id='tracks'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col gap-2'>
          <SectionHeading
            title={trackData[activeTrack].title}
            subtitle={trackData[activeTrack].subtitle}
          />
        </div>

        {/* Tabs */}
        <div className='my-6 md:my-8'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='w-full h-auto bg-transparent justify-between p-0 space-x-2 md:space-x-4 overflow-x-auto flex-nowrap'>
              {agentTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className='flex-none md:flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-3 text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:shadow-inner transition-colors duration-200 bg-black whitespace-nowrap'
                  >
                    <Icon className='h-4 w-4 md:h-5 md:w-5' />
                    <span className='font-mono text-xs md:text-sm'>
                      {tab.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Carousel */}
        <div className='max-w-[90%] md:max-w-full mx-auto'>
          <Carousel
            opts={{
              loop: true,
            }}
            className='w-full'
            onSelect={(index: any) => setActiveTrack(index)}
          >
            <CarouselContent>
              {trackData.map((track) => (
                <CarouselItem key={track.id}>
                  <TrackCard data={track} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div>
              {/* Desktop Arrows */}
              <CarouselPrevious className='hidden lg:flex -left-12 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50' />
              <CarouselNext className='hidden lg:flex -right-12 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50' />
              {/* Mobile/Tablet Arrows */}
              <CarouselPrevious className='lg:hidden h-8 w-8 -left-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50' />
              <CarouselNext className='lg:hidden h-8 w-8 -right-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50' />
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className='flex justify-center gap-2 mt-4 md:mt-6'>
            {trackData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTrack(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === activeTrack
                    ? `w-8 ${trackData[index].borderColor}`
                    : 'bg-gray-600 hover:bg-gray-500'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
