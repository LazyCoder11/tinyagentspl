import Footer from "@/components/global/footer";
import Agent from "@/components/sections/agents/Agent";
import React from "react";

const Faqs = () => {
  return (
    <div className="flex hero min-h-screen flex-col items-center justify-between px-10 md:px-0 py-20 md:p-24">
      <Agent />
      <Footer />
    </div>
  );
};

export default Faqs;
