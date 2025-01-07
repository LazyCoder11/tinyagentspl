"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Activity, Bot, Cpu, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Metric {
  label: string;
  value: string | number;
  icon: JSX.Element;
}

interface StatusCard {
  title: string;
  status: string;
  description: string;
  icon: JSX.Element;
  gradientClass: string;
}

const Status = () => {
  const metrics: Metric[] = [
    {
      label: "Active Agents",
      value: "1",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      label: "Total Interactions",
      value: "2.4k",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      label: "Success Rate",
      value: "99.8%",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      label: "Framework Version",
      value: "v1.0.0",
      icon: <Cpu className="w-5 h-5" />,
    },
  ];

  const statusCards: StatusCard[] = [
    {
      title: "System Status",
      status: "Operational",
      description: "All systems running normally",
      icon: <Activity className="w-5 h-5 text-emerald-800" />,
      gradientClass: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Security Status",
      status: "Protected",
      description: "Security protocols active",
      icon: <Shield className="w-5 h-5 text-blue-800" />,
      gradientClass: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "Performance",
      status: "Optimal",
      description: "High performance metrics",
      icon: <Zap className="w-5 h-5 text-purple-800" />,
      gradientClass: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="min-h-screen md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold font-space-grotesk mb-2">
            ReproveSPL Framework Status
          </h1>
          <p className="text-white text-lg mb-8">
            Real-time metrics and performance indicators
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-[#5fb9b0]/50 navbar-shadow p-4 rounded-2xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-4 bg-background rounded-xl"
            >
              <motion.div
                className="p-2 rounded-lg bg-foreground text-background"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {metric.icon}
              </motion.div>
              <div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
                <p className="text-white font-semibold">{metric.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {statusCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <HoverBorderGradient
                containerClassName="rounded-2xl size-full feature-shadow"
                as="div"
                className="flex flex-col p-7 size-full bg-background"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <motion.div
                    className={`p-2 rounded-lg ${card.gradientClass}`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {card.icon}
                  </motion.div>
                  <h2 className="text-white font-semibold">{card.title}</h2>
                </div>
                <p className="text-emerald-400 font-medium mb-2">
                  {card.status}
                </p>
                <p className="text-gray-200 text-sm">{card.description}</p>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Status;
