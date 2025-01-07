import Footer from "@/components/global/footer";
import Status from "@/components/sections/network/status";
import React from "react";

const Network = () => {
  return (
    <div className="flex hero min-h-screen flex-col items-center justify-between p-24">
      <Status />
      <Footer />
    </div>
  );
};

export default Network;
