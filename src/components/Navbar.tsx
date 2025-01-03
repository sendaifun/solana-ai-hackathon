"use client";

import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import aiHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ScrambleText } from "@/components/ui/scramble-text";
import { track } from "@vercel/analytics";

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const handleNavClick = (linkName: string) => {
    track("navigation_click", {
      linkName,
      platform: mobile ? "mobile" : "desktop",
    });
  };

  return (
    <>
      <Link href="/#tracks" onClick={() => handleNavClick("tracks")}>
        <ScrambleText
          text="Tracks"
          className={`text-gray-300 hover:text-white transition-colors z-30 ${
            mobile ? "text-xl text-center py-4" : ""
          }`}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.sendai.fun/ideas"
        onClick={() => handleNavClick("ideas")}
      >
        <ScrambleText
          text="Ideas"
          className={`text-gray-300 hover:text-white transition-colors ${
            mobile ? "text-xl text-center py-4" : ""
          }`}
        />
      </Link>
      <Link
        href="/resources"
        onClick={() => handleNavClick("resources")}
      >
        <ScrambleText
          text="Resources"
          className={`text-gray-300 hover:text-white transition-colors ${
            mobile ? "text-xl text-center py-4" : ""
          }`}
        />
      </Link>
      <Link href="/faq#faqs" onClick={() => handleNavClick("faqs")}>
        <ScrambleText
          text="FAQs"
          className={`text-gray-300 hover:text-white transition-colors ${
            mobile ? "text-xl text-center py-4" : ""
          }`}
        />
      </Link>
    </>
  );
};

const JoinButton = ({ mobile }: { mobile?: boolean }) => (
  <Link
    target="_blank"
    href="https://t.me/solana_ai_hackathon"
    rel="noopener noreferrer"
    onClick={() =>
      track("join_telegram_click", { platform: mobile ? "mobile" : "desktop" })
    }
  >
    <ScrambleText
      text="Join Telegram Chat"
      className={`bg-[#1E252B] text-[#1BE1FF] font-medium px-4 py-3 rounded-md transition-colors text-center
        ${mobile ? "w-full text-lg" : ""}
      `}
    />
  </Link>
);

