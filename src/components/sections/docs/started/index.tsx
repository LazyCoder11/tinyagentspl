"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import React from "react";

const GettingStarted = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="">
      <motion.div
        className="w-full md:max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          {/* <h2 className="text-2xl font-bold text-white mb-4">
            Getting Started
          </h2> */}
          <motion.div
            className="bg-[#2f8ca3]/50 backdrop-blur-sm rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold font-space-grotesk text-white">
                Getting Started
              </h2>
              <a href="https://github.com/DankDevv/AgentSPL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#5fb9b0]/50 text-white px-4 py-2 rounded-xl">
                <Github/>
                View on Github
              </a>
            </div>
            <p className="text-white">
              Check out our GitHub repository for detailed installation
              instructions, quick start guides, and comprehensive examples to
              help you get started with ReproveSPL.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GettingStarted;
