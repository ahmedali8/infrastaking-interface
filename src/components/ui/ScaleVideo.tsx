"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, type ElementRef } from "react";

export default function ScaleVideo() {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef<ElementRef<"h2">>(null);
  const scaleDiv = useRef<ElementRef<"div">>(null);
  const triggerContainer = useRef<ElementRef<"div">>(null);
  const logo = useRef(null);
  useEffect(() => {
    let anim = gsap.timeline({
      scrollTrigger: {
        trigger: triggerContainer.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
      },
    });
    anim
      .to(textRef.current, {
        opacity: 1,
        marginTop: 0,
      })
      .to(textRef.current, {
        scale: 6.5,
        fontSize: 72,
      })
      .to(
        scaleDiv.current,
        {
          autoAlpha: 1,
          width: "100vw",
          height: "100vh",
        },
        "-=.2"
      )
      .to(
        logo.current,
        {
          width: 80,
        },
        "-=0.8"
      )
      .to(scaleDiv.current, {
        display: "flex",
      });
  }, []);
  return (
    <div
      ref={triggerContainer}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        src="/background-intro.mp4"
        className={"w-full h-full object-cover absolute -left-1"}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      <h2
        ref={textRef}
        className="relative mt-52 opacity-0 leading-[120%] text-5xl text-center z-10"
      >
        This is where <br /> InfraStaking comes in
      </h2>
      <div
        ref={scaleDiv}
        className="w-0 z-50 bg-[#01081E] h-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <img ref={logo} src="/infrastaking-logo.png" className="w-0" alt="" />
      </div>
    </div>
  );
}
