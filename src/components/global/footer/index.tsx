import { Bot, Brain, Github, Network, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[30vh] pb-10 md:pb-20 flex justify-center bg-transparent text-white">
      <div className="container mx-auto md:text-center">
        <h1 className="my-20 text-[14vw] md:text-[10vw] bg-gradient-to-b from-foreground to-[#5fb9b0]/20 bg-clip-text text-transparent font-space-grotesk">
            ReproveSPL
        </h1>
        {/* Powered by Section */}
        <div className="mb-4">
          <p className="text-lg md:text-sm mb-7">Powered by</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 md:mb-4 text-foreground">
            <a
              href="https://claude.ai/"
              className="hover:text-purple-500 flex items-center gap-x-2 font-semibold"
            >
              <Brain />
              Claude
            </a>
            <a
              href="https://tinys.pl/"
              className="hover:text-purple-500 flex items-center gap-x-2 font-semibold"
            >
              <Bot />
              TinySPL
            </a>
            <a
              href="https://swarms.world/swarms"
              className="hover:text-purple-500 flex items-center gap-x-2 font-semibold"
            >
              <Network />
              Swarm
            </a>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-white">
          <a
            href="https://github.com/DankDevv/AgentSPL"
            className="hover:text-foreground flex items-center gap-x-2 font-semibold"
          >
            <Github />
            GitHub
          </a>
          <a
            href="https://x.com/tAgentSPL"
            className="hover:text-foreground flex items-center gap-x-2 font-semibold"
          >
            <Twitter />
            Agent Twitter
          </a>
          <a
            href="https://x.com/tinyAgentSPL"
            className="hover:text-foreground flex items-center gap-x-2 font-semibold"
          >
            <Twitter />
            Dev Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
