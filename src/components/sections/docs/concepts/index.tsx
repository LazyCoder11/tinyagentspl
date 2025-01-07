"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import React from "react";

const Concepts = () => {
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
    <div className="w-full">
      <motion.div
        className="w-full md:max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 w-full">
          <h2 className="text-2xl font-bold text-white mb-4">Core Concepts</h2>
          <motion.div
            className="bg-[#2f8ca3]/50 backdrop-blur-sm rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold font-space-grotesk text-white">
                Agent Architecture
              </h2>
            </div>
            <p className="text-white text-lg">
              ReproveSPL agents are autonomous programs that run in a secure
              sandbox environment on Solana. Each agent consists of:
            </p>
            <ul className="text-white mt-3">
              <li className="list-disc ml-5">Executable bytecode (agent logic)</li>
              <li className="list-disc ml-5">State storage (compressed on-chain)</li>
              <li className="list-disc ml-5">Configuration parameters</li>
              <li className="list-disc ml-5">Permission settings</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-[#2f8ca3]/50 backdrop-blur-sm rounded-xl p-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold font-space-grotesk text-white">
                State Compression
              </h2>
            </div>
            <p className="text-white text-lg">
              ReproveSPL uses Solana&apos;s state compression to efficiently
              store agent data on-chain:
            </p>
            <ul className="text-white mt-3">
              <li className="list-disc ml-5">Up to 10,000x reduction in storage costs</li>
              <li className="list-disc ml-5">Concurrent merkle trees for efficient updates</li>
              <li className="list-disc ml-5">Verifiable state transitions</li>
              <li className="list-disc ml-5">Optimized for frequent updates</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Concepts;
