"use client";

import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Agent = () => {
  const agentTypes = [
    {
      title: "tinyTest Agent",
      description:
        "Test agent for evaluating autonomous task execution and decision-making capabilities on Solana.",
      image: "/images/upIxz9g.png", // Replace with actual image URL
      status: "active",
    },
    {
      title: "macroFlow Agent",
      description:
        "Automates complex workflows and monitors performance on the blockchain.",
      image: "/images/img2.png", // Replace with actual image URL
      status: "active",
    },
    {
      title: "dataSync Agent",
      description:
        "Handles synchronization of decentralized data streams in real-time on the blockchain.",
      image: "/images/images.jpeg", // Replace with actual image URL
      status: "inactive",
    },
  ];
  // Refs for animation
  const headerRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Slide animation for header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );
    }

    // Staggered animation for stats section
    if (statsRef.current?.children) {
      const statElements = Array.from(statsRef.current.children); // Convert HTMLCollection to Array
      gsap.fromTo(
        statElements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.5,
        }
      );
    }

    // Fade-in animation for cards
    if (cardsRef.current?.children) {
      const cardElements = Array.from(cardsRef.current.children); // Convert HTMLCollection to Array
      gsap.fromTo(
        cardElements,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col items-center md:px-6 py-10">
      {/* Header */}
      <h1
        ref={headerRef}
        className="text-5xl font-bold text-foreground font-space-grotesk mb-4"
      >
        Test Agent Platform
      </h1>
      <p className="text-white text-lg mb-10">
        Deploy and test autonomous AI agents on Solana
      </p>
      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3  w-full md:w-fit gap-6 justify-center mb-12"
      >
        {[
          { title: "Interactions", value: "2.4k" },
          { title: "Test Usage", value: "85%" },
          { title: "Uptime", value: "99.9%" },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-[#2f8ca3]/70 backdrop-blur-xl border border-white/60 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <p className="text-xl font-semibold">{stat.value}</p>
            <p className="text-white">{stat.title}</p>
          </div>
        ))}
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 w-full h-full md:max-w-7xl md:grid-cols-3 gap-10"
      >
        {agentTypes.map((agent, idx) => (
          <MagicCard
            key={idx}
            className="cursor-pointer hover:shadow-2xl hover:scale-[1.03] duration-300 transition border border-white/20 backdrop-blur-lg rounded-xl shadow-lg flex-col p-7 items-center justify-between text-4xl"
            gradientColor={"#5FB9B077"}
          >
            <div className="relative mb-4">
              <Image
                width={500}
                height={500}
                src={agent.image}
                alt={agent.title}
                className="rounded-lg object-cover aspect-video size-full"
              />
              <div
                className={`absolute top-3 right-3 text-sm px-2 py-1 rounded ${
                  agent.status === "active"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {agent.status}
              </div>
            </div>

            {/* Agent Details */}
            <h2 className="text-2xl font-semibold mb-2">{agent.title}</h2>
            <p className="text-gray-300 text-lg mb-4">{agent.description}</p>

            {/* Connect Wallet Button */}
            <button className="w-full text-base bg-foreground hover:bg-white hover:text-foreground text-white py-2 rounded-lg font-medium transition">
              Connect Wallet
            </button>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Agent;
