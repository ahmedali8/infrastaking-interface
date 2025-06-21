import { motion } from "framer-motion";

const roadmap = [
  {
    quarter: "Q2 2025",
    items: [
      "Launch Meta-Vault with Grass integration",
      "Scan live for bandwidth-based staking",
    ],
  },
  {
    quarter: "Q3 2025",
    items: [
      "Integrate GPU-based compute infra from Render Network",
      "Activate AI Optimizer for real-time reward routing",
    ],
  },
  {
    quarter: "Q4 2025",
    items: [
      "Release SDKs for DePIN protocol integration (standard adapter layer)",
      "Add role-based access & policy wallets for enterprise compliance",
    ],
  },
  {
    quarter: "Q1 2026",
    items: [
      "Launch InfraStaking Protocol for new DePIN integrations Native Infrastructure and ReStaking Protocol",
      "DAO to decentralize governance and turbo-charge community",
    ],
  },
];

export default function Roadmap() {
  return (
    <div
      id="roadmap"
      className="relative py-[100px]"
    >
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-[24px] --font-jetbrains-mono">
          Where We're Headed
        </h2>
        <p className="max-w-[600px] text-[24px] font-[100] text-center leading-[120%]">
          We're building fast, on track to become the automation layer for the
          entire DePIN ecosystem.
        </p>
      </div>
      <div className="mx-auto w-full md:h-screen text-white max-w-[1200px] relative p-10 overflow-hidden">
        <svg
          className="absolute md:block hidden inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M 300 100 C 600 100, 600 250, 900 250"
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
          <motion.path
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: 0.5,
            }}
            d="M 900 300 C 600 300, 600 450, 300 450"
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
          <motion.path
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
            d="M 300 500 C 600 500, 600 650, 900 650"
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
        </svg>

        <div className="md:absolute relative md:top-[5%]  md:left-[10%]">
          <RoadmapCard index={0} data={roadmap[0]} />
        </div>
        <div className="md:absolute relative md:top-[20%] md:right-[10%]">
          <RoadmapCard index={1} data={roadmap[1]} />
        </div>
        <div className="md:absolute relative md:bottom-[30%] md:left-[10%]">
          <RoadmapCard index={2} data={roadmap[2]} />
        </div>
        <div className="md:absolute relative md:bottom-[5%] md:right-[10%]">
          <RoadmapCard index={3} data={roadmap[3]} />
        </div>
      </div>
    </div>
  );
}

function RoadmapCard({ index, data }: { index: any; data: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.6 }}
      className="bg-white p-6 rounded-2xl shadow-xl md:w-[300px] w-full md:mt-0 mt-5 backdrop-blur-md"
    >
      <h2 className="text-xl --font-jetbrains-mono font-bold mb-4 text-black border-b border-black/30 pb-2">
        {data.quarter}
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-black text-sm">
        {data.items.map((item: any, i: any) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
