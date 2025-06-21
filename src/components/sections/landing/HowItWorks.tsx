import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -70% 0px",
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    const texts = [text1Ref.current, text2Ref.current, text3Ref.current];

    // Initial setup
    gsap.set(videos[0], { opacity: 1 });
    gsap.set(texts[0], { opacity: 1, y: 0 });
    gsap.set([videos[1], videos[2]], { opacity: 0 });
    gsap.set([texts[1], texts[2]], { opacity: 0, y: 50 });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000vh",
        pin: true,
        scrub: 4.5,
        anticipatePin: 1,
      },
    });

    // First video and text (already visible, just handle fade out)
    tl.to(videos[0], {
      opacity: 0,
      duration: 6,
      ease: "power3.inOut",
    })
      .to(
        texts[0],
        {
          opacity: 0,
          y: -50,
          duration: 5,
          ease: "power3.in",
        },
        "-=4"
      )
      // Second video and text
      .to(videos[1], {
        opacity: 1,
        duration: 6,
        ease: "power3.inOut",
      })
      .to(
        texts[1],
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power3.out",
        },
        "-=4"
      )
      .to(videos[1], {
        opacity: 0,
        duration: 6,
        ease: "power3.inOut",
      })
      .to(
        texts[1],
        {
          opacity: 0,
          y: -50,
          duration: 5,
          ease: "power3.in",
        },
        "-=4"
      )
      // Third video and text
      .to(videos[2], {
        opacity: 1,
        duration: 6,
        ease: "power3.inOut",
      })
      .to(
        texts[2],
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power3.out",
        },
        "-=4"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const items = [
    {
      title: "Scan Idle Infrastructure",
      desc: "Grant permission, and we'll detect unused energy, bandwidth, GPU, CPU, and storage—no setup, no guesswork.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 37 37"
          fill="none"
        >
          <circle
            cx="16.1111"
            cy="16.1112"
            r="14.3333"
            stroke="black"
            strokeWidth="3.34444"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.2222 35.2222L31.6389 31.6388L29.8472 29.8472"
            stroke="black"
            strokeWidth="3.34444"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Deploy Resources",
      desc: "We auto-route your idle resources to top DePINs like Grass and Render—no manual setup, no dashboards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="34"
          viewBox="0 0 33 34"
          fill="none"
        >
          <path
            d="M16.5 3.24756V33.9685"
            stroke="black"
            strokeWidth="1.88125"
            strokeLinejoin="round"
          />
          <path
            d="M1.71875 10.9347L16.5 1.7184L31.2813 10.9347"
            stroke="black"
            strokeWidth="1.88125"
          />
          <path
            d="M1.71875 23.2235L16.5 3.25488L31.2813 23.2235"
            stroke="black"
            strokeWidth="1.88125"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Compound Rewards",
      desc: "Rewards are converted and auto-staked into protocols like Marinade and Jito. No wallets, no tracking.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 42 42"
          fill="none"
        >
          <path
            d="M25.6666 2.33337C33.3986 2.33337 39.6666 10.6907 39.6666 21C39.6666 31.3094 33.3986 39.6667 25.6666 39.6667C17.9346 39.6667 11.6666 31.3094 11.6666 21C11.6666 10.6907 17.9346 2.33337 25.6666 2.33337Z"
            stroke="black"
            strokeWidth="3.26667"
          />
          <path
            d="M21 38.1135C19.3668 39.1125 17.5629 39.6667 15.6667 39.6667C8.30287 39.6667 2.33333 31.3094 2.33334 21C2.33334 10.6907 8.30287 2.33337 15.6667 2.33337C17.5629 2.33337 19.3668 2.88758 21 3.8866"
            stroke="black"
            strokeWidth="3.26667"
          />
          <path
            d="M25.6667 28L25.6667 14"
            stroke="black"
            strokeWidth="3.26667"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <motion.div
        ref={(node) => {
          ref(node);
          containerRef.current = node;
        }}
        className="relative h-screen w-full overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* First Video Section */}
        <div className="absolute inset-0">
          <video
            ref={video1Ref}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            autoPlay
          >
            <source src="/video-2.mp4" type="video/mp4" />
          </video>
          <div
            ref={text1Ref}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-white text-4xl font-bold text-center">
              Scan Your Idle Infrastructure
            </h2>
          </div>
        </div>

        {/* Second Video Section */}
        <div className="absolute inset-0">
          <video
            ref={video2Ref}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            autoPlay
          >
            <source src="/video-1.mp4" type="video/mp4" />
          </video>
          <div
            ref={text2Ref}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-white text-4xl font-bold text-center">
              Deploy Resources, Zero Complexity
            </h2>
          </div>
        </div>

        {/* Third Video Section */}
        <div className="absolute inset-0">
          <video
            ref={video3Ref}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            autoPlay
          >
            <source src="/video-4.mp4" type="video/mp4" />
          </video>
          <div
            ref={text3Ref}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-white text-4xl font-bold text-center">
              Automate Rewards, Compound Yield
            </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}
