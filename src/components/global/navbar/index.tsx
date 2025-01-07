"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/menu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const navbarRef = useRef<HTMLElement>(null); // Reference for the navbar

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const navbar = navbarRef.current;

    if (navbar) {
      // ScrollTrigger for hiding/showing navbar
      ScrollTrigger.create({
        start: "top top",
        end: 99999, // Keeps the effect active throughout the scroll
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling down
            gsap.to(navbar, {
              y: 100, // Move navbar out of view
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            });
          } else {
            // Scrolling up
            gsap.to(navbar, {
              y: 0, // Bring navbar back into view
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const linksContainer = linksRef.current;

    if (indicator && linksContainer) {
      const activeLink = Array.from(linksContainer.querySelectorAll("a")).find(
        (link) => link.getAttribute("href") === pathname
      );

      if (activeLink) {
        const linkBounds = activeLink.getBoundingClientRect();
        const containerBounds = linksContainer.getBoundingClientRect();
        const offset =
          linkBounds.left - containerBounds.left + linkBounds.width / 2;

        gsap.to(indicator, {
          x: offset,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }, [pathname]);

  return (
    <main className="relative z-[999]">
      <nav
        // ref={navbarRef} // Reference for navbar
        className="backdrop-blur-lg w-fit h-fit py-4 px-10 md:px-6 shadow-lg shadow-background rounded-full fixed bottom-5 left-1/2 -translate-x-1/2 mx-auto"
      >
        <ul
          ref={linksRef}
          className="flex justify-between items-center space-x-8 md:space-x-10"
        >
          {links.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item.href}
                className={`flex gap-x-3 items-center transition duration-300 hover-link ${
                  pathname === item.href ? "text-white" : "text-white/70"
                }`}
              >
                <div className="block size-5">{item.icon}</div>
                <span className="text-base md:block hidden font-space-grotesk">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          ref={indicatorRef}
          className="bg-foreground rounded-xl nav-indicator-glow z-10 absolute h-1 w-12 md:w-16 -top-1 left-4 md:left-0"
        ></div>
        <div className="bg-foreground rounded-full opacity-10 -z-10 absolute w-full h-full top-0 left-0"></div>
      </nav>
    </main>
  );
};

export default Navbar;
