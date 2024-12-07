"use client";

import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import aiHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const NavLinks = ({ mobile }: { mobile?: boolean }) => (
  <>
    <a
      href="/#tracks"
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? "text-xl text-center py-4" : ""
      }`}
    >
      Tracks
    </a>
    <a
      href="/#"
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? "text-xl text-center py-4" : ""
      }`}
    >
      Ideas
    </a>
    <a
      href="/#"
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? "text-xl text-center py-4" : ""
      }`}
    >
      Resources
    </a>
    <a
      href="/faq#faqs"
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? "text-xl text-center py-4" : ""
      }`}
    >
      FAQs
    </a>
  </>
);

const JoinButton = ({ mobile }: { mobile?: boolean }) => (
  <a
    href="#"
    className={`bg-[#1E252B] text-[#1BE1FF] font-medium px-4 py-3 rounded-md transition-colors text-center
      ${mobile ? "w-full text-lg" : ""}
    `}
  >
    Join Now
  </a>
);

const NavbarComp = () => {
  return (
    <nav className="bg-[#000] text-white font-PPSans w-full">
      <div className="sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center cursor-pointer mx-2">
            <Link href="/">
              <Image
                src={aiHackathonLogo}
                alt="Hackathon Logo"
                width={160}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Desktop Join Button */}
          <div className="hidden md:block">
            <JoinButton />
          </div>

          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none mx-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-fit bg-black border-gray-800 p-0"
              >
                <div className="flex flex-col h-fit pt-8">
                  {/* Navigation Links */}
                  <div className="flex-1 py-8">
                    <div className="flex flex-col items-center">
                      <NavLinks mobile />
                    </div>
                  </div>

                  {/* Join Button */}
                  {/* <div className="p-8 border-t border-gray-800">
                    <JoinButton mobile />
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
