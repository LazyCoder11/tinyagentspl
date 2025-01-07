"use client";
import React from "react";
import { motion } from "framer-motion";

const Examples1 = () => {
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
    <div className="w-full mt-8">
      <motion.div
        className="w-full md:max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Code Example Card */}
        <motion.div
          className="bg-[#2f8ca3]/50 backdrop-blur-sm text-white rounded-xl p-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-xl font-semibold font-space-grotesk text-white mb-2"
            variants={itemVariants}
          >
            State Management
          </motion.h2>
          <motion.pre
            className="bg-background relative text-foreground rounded-lg p-4 overflow-x-auto text-sm"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-[#2f8ca3]/30 text-white rounded-bl-lg">
              typescript
            </div>
            <code>
              {`import { StateManager } from '@agentspl/sdk';

// Define agent state interface
interface AgentState {
  balance: number;
  lastUpdate: number;
  strategy: {
    minProfit: number;
    maxSlippage: number;
  };
}

// Initialize state manager
const stateManager = new StateManager<AgentState>({
  merkleDepth: 14,
  maxBufferSize: 64,
  canopyDepth: 11
});

// Update state
await stateManager.update({
  balance: 100,
  lastUpdate: Date.now(),
  strategy: {
    minProfit: 0.02,
    maxSlippage: 0.01
  }
});`}
            </code>
          </motion.pre>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Examples1;
