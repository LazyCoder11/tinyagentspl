import Footer from "@/components/global/footer";
import Concepts from "@/components/sections/docs/concepts";
import Examples from "@/components/sections/docs/examples";
import Examples1 from "@/components/sections/docs/examples1";
import Examples2 from "@/components/sections/docs/examples2";
import Overview from "@/components/sections/docs/overview";
import GettingStarted from "@/components/sections/docs/started";
import React from "react";

const Faqs = () => {
  return (
    <div className="flex hero min-h-screen flex-col items-center justify-between p-20 md:p-24">
      <Overview />
      <GettingStarted />
      <Concepts />
      <Examples />
      <Examples1 />
      <Examples2 />
      <Footer />
    </div>
  );
};

export default Faqs;
