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
                  {faq.question}
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
    question: "What is the Solana AI Hackathon?",
    content:
      "The Solana AI Hackathon is a global online event focused on building AI agents and tooling on Solana, powered by SEND AI and supported by leading teams in the Solana ecosystem. Prizes range from $5k to $30k, aiming to encourage serious Crypto x AI projects capable of raising VC funding or launching their own tokens.",
  },
  {
    question: "How many tracks can I submit?",
    content:
      "You can submit your project in any two tracks of your choice. For example, if you've built a Telegram group chat-based trading AI agent, you can submit it to both the DeFi Agents Track and the Trading Agents Track. All projects are automatically eligible for the Main Track, which represents the best overall project.",
  },
  {
    question: "Is there a Demo Day?",
    content: "Yes, however, the exact date and format is not decided due to christmas/new year holidays. But stay tuned, we’ve many exciting surprises 👀"
  },
  {
    question: "Do we have to integrate a particular sponsor?",
    content:
      "No, you are free to build whatever you want, as long as it aligns with the theme. However, we strongly recommend integrating our sponsor SDKs/products, as this provides priority support and opens up future collaboration opportunities.",
  },
  {
    question: "What should be the team size?",
    content:
      "1-5. You can submit entries either individually or as part of a team of 2-5 members. Ideally, we recommend a mix of AI developers, crypto developers, and marketing/business professionals. However, the product you deliver >> the team.",
  },
  {
    question: "When will the submission open?",
    content:
      "Submissions will open on 15th December via a form where you can provide all your project details, including your GitHub repository, a 2-minute demo/pitch, a 10-slide pitch deck, and more.",
  },
  {
    question: "What's the judging criteria?",
    content:
      "Just like any pitch competition, you'll be judged on: 1) Product demo and pitch 2) Business viability 3) AI models used 4) Solana integrations 5) Potential impact 6) Traction and marketing 7) Innovation (the crazier, the better). Bonus points will be awarded for integrating sponsor solutions and open-sourcing products. Category-defining products will be given higher preference.",
  },
  {
    question: "Who will own the IP of the project?",
    content:
      "It's 100% yours. You retain complete responsibility for your idea and project IP.",
  },
  {
    question: "Where can I access all mentorship and meet other teams?",
    content: "Telegram! Join the Solana AI Hackathon telegram to stay updated.",
  },
  {
    question: "Is it completely online?",
    content:
      "While the interaction submissions are online, there will be 6-10 IRL pop-ups around the world via local Superteam chapters and Superhosts –– to help you connect with builders.",
  },
  {
    question: "Who's organising this?",
    content:
      "This is a Solana ecosystem-led hackathon, with prizes contributed by top ecosystem teams and curated by SEND AI. P.S: The Solana Foundation is just one of the sponsors.",
  },
  {
    question:
      "Will all projects who submit a hackathon project receive feedback?",
    content:
      "We can't guarantee, but depending on the volume of hackathon submissions we receive, we will try our best to ensure all project submissions will be reviewed by the SEND AI team and/or the judging panel.",
  },
  {
    question: "May I submit multiple projects?",
    content:
      "Yes, you can submit multiple projects. However, we recommend focusing on a single project, as the hackathon will be highly competitive. This approach allows you to concentrate on developing your best product concept and maximizing your chances of winning at least one prize!",
  },
  {
    question: "Where can I ask technical questions during the hackathon?",
    content:
      "In the telegram group. Further, feel free to use twitter as a cheat code –– you can directly post your questions as a tweet and just tag @sendaifun, we'll tag relevant experts.",
  },

  {
    question: "Is there any registration for the hackathon?",
    content:
      "No. You can directly join the telegram and start building. You need to directly submit in the submissions form, which opens on 15th November.",
  },
];
