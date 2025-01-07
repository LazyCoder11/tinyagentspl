"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpIcon, ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const itemsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Animate opening and closing
    if (activeItem && itemsRef.current[activeItem]) {
      gsap.to(itemsRef.current[activeItem], {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
        onStart: () => {
          itemsRef.current[activeItem]?.classList.add("open");
        },
      });
    }

    Object.keys(itemsRef.current).forEach((key) => {
      if (key !== activeItem) {
        gsap.to(itemsRef.current[key], {
          height: -20,
          duration: 0.4,
          ease: "power2.Out",
          onComplete: () => {
            itemsRef.current[key]?.classList.remove("open");
          },
        });
      }
    });
  }, [activeItem]);

  const toggleItem = (item: string) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <div className="max-w-4xl rounded-md">
      <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-10 flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions
      </h2>
      <div className="space-y-5 text-white rounded-xl">
        {[
          {
            id: "item-1",
            question: "What is State Compression on Solana?",
            answer:
              "State Compression on Solana is a feature that allows efficient data storage on-chain by reducing the size of state data while maintaining functionality.",
          },
          {
            id: "item-2",
            question: "How do AI Agents work with State Compression?",
            answer:
              "AI Agents leverage State Compression to quickly process and analyze large volumes of data stored on Solana without excessive resource usage.",
          },
          {
            id: "item-3",
            question: "What types of Agents are available?",
            answer:
              "Various types of Agents are available, including decision-making, data analysis, and automation Agents.",
          },
          {
            id: "item-4",
            question: "How is security handled?",
            answer:
              "Security is ensured through encryption, access controls, and adherence to Solana's robust security framework.",
          },
        ].map(({ id, question, answer }) => (
          <div
            key={id}
            className={`${
              activeItem === id ? "navbar-shadow" : ""
            } flex flex-col justify-center gap-5 bg-[#2f8ca3] px-6 py-3 rounded-xl`}
          >
            <button
              className={`w-full -mb-5 flex justify-between h-fit py-2 text-lg font-semibold text-left`}
              onClick={() => toggleItem(id)}
            >
              {question}
              {activeItem === id ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              ref={(el) => {
                if (el) {
                  itemsRef.current[id] = el;
                }
              }}
              className="overflow-hidden h-0"
            >
              <p className="text-gray-200">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
