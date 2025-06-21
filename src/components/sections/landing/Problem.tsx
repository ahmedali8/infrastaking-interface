import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Problem() {
  // const animationContainerRef = useRef<HTMLDivElement>(null)
  // const card1Ref = useRef<HTMLDivElement>(null)
  // const card2Ref = useRef<HTMLDivElement>(null)
  // const card3Ref = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //     // @ts-ignore
  //     if (!gsap.core?.globals().ScrollTrigger) {
  //         gsap.registerPlugin(ScrollTrigger)
  //     }

  //     const container = animationContainerRef.current
  //     const card1 = card1Ref.current
  //     const card2 = card2Ref.current
  //     const card3 = card3Ref.current

  //     if (!container || !card1 || !card2 || !card3) return

  //     gsap.set([card1, card2, card3], { autoAlpha: 0, width: "100%" })

  //     const tl = gsap.timeline({
  //         scrollTrigger: {
  //             trigger: container,
  //             start: "top top",
  //             end: "+=300%",
  //             pin: true,
  //             scrub: 1,
  //             markers: false,
  //         },
  //     })

  //     tl.to(card1, { autoAlpha: 1, duration: 1 })
  //         .to(card1, { width: "90%", duration: 0.5 }, "+=0.5")
  //         .to(card2, { autoAlpha: 1, duration: 1 }, "<")
  //         .to(card1, { width: "80%", duration: 0.5 }, "+=0.5")
  //         .to(card2, { width: "90%", duration: 0.5 }, "<")
  //         .to(card3, { autoAlpha: 1, duration: 1 }, "<")

  //     return () => {
  //         tl.scrollTrigger?.kill()
  //         tl.kill()
  //     }
  // }, [])

  return (
    <div className="relative py-[100px]">
      <div className="container mx-auto">
        <div className="grid  text-center grid-cols-1 gap-32 items-start">
          {/* <div className=" mx-auto">
            <h2 className="--font-jetbrains-mono md:text-[32px] leading-[120%] text-[18px] text-white mb-4">
              Turning Idle Infrastructure into <br /> Income is Chaotic, Not
              Automated
            </h2>
            <p className="--font-intel font-[300] leading-[130%] md:text-xl text-base mx-auto max-w-[460px]">
              Most institutions sit on mountains of surplus digital
              resources–-compute, bandwidth, storage that should be earning
              Dollars. But they have neither the inhouse expertise or mental
              bandwidth to leverage it. Current Web3 InfraStaking Solutions were
              never designed for Web2 Institutions click & deploy requirements.
            </p>
          </div> */}
          <div className="flex flex-col mt-2 items-center justify-center">
            <p className="text-center mt-2 max-w-2xl text-xl font-[300] text-white/70">
              The DePIN (Decentralized Physical Infrastructure Networks)
              ecosystem is exploding, but institutions, corporates, and SMEs are
              locked out. Why?
            </p>
          </div>

          <div className="md:max-w-[1200px] max-w-[87.5%] mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex flex-col group gap-1">
                <h2 className=" text-left leading-[120%] text-[18px] text-white mb-1">
                  Fragmented & Inaccessible Ecosystem
                </h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/info-1.jpg"
                    className="h-[450px] w-full rounded-xl group-hover:scale-105 transition-all duration-300 object-cover"
                    alt=""
                  />
                </div>
                <p className="--font-intel font-[300] leading-[130%] text-left mt-2 text-base mx-auto max-w-[460px] text-white/70">
                  <span className="text-white">Institutions face chaos</span>{" "}
                  managing multiple DePIN protocols, wallets, and tools—no
                  unified, trusted workflow.
                </p>
              </div>
              <div className="flex flex-col group gap-1">
                <h2 className=" text-left leading-[120%] text-[18px] text-white mb-1">
                  No Compliance or Privacy Guarantees
                </h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/new-info-3x.jpg"
                    className="h-[450px] w-full rounded-xl group-hover:scale-105 transition-all duration-300 object-cover"
                    alt=""
                  />
                </div>
                <p className="--font-intel font-[300] leading-[130%] text-left mt-2 text-base mx-auto max-w-[460px] text-white/70">
                  <span className="text-white">
                    Institutions cannot stake safely
                  </span>{" "}
                  without verifiable data, compliance, or privacy protections
                  for their infrastructure.
                </p>
              </div>
              <div className="flex flex-col group gap-1">
                <h2 className=" text-left leading-[120%] text-[18px] text-white mb-1">
                  Idle Infrastructure is Wasted
                </h2>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/info-3.jpg"
                    className="h-[450px] w-full rounded-xl group-hover:scale-105 transition-all duration-300 object-cover"
                    alt=""
                  />
                </div>
                <p className="--font-intel font-[300] leading-[130%] text-left mt-2 text-base mx-auto max-w-[460px] text-white/70">
                  <span className="text-white">Trillions in enterprise</span>,
                  and bandwidth remain untapped without a safe, compliant
                  staking system.
                </p>
              </div>
            </div>
          </div>
          {/* <div ref={animationContainerRef} className="h-screen flex items-center justify-center">
                        <div className="relative w-full max-w-md mx-auto">
                            <div
                                ref={card1Ref}
                                className="absolute top-0 -translate-y-1/4 left-1/2 h-[360px] w-[580x] transform -translate-x-1/2 bg-white  border border-black rounded-lg p-8 pt-10 z-10"
                            >
                                <h2 className="text-[22px] font-normal text-black --font-jetbrains-mono underline underline-offset-4 inline-block pb-1 mb-6">
                                    Fragmented Protocols
                                </h2>
                                <p className="text-lg text-black mt-[60px]">
                                    DePIN networks are siloed. Each offers a slightly different service and reward model—with no unified interface to compare, select, or manage them effectively across use cases.
                                </p>
                            </div>
                            <div
                                ref={card2Ref}
                                className="absolute top-10 -translate-y-1/4 left-1/2 h-[360px] w-[580x] transform -translate-x-1/2 bg-white border border-black rounded-lg p-8 pt-10 z-20"
                            >
                                <h2 className="text-[22px] font-normal underline underline-offset-4 --font-jetbrains-mono text-black inline-block pb-1 mb-6">Difficult Setup
                                </h2>
                                <p className="text-lg text-black mt-[60px]">
                                    Every protocol requires a different wallet, dashboard, and install guide. Setting up feels like assembling IKEA furniture—without the manual. It's a nightmare for teams with limited time or tooling.                                </p>
                            </div>
                            <div
                                ref={card3Ref}
                                className="absolute top-20 -translate-y-1/4 left-1/2 h-[360px] w-[580x] transform -translate-x-1/2 bg-white border border-black rounded-lg p-8 pt-10 z-30"
                            >
                                <h2 className="text-[22px] font-normal underline underline-offset-4 --font-jetbrains-mono text-black inline-block pb-1 mb-6">
                                    Manual Reward-to-Yield
                                </h2>
                                <p className="text-lg text-black mt-[60px]">
                                    Most DePIN rewards come in niche tokens. To earn real yield, users must claim → swap → stake → restake—manually. This breaks automation, adds cost, and kills compounding potential.
                                </p>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
