"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    // Initialize Lenis with valid options
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoother or faster scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const handleScroll = (time: number) => {
      lenis.raf(time);
    };

    // Use a more efficient rAF loop
    let animationFrameId: number;

    const onAnimationFrame = (time: number) => {
      handleScroll(time);
      animationFrameId = requestAnimationFrame(onAnimationFrame);
    };

    animationFrameId = requestAnimationFrame(onAnimationFrame);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy(); // Properly destroy Lenis instance
    };
  }, []);

  return <div>{children}</div>;
};

export default LenisWrapper;
