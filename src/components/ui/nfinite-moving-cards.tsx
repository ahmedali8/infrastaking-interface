"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  Star,
  Target,
  Rocket,
  Award,
  Diamond,
} from "lucide-react";

const items = [
  {
    icon: () => (
      <img
        src="/jito.png"
        alt="Jito Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Jito",
  },
  {
    icon: () => (
      <img
        src="/marinade.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Marinade",
  },
  {
    icon: () => (
      <img
        src="/jpool.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Jpool",
  },
  {
    icon: () => (
      <img
        src="/rockx.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "RockX",
  },
  {
    icon: () => (
      <img
        src="/earnpark.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "EarnPark",
  },
  {
    icon: () => (
      <img
        src="/picasso.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Picasso",
  },
  {
    icon: () => (
      <img
        src="/grass.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Grass",
  },
  {
    icon: () => (
      <img
        src="/helium.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Helium",
  },
  {
    icon: () => (
      <img
        src="/render.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl "
      />
    ),

    number: "",
    title: "Render Network",
  },
  {
    icon: () => (
      <img
        src="/ionet.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Ionet",
  },
  {
    icon: () => (
      <img
        src="/iotex.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "IoTeX",
  },
  {
    icon: () => (
      <img
        src="/nosana.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Nosana",
  },
  {
    icon: () => (
      <img
        src="/flux.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Flux",
  },
  {
    icon: () => (
      <img
        src="/suzako.png"
        alt="Marinade Logo"
        className="w-10 h-10  font-light rounded-4xl"
      />
    ),

    number: "",
    title: "Suzaku",
  },
];

export default function InfiniteMovingCards() {
  return (
    <div className="flex flex-col mt-10 items-center justify-center p-8">
      <div className="relative w-full overflow-x-hidden">
        <div className="flex">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{
              x: [0, -160 * items.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-48 flex gap-3 items-center text-white flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <item.icon />
                </div>

                <div className="flex flex-col ">
                  <div className="text-xl font-light">{item.title}</div>
                </div>
              </div>
            ))}
            {items.map((item, index) => (
              <div
                key={index}
                className="w-48 flex gap-3 items-center text-white flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <item.icon />
                </div>

                <div className="flex flex-col ">
                  <div className="text-xl font-light">{item.title}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
