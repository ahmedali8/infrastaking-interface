import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Designed() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstDivRef = useRef<HTMLDivElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);
  const thirdDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const firstDiv = firstDivRef.current;
    const secondDiv = secondDivRef.current;
    const thirdDiv = thirdDivRef.current;

    if (!section || !firstDiv || !secondDiv || !thirdDiv) return;

    // Set initial state
    gsap.set([firstDiv, secondDiv, thirdDiv], {
      y: "100%",
      opacity: 0,
    });

    // Pin the section and animate both divs in sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
      },
    });

    tl.to(firstDiv, {
      y: "0%",
      opacity: 1,
      ease: "power3.out",
      duration: 1,
    })
      .to(
        secondDiv,
        {
          y: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5" // overlaps secondDiv with firstDiv
      )
      .to(
        firstDiv,
        {
          width: "80%",
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        },
        "-=1" // overlaps with secondDiv
      )
      .to(
        thirdDiv,
        {
          y: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5" // overlaps thirdDiv with firstDiv shrinking
      );
    // tl.to(firstDiv, {
    //   y: "0%",
    //   opacity: 1,
    //   ease: "power3.out",
    //   duration: 1,
    // })
    //   .to(
    //     secondDiv,
    //     {
    //       y: "0%",
    //       opacity: 1,
    //       ease: "power3.out",
    //       duration: 1,
    //     },
    //     "-=0.5"
    //   )
    //   .to(
    //     firstDiv,
    //     {
    //       width: "80%",
    //       opacity: 0,
    //       ease: "power2.inOut",
    //       duration: 1,
    //     },
    //     "-=1"
    //   );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex flex-col container mx-auto px-4"
    >
      <h2 className="max-w-xl md:text-7xl text-4xl pt-20 pb-5">
        Designed for the Future of Infrastructure.
      </h2>
      <div className="max-w-[900px] w-full relative h-[450px] mx-auto">
        <div
          ref={firstDivRef}
          className="w-full h-[450px] bg-red-500 transform-gpu absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-md"
        >
          <video
            src="/building-for-multi.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover -z-[1] top-0 left-0 w-full h-full"
          />
          <div className="flex flex-col p-10 h-full ">
            {/* <div className="w-10 h-10 bg-black"></div> */}
            <div className="flex text-[#2e21de] flex-col gap-2 h-full">
              <h3 className=" text-3xl max-w-[250px] mt-auto">
                DePIN Aggregation & Automation
              </h3>
              <div className="flex items-center mt-5 gap-2 max-w-md">
                <h2 className="text-sm">
                  Aggregate and deploy resources across multiple DePIN
                  protocols—fully automated, no scripts or wallets required. We
                  simplify access to DePIN rewards by abstracting node
                  deployment, reward claiming, and routing across Flux, Helium,
                  Render, and more.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={secondDivRef}
          className="w-full h-[450px] bg-white transform-gpu absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-md"
        >
          <video
            src="/uture.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover top-0 right-0 md:w-1/2 w-full h-full"
          />
          {/* uture.mp4 */}
          <div className="flex flex-col p-10 h-full relative z-10">
            {/* <div className="w-10 h-10 bg-black"></div> */}
            <div className="flex text-[#2e21de] flex-col gap-2 h-full">
              <h3 className=" text-3xl max-w-[250px] mt-auto">
                Compliance as a First-Class Feature
              </h3>
              <div className="flex items-center mt-5 gap-2 max-w-md">
                <h2 className="text-sm">
                  Ensure onchain privacy, compliance, and transparency with eERC
                  and Avacy. Institutions get cryptographic guarantees,
                  selective data sharing, and privacy-preserving
                  KYC/AML—building trust at every step.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={thirdDivRef}
          className="w-full h-[450px] bg-white transform-gpu absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-md"
        >
          <video
            src="/building-for-multi.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover top-0 right-0 md:w-1/2 w-full h-full"
          />
          {/* uture.mp4 */}
          <div className="flex flex-col p-10 h-full relative z-10">
            {/* <div className="w-10 h-10 bg-black"></div> */}
            <div className="flex text-[#2e21de] flex-col gap-2 h-full">
              <h3 className=" text-3xl max-w-[250px] mt-auto">
                Reward Optimization Pipeline
              </h3>
              <div className="flex items-center mt-5 gap-2 max-w-md">
                <h2 className="text-sm">
                  Maximize yield through automated liquid staking and restaking.{" "}
                  Flux rewards flow into AVAX, staked in Benqi, restaked in
                  Suzaku, and compounded into Liquid Restaking Tokens (LRTs)—all
                  fully managed.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
