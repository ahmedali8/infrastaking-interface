"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function VerticalScoll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP vertical loop function
    function verticalLoop(elements: Element[], speed: number) {
      const elementsArray = gsap.utils.toArray<Element>(elements);
      const firstBounds = elementsArray[0].getBoundingClientRect();
      const lastBounds =
        elementsArray[elementsArray.length - 1].getBoundingClientRect();

      const top =
        firstBounds.top -
        firstBounds.height -
        Math.abs(
          (elementsArray[1] as Element).getBoundingClientRect().top -
            firstBounds.bottom
        );
      const bottom = lastBounds.top;
      const distance = bottom - top;
      const duration = Math.abs(distance / speed);
      const tl = gsap.timeline({ repeat: -1 });
      const plus = speed < 0 ? "-=" : "+=";
      const minus = speed < 0 ? "+=" : "-=";

      elementsArray.forEach((el: Element) => {
        const bounds = (el as Element).getBoundingClientRect();
        let ratio = Math.abs((bottom - bounds.top) / distance);

        if (speed < 0) {
          ratio = 1 - ratio;
        }

        tl.to(
          el,
          {
            y: plus + distance * ratio,
            duration: duration * ratio,
            ease: "none",
          },
          0
        );

        tl.fromTo(
          el,
          {
            y: minus + distance,
          },
          {
            y: plus + (1 - ratio) * distance,
            ease: "none",
            duration: (1 - ratio) * duration,
            immediateRender: false,
          },
          duration * ratio
        );
      });

      return tl;
    }

    const itemHolder = containerRef.current?.querySelector(".item-holder");
    if (itemHolder) {
      const speed = -40;
      const items = itemHolder.querySelectorAll(".name-item");
      verticalLoop(Array.from(items), speed);
    }

    return () => {
      gsap.killTweensOf(".name-item");
    };
  }, []);

  const investmentTypes = [
    { text: "Institutional investors", color: "text-teal-400" },
    { text: "Enterprise technology teams", color: "text-blue-400" },
    { text: "SME corporates", color: "text-gray-400" },
    { text: "Asset managers exploring DePIN", color: "text-teal-400" },
    { text: "Energy & telecom providers", color: "text-blue-400" },
    { text: "Web2 infrastructure owners", color: "text-gray-400" },
    { text: "Decentralized cloud operators", color: "text-teal-400" },
    { text: "Web3 funds seeking yield", color: "text-blue-400" },
    { text: "AI & data compute firms", color: "text-gray-400" },
    { text: "Distributed data storage networks", color: "text-teal-400" },
  ];

  return (
    <div className="relative before:absolute before:inset-x-0 before:h-36 before:bg-gradient-to-b before:from-[#01081E] before:via-[#01081E]/50 before:to-transparent before:z-10 after:absolute after:inset-x-0 after:h-36 after:bg-gradient-to-t after:from-[#01081E] after:via-[#01081E]/50 after:to-transparent after:z-10 ">
      <div
        ref={containerRef}
        className="container mx-auto px-8 py-16 flex md:flex-row flex-col items-center "
      >
        <div className="mr-8 text-left w-full ml-4 md:mr-16 md:ml-0 md:text-center md:w-auto">
          <h1 className="text-8xl font-bold text-white">For</h1>
        </div>

        <div className="flex-1">
          <div className="item-holder h-80 overflow-hidden flex flex-col justify-center">
            {investmentTypes.map((item, index) => (
              <div
                key={index}
                className={`name-item md:text-5xl text-xl font-bold ${item.color} py-4`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
