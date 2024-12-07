"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import aiHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000] text-white font-PPSans w-full">
      <div className="sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center">
              {/* <span className="text-lg font-bold font-relishGargler">SOLANA</span>
              <span className="ml-2 text-lg">HACKATHON</span> */}
              <Image
                src={aiHackathonLogo}
                alt="Hackathon Logo"
                width={160}
                height={50}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white font-PPSans"
              >
                Tracks
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Ideas
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Resources
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                FAQs
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[#1E262C] text-[#1BE1FF] px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Tracks
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-white bg-gray-900"
            >
              Ideas
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              FAQs
            </a>
            <a
              href="#"
              className="bg-[#1E262C] text-[#1BE1FF] px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComp;
