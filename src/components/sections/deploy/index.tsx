import React from 'react';
import { Clock } from 'lucide-react';

interface DeployProps {
  title?: string;
  message?: string;
}

const Deploy: React.FC<DeployProps> = ({
  title = "Coming Soon",
  message = "The AI Agent minting functionality is currently under development. Stay tuned for updates!"
}) => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-[#5fb9b0]/50 rounded-lg p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="rounded-full bg-background p-4">
            <Clock className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl font-space-grotesk font-bold text-white">
            {title}
          </h2>

          <p className="text-white text-lg leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deploy;