const NavbarComp = () => {
  return (
    <nav className="bg-[#000] text-white font-PPSans w-full">
      <div className="sm:px-6 lg:px-8 py-1 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center cursor-pointer mx-2">
            <Link href="/" onClick={() => track("logo_click")}>
              <div className="h-10 w-10">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2C29.9411 2 38 10.0589 38 20ZM26.6815 5.9959C31.0718 8.09435 34.3212 12.1966 35.2457 17.1188C35.4111 17.9995 35.3358 19.0209 34.9592 19.6987C34.5826 20.3766 33.6809 21.0444 32.8664 21.534C32.2212 21.9218 31.3873 22.2896 30.3885 22.6182C30.0246 22.7379 29.8426 22.7977 29.7166 22.7019C29.5905 22.606 29.5999 22.4083 29.6186 22.0128V22.0128C29.6508 21.3345 29.6661 20.6463 29.6661 19.9518C29.6661 18.8051 29.5964 17.685 29.4635 16.6037C30.2206 16.3981 31.5154 15.7507 32.1628 15.2652C31.6479 13.463 29.2442 9.28505 26.3268 6.65896C25.464 5.88228 25.0326 5.49395 25.1051 5.38553C25.1776 5.27711 25.6789 5.5167 26.6815 5.9959ZM18.6862 6.46259C18.7584 6.51062 18.7584 6.61337 18.7584 6.81885V13.4906C17.0422 13.5357 15.3932 13.6735 13.8554 13.892C13.6537 13.9207 13.5529 13.935 13.4992 13.875C13.4455 13.8149 13.4705 13.7179 13.5206 13.5238C13.8136 12.3888 14.1887 11.3499 14.6401 10.4317C15.6187 8.44082 16.8857 7.13926 18.3418 6.52867C18.5233 6.4526 18.614 6.41456 18.6862 6.46259ZM14.2823 16.3437C15.6724 16.1493 17.1767 16.0226 18.7584 15.9788V17.7616H18.7624V17.8005C20.4195 17.8707 22.1836 17.8206 23.5643 17.7345C23.6143 18.4563 23.6402 19.1965 23.6402 19.9508C23.6402 21.3327 23.5896 22.6565 23.4845 23.9011L23.4789 23.9015C23.4076 24.7847 23.3109 25.5784 23.1658 26.419L23.1778 26.4181C22.9451 27.8345 22.6211 29.1002 22.1979 30.1726C21.1917 32.7219 19.8309 33.7558 18.2038 33.7558C17.7915 33.7558 17.2361 33.5564 16.5672 32.8905C15.9022 32.2284 15.2439 31.2147 14.6635 29.8945C14.6124 29.7781 14.562 29.6599 14.5126 29.5398C14.2959 29.0142 13.8294 28.6276 13.2673 28.5424C13.0868 28.515 12.873 28.4808 12.648 28.4433C11.966 28.3296 11.625 28.2727 11.4591 28.4723C11.2932 28.6718 11.4065 28.983 11.6329 29.6056C11.7851 30.0239 11.9467 30.428 12.1173 30.8159C12.5423 31.7827 13.0342 32.6757 13.5924 33.4461C13.9195 33.8976 14.0831 34.1234 14.0075 34.2135C13.9319 34.3035 13.6922 34.1867 13.2128 33.9531C8.87618 31.8397 5.67157 27.7641 4.75441 22.8816C4.81098 22.9304 4.86838 22.9782 4.92647 23.025C5.86719 23.7823 7.15231 24.4094 8.62998 24.9125C8.99597 25.0372 9.37893 25.1559 9.77562 25.2677C9.81139 25.2773 9.86394 25.2913 9.93016 25.3088C10.0627 25.3438 10.2494 25.3926 10.4654 25.4476C10.9011 25.5584 11.4414 25.6905 11.8938 25.7853C12.2906 25.8685 12.8822 25.9665 13.4332 26.0516L13.4319 26.0457C14.8939 26.2706 16.7881 26.4196 18.6052 26.4847C19.7736 26.5265 20.7925 25.7003 20.9204 24.5381C20.95 24.27 20.7355 24.0336 20.4658 24.0364C20.3111 24.038 20.1558 24.0388 20 24.0388C17.8838 24.0388 15.8823 23.8906 14.0784 23.6276C13.5562 23.5514 13.2951 23.5134 13.1151 23.3222C12.9352 23.131 12.9131 22.8695 12.8688 22.3464C12.8022 21.5588 12.7673 20.7573 12.7673 19.9508C12.7673 19.2475 12.7909 18.5582 12.8374 17.8861C12.8807 17.2582 12.9024 16.9443 13.1209 16.7099C13.3395 16.4756 13.6537 16.4316 14.2823 16.3437ZM10.0969 22.0294C10.0501 21.3413 10.026 20.6468 10.026 19.9508C10.026 19.3266 10.0433 18.7087 10.0782 18.0994C10.1015 17.6914 10.1131 17.4875 9.98447 17.3905C9.85583 17.2936 9.67017 17.3585 9.29882 17.4882L9.24752 17.5063C7.97643 17.955 7.03897 18.4557 6.44344 18.9478C5.83952 19.4468 5.73091 19.8085 5.73091 20.0002C5.73091 20.1965 5.84577 20.572 6.48621 21.0876C7.11547 21.5941 8.10213 22.1053 9.43171 22.558C9.69397 22.6473 9.8251 22.692 9.92747 22.6521C9.9806 22.6315 10.0277 22.5952 10.0614 22.5492C10.1262 22.4606 10.1164 22.3168 10.0969 22.0294ZM10.7407 13.4051C11.0823 11.9602 11.5472 10.6175 12.1365 9.41857C12.7118 8.24815 13.424 7.18298 14.2797 6.2945C14.7808 5.77414 15.0314 5.51396 14.9617 5.41265C14.8919 5.31135 14.5752 5.44582 13.9418 5.71478L13.9418 5.71478C9.23714 7.71248 5.72205 11.9664 4.75433 17.1188C4.78894 17.089 4.82387 17.0595 4.85906 17.0304C5.76389 16.2827 6.99956 15.6621 8.41954 15.1608C8.72916 15.0515 9.05076 14.9468 9.38353 14.8468C9.93436 14.6814 10.2098 14.5986 10.3758 14.4224C10.5417 14.2462 10.608 13.9658 10.7407 13.4051ZM25.3883 34.4647C25.3157 34.3667 25.561 34.0891 26.0516 33.534C26.6523 32.8542 27.1697 32.0644 27.6074 31.1853C28.2631 29.8683 28.7407 28.3538 29.0699 26.7086C29.1875 26.121 29.2462 25.8272 29.4167 25.6413C29.5871 25.4553 29.8751 25.3711 30.4509 25.2027C31.8874 24.7826 33.1466 24.2676 34.1479 23.6657C34.2876 23.5817 34.4259 23.4937 34.5616 23.4017C34.867 23.1947 35.0197 23.0912 35.1046 23.1503C35.1895 23.2094 35.1475 23.3802 35.0634 23.7217C33.9203 28.3639 30.6873 32.1838 26.4193 34.1264C25.7803 34.4172 25.4608 34.5627 25.3883 34.4647Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              {/* <Image
                src={aiHackathonLogo}
                alt='Hackathon Logo'
                width={160}
                height={50}
              /> */}
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
