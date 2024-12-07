// "use client";

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import aiHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";

// const NavbarComp = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#000] text-white font-PPSans w-full">
//       <div className="sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo and Brand */}
//           <div className="flex items-center cursor-pointer mx-2">
//             <div className="flex items-center">
//               {/* <span className="text-lg font-bold font-relishGargler">SOLANA</span>
//               <span className="ml-2 text-lg">HACKATHON</span> */}
//               <Image
//                 src={aiHackathonLogo}
//                 alt="Hackathon Logo"
//                 width={160}
//                 height={50}
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-white font-PPSans"
//               >
//                 Tracks
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 Ideas
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 Resources
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 FAQs
//               </a>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <a
//               href="#"
//               className="bg-[#1E262C] text-[#1BE1FF] px-4 py-2 rounded-md hover:bg-gray-700"
//             >
//               Join Now
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden mx-2">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
//             >
//               {isOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//             >
//               Tracks
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-grauy-300 hover:text-white hover:bg-gray-700"
//             >
//               Ideas
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//             >
//               Resources
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//             >
//               FAQs
//             </a>
//             <a
//               href="#"
//               className="bg-[#1E262C] text-[#1BE1FF] px-4 py-2 my-4 rounded-md hover:bg-gray-700 text-center"
//             >
//               Join Now
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavbarComp;



"use client";
"use client";

import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import aiHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLinks = ({ mobile }: { mobile?: boolean }) => (
  <>
    <a 
      href="#" 
      className={`text-gray-300 hover:text-white transition-colors ${mobile ? 'text-xl text-center py-4' : ''}`}
    >
      Tracks
    </a>
    <a 
      href="#" 
      className={`text-gray-300 hover:text-white transition-colors ${mobile ? 'text-xl text-center py-4' : ''}`}
    >
      Ideas
    </a>
    <a 
      href="#" 
      className={`text-gray-300 hover:text-white transition-colors ${mobile ? 'text-xl text-center py-4' : ''}`}
    >
      Resources
    </a>
    <a 
      href="#" 
      className={`text-gray-300 hover:text-white transition-colors ${mobile ? 'text-xl text-center py-4' : ''}`}
    >
      FAQs
    </a>
  </>
);

const JoinButton = ({ mobile }: { mobile?: boolean }) => (
  <a
    href="#"
    className={`bg-[#1E252B] text-[#1BE1FF] font-medium px-4 py-3 rounded-md transition-colors text-center
      ${mobile ? 'w-full text-lg' : ''}
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
            <Image
              src={aiHackathonLogo}
              alt="Hackathon Logo"
              width={160}
              height={50}
            />
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
                <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
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