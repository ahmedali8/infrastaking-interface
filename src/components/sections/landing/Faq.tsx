import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What is InfraStaking?",
    answer:
      "InfraStaking is blockchain-powered system that let you earn from real-world resources—like internet bandwidth, GPUs, and storage—by contributing them to open networks like Grass or Render.",
  },
  {
    question: "How does InfraStaking work?",
    answer:
      "InfraStaking makes that process completely automated. It scans your devices for unused resources, connects them to the best InfraStaking networks, collects rewards, and stakes them into top protocols like Marinade and Jito to grow your yield—all without needing technical setup or crypto knowledge. You simply plug in your infra and start earning.",
  },
  {
    question: "What kind of infrastructure can I monetize?",
    answer:
      "You can earn from a wide range of underused resources including internet bandwidth, GPU or CPU power, and digital storage. Whether you're running cloud machines, office systems, or personal devices, InfraStaking will detect what’s idle and route it to the most suitable earning network.",
  },
  {
    question: "Do I need crypto knowledge to use InfraStaking?",
    answer:
      "Not at all. InfraStaking is built to work in the background—no crypto skills needed. You don’t need to set up wallets, use exchanges, or understand gas fees. Just give permission to scan your resources and we handle the rest, automatically converting your activity into daily yield.",
  },
  {
    question:
      "Is it safe to give InfraStaking access to my devices or systems?",
    answer:
      "Yes. The scanning process is secure and read-only. We only detect what resources are available; we don’t control your devices or change your data. Your infrastructure stays yours—always. We simply optimize its earning potential.",
  },
  {
    question: "How are InfraStaking protocols selected and optimized?",
    answer:
      "We use a scoring system called DUVI (InfraStaking Utility Value Index) to rate your resources and match them to the best earning networks. Our AI looks at real-time performance, rewards, and security to automatically choose the right protocols for you.",
  },
  {
    question:
      "What makes InfraStaking different from just using Render or Marinade directly?",
    answer:
      "InfraStaking combines multiple earning networks into one system and manages the entire process for you—scanning, routing, swapping, staking, and compounding. Without us, you'd have to handle each protocol separately, manage tokens manually, and monitor yield yourself.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="faq"
      className="relative z-10 py-10 "
    >
      <h2 className="text-2xl text-center pb-10 --font-jetbrains-mono">FAQ</h2>
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({
  isOpen,
  question,
  answer,
  onClick,
}: {
  index: number;
  isOpen: boolean;
  question: string;
  answer: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full cursor-pointer flex items-center justify-between text-left p-4 font-medium text-gray-800 bg-gray-50 hover:bg-black/20 transition-colors"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div ref={ref} className="p-4 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
