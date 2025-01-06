import {  TestTube2, Wallet} from "lucide-react";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="flex justify-between p-5 bg-transparent fixed z-[9999] w-full">
      <div className="flex bg-[#5fb9b0] text-white/90 bg-opacity-15 rounded-full navbar-shadow py-2 px-3 items-center gap-x-2">
        <div className="">
          <TestTube2 size={20}/>
        </div>
        <h2 className="text-base font-space-grotesk">Test Mode</h2>
      </div>
      <a href="/" className="flex bg-[#5fb9b0] text-white/90 hover:text-white hover:bg-foreground transition duration-200 bg-opacity-15 rounded-full navbar-shadow py-2 px-7 items-center gap-x-2">
        <div className="">
          <Wallet size={20}/>
        </div>
        <h2 className="font-space-grotesk">Connect Wallet</h2>
      </a>
    </div>
  );
};

export default TopNavbar;
