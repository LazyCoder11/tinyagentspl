"use client";
import React from "react";
import { motion } from "framer-motion";

const Examples = () => {
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
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.h1
          className="text-2xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Code Examples
        </motion.h1>

        {/* Code Example Card */}
        <motion.div
          className="bg-[#2f8ca3]/50 backdrop-blur-sm text-white rounded-xl p-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-xl font-semibold font-space-grotesk text-white mb-2"
            variants={itemVariants}
          >
            Creating an Agent
          </motion.h2>
          <motion.pre
            className="bg-background relative text-foreground rounded-lg p-4 overflow-x-auto text-sm"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-[#2f8ca3]/30 text-white rounded-bl-lg">
                typescript
            </div>
            <code>
              {`import { Connection, Keypair } from '@solana/web3.js';
import { AgentSPL, AgentConfig } from '@agentspl/sdk';

async function createAgent() {
  const connection = new Connection('https://api.devnet.solana.com');
  const wallet = Keypair.generate();

  const config: AgentConfig = {
    name: "Trading Agent",
    capabilities: ["READ_STATE", "EXECUTE_TX"],
    memory: 1024 * 1024, // 1MB
    maxCycles: 1000000,
  };

  const agent = await AgentSPL.create(
    connection,
    wallet,
    config
  );

  return agent;
}`}
            </code>
          </motion.pre>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Examples;
