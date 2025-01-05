"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/menu";
import gsap from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const linksContainer = linksRef.current;

    if (indicator && linksContainer) {
      const activeLink = Array.from(
        linksContainer.querySelectorAll("a")
      ).find((link) => link.getAttribute("href") === pathname);

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
    <main className="relative">
      <nav className="backdrop-blur-xl w-fit h-fit border-foreground border py-4 px-6 shadow-lg shadow-background rounded-full fixed bottom-5 left-1/2 -translate-x-1/2 mx-auto">
        <ul
          ref={linksRef}
          className="flex justify-between items-center space-x-10"
        >
          {links.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item.href}
                className={`flex gap-x-3 items-center transition duration-300 hover-link ${
                  pathname === item.href ? "text-white" : "text-white/70"
                }`}
              >
                {item.icon}
                <span className="text-base font-space-grotesk">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          ref={indicatorRef}
          className="bg-foreground rounded-xl navbar-shadow z-10 absolute h-1 w-16 -top-1 left-0"
        ></div>
        <div className="bg-foreground rounded-full opacity-10 -z-10 absolute w-full h-full top-0 left-0"></div>
      </nav>
    </main>
  );
};

export default Navbar;