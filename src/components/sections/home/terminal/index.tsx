"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";

const Terminal = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "AgentSPL.",
      className: "text-[#5fb9b0]",
    },
  ];
  return (
    <div className="w-full max-w-5xl bg-background my-20 mx-auto relative p-2 md:p-4 rounded-2xl border border-foreground">
      <div className="absolute top-0 left-0 size-full rounded-2xl terminal-shadow opacity-50 backdrop-blur-2xl -z-10"></div>
      <div className="horizontal-border w-full h-[1px] absolute top-0 right-0"></div>
      <div className="bg-background border-foreground border backdrop-blur-2xl bg-opacity-5 rounded-xl shadow-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#5fb9b0] mac-header bg-opacity-50 p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-white text-sm">
            AgentSPL Terminal
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-400">
              <span className="text-green-400 font-mono mr-2">$</span>
              <span className="text-foreground font-mono">welcome.sh</span>
            </div>
            <div className="space-y-1">
              <TypewriterEffectSmooth
                cursorClassName="bg-[#5fb9b0]"
                className="font-space-grotesk text-2xl md:text-5xl"
                words={words}
              />
              <p className="text-gray-400">
                Deploy autonomous AI agents on Solana
              </p>
            </div>
          </div>

          {/* Status Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
            className="space-y-2"
          >
            <div className="flex items-center text-gray-400">
              <span className="text-green-400 font-mono mr-2">$</span>
              <span className="text-blue-400 font-mono">status</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#5fb9b0]/20 hover:bg-[#5fb9b0]/50 transition duration-300 border-foreground border p-4 rounded-xl">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-white font-space-grotesk">
                      Network:
                    </span>
                  </div>
                  <span className="bg-green-200/30 rounded-lg py-1 px-2 text-green-400">
                    Connected
                  </span>
                </div>
              </div>
              <div className="bg-[#5fb9b0]/20 hover:bg-[#5fb9b0]/50 transition duration-300 border-foreground border p-4 rounded-xl">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-white font-space-grotesk">
                      Agents:
                    </span>
                  </div>
                  <span className="bg-blue-200/30 rounded-lg py-1 px-2 text-blue-200">
                    Ready
                  </span>
                </div>
              </div>
              <div className="bg-[#5fb9b0]/20 hover:bg-[#5fb9b0]/50 transition duration-300 border-foreground border p-4 rounded-xl">
                <div className="flex justify-between items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-white font-space-grotesk">
                      Status:
                    </span>
                  </div>
                  <span className="bg-purple-200/30 rounded-lg py-1 px-2 text-purple-200">
                    Online (Test Mode)
                  </span>
                </div>
              </div>
              <div className="bg-[#5fb9b0]/20 hover:bg-[#5fb9b0]/50 transition duration-300 border-foreground border p-4 rounded-xl">
                <div className="flex justify-between items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-white font-space-grotesk">
                      Version:
                    </span>
                  </div>
                  <span className="bg-yellow-200/30 rounded-lg py-1 px-2 text-yellow-400">
                    1.0.0
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "backOut" }}
            className="space-y-2"
          >
            <div className="flex items-center font-mono text-gray-400">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-blue-400">help</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#5fb9b0]/20 border-foreground border p-4 rounded-lg flex justify-between items-center">
                <div className="text-yellow-400 mr-4 font-mono">$ agents</div>
                <div className="text-gray-400">List all available agents</div>
              </div>
              <div className="bg-[#5fb9b0]/20 border-foreground border p-4 rounded-lg flex justify-between items-center">
                <span className="text-yellow-400 mr-4 font-mono">$ deploy</span>
                <span className="text-gray-400">Deploy a new agent</span>
              </div>
              <div className="bg-[#5fb9b0]/20 border-foreground border p-4 rounded-lg flex justify-between items-center">
                <span className="text-yellow-400 mr-4 font-mono">$ docs</span>
                <span className="text-gray-400">View documentation</span>
              </div>
              <div className="bg-[#5fb9b0]/20 border-foreground border p-4 rounded-lg flex justify-between items-center">
                <span className="text-yellow-400 mr-4 font-mono">
                  $ network
                </span>
                <span className="text-gray-400">View network status</span>
              </div>
              <div className="bg-[#5fb9b0]/20 md:col-span-2 border-foreground border p-4 rounded-lg flex justify-between items-center">
                <span className="text-yellow-400 mr-4 font-mono">$ faq</span>
                <span className="text-gray-400">
                  Frequently asked questions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
