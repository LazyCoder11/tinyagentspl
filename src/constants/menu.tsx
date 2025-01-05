import { BotMessageSquare, CloudUpload, Home } from "lucide-react";
import { FiFileText, FiGlobe, FiHelpCircle } from "react-icons/fi";
import { IconHome } from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: <IconHome className="size-full text-white transition duration-300" />,
    href: "/",
  },

  {
    title: "Agents",
    icon: (
      <BotMessageSquare className="size-full text-white transition duration-300" />
    ),
    href: "/agents",
  },
  {
    title: "Deploy",
    icon: (
      <CloudUpload className="size-full text-white transition duration-300" />
    ),
    href: "/deploy",
  },
  {
    title: "Network",
    icon: <FiGlobe className="size-full text-white transition duration-300" />,
    href: "/network",
  },
  {
    title: "Docs",
    icon: (
      <FiFileText className="size-full text-white transition duration-300" />
    ),
    href: "/docs",
  },

  {
    title: "FAQs",
    icon: (
      <FiHelpCircle className="size-full text-white transition duration-300" />
    ),
    href: "/faqs",
  },
];
