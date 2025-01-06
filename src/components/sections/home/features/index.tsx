import { BorderBeam } from "@/components/ui/border-beam";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { CloudLightning, Cpu, Network, ShieldCheck } from "lucide-react";
import React from "react";

// Feature card data
const features = [
  {
    title: "AI-Powered",
    description: "Advanced AI agents running on Solana",
    icon: <Cpu />,
  },
  {
    title: "Secure",
    description: "Military-grade encryption and security",
    icon: <ShieldCheck />,
  },
  {
    title: "Fast",
    description: "Lightning-fast execution on Solana",
    icon: <CloudLightning />,
  },
  {
    title: "Scalable",
    description: "Built to scale with your needs",
    icon: <Network />,
  },
];

// Feature Card Component
type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <HoverBorderGradient
    containerClassName="rounded-2xl size-full feature-shadow"
    as="div"
    className="flex items-center size-full bg-background"
  >
    <div className="flex flex-col items-start bg-transparent size-full p-6 text-center relative ">
      <div className="mb-4 bg-foreground p-3 text-background rounded-xl">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-lg text-white mb-2 font-space-grotesk">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </HoverBorderGradient>
);

// Features Component
const Features: React.FC = () => {
  return (
    <section className="flex flex-col justify-center mb-10 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-space-grotesk tracking-wide font-bold text-center mb-6">
          Features
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Experience the next generation of AI agents on Solana
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
