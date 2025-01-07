'use client'

import { motion } from "framer-motion";
import { Bot, Shield, Zap, Code } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: JSX.Element;
  gradientClass: string;
}

const Overview = () => {
  const features: FeatureCard[] = [
    {
      title: "AI-Powered Agents",
      description: "Deploy intelligent agents that can autonomously interact with Solana's ecosystem",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      gradientClass: "bg-background",
    },
    {
      title: "Secure Runtime",
      description: "Sandboxed execution environment with configurable permissions",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      gradientClass: "bg-background",
    },
    {
      title: "State Compression",
      description: "Efficient on-chain storage using Solana's state compression",
      icon: <Zap className="w-6 h-6 text-green-400" />,
      gradientClass: "bg-background",
    },
    {
      title: "Developer Tools",
      description: "Comprehensive SDK and CLI tools for agent development",
      icon: <Code className="w-6 h-6 text-orange-400" />,
      gradientClass: "bg-background",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="">
      <motion.div
        className="w-full md:max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold font-space-grotesk mb-2">
            ReproveSPL Documentation
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Comprehensive guide to building and deploying AI agents on Solana
          </p>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <motion.div
            className="bg-[#2f8ca3]/50 backdrop-blur-sm rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white">
              ReproveSPL is a framework for creating and deploying autonomous AI agents on the Solana blockchain. It leverages state compression for efficient on-chain storage and provides a secure runtime environment for AI-powered decision making.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2f8ca3]/50 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    className={`p-2 rounded-lg ${feature.gradientClass}`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold font-space-grotesk text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;