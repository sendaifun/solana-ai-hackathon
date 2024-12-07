"use client";

import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import FAQCloseIcon from "@/assets/images/svgs/abstract/FAQClose.svg";
import FAQOpenIcon from "@/assets/images/svgs/abstract/FAQOpen.svg";

export default function FAQSection() {
  return (
    <div className="w-full mx-auto p-6 space-y-8 bg-black" id="faqs">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-16 mx-16">
        <div className="flex-1">
          <div className="flex gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={`left-${i}`} className="w-[2px] h-6 bg-[#787B7E]"></div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-relishGargler text-white mb-2 text-nowrap ">
            Frequently Asked <br />
            Questions
          </h2>
        </div>

        <div className="flex-1">
          <div className="flex gap-8 justify-end">
            {[...Array(8)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="w-[2px] h-6 bg-[#787B7E]"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none relative "
            >
              {/* Corner Images */}
              <Image
                src={cornerAbstract}
                alt=""
                className="absolute -left-2 -top-2 w-4 h-4"
              />
              <Image
                src={cornerAbstract}
                alt=""
                className="absolute -top-2 -right-2 w-4 h-4 rotate-90"
              />
              <Image
                src={cornerAbstract}
                alt=""
                className="absolute -bottom-2 -left-2 w-4 h-4 -rotate-90"
              />
              <Image
                src={cornerAbstract}
                alt=""
                className="absolute -bottom-2 -right-2 w-4 h-4 rotate-180"
              />

              <AccordionTrigger
                className="px-6 py-4 bg-[#000] hover:border-white rounded-none border border-white/20
                        data-[state=open]:border-cyan-400/40 data-[state=open]:bg-[#191F26] data-[state=open]:text-white transition-all group"
              >
                <span className="text-xl font-medium tracking-wider text-gray-400  font-relishGargler">
                  FREQUENTLY ASKED QUESTION - {index + 1}
                </span>
                <div className="shrink-0 ml-2">
                  {/* Custom Toggle Icons */}
                  <Image
                    src={FAQCloseIcon}
                    alt="Close FAQ"
                    className="h-6 w-6 group-data-[state=open]:hidden transition-transform"
                  />
                  <Image
                    src={FAQOpenIcon}
                    alt="Open FAQ"
                    className="h-6 w-6 hidden group-data-[state=open]:block transition-transform"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-[#191F26] border-x border-b border-cyan-400/20 text-gray-400 font-PPSans">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const faqData = [
  {
    content:
      "WE'RE WORKING ON PROVIDING YOU WITH THE MOST ACCURATE AND DETAILED INFORMATION. PLEASE CHECK BACK SOON AS THIS SECTION WILL BE UPDATED SHORTLY WITH ALL THE ANSWERS YOU NEED!",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
