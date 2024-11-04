"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const accordionItems = [
  {
    title: "What is this app about?",
    content:
      "This app helps you track your carbon footprint by logging your daily activities and providing insights to help reduce your environmental impact.",
  },
  {
    title: "How do I track my carbon emissions?",
    content:
      "Simply log activities such as transportation, food consumption, and energy usage. The app will calculate your carbon emissions based on your inputs.",
  },
  {
    title: "How accurate is the carbon footprint data?",
    content:
      "The app uses industry-standard calculations based on your inputs. While estimates may vary slightly, we strive to provide the most accurate data possible.",
  },
  {
    title: "How does this app help me in daily life?",
    content:
      "It makes sustainability a part of your routine by showing you the impact of your daily choices and suggesting ways to reduce your carbon emissions.",
  },
  {
    title: "What platforms is the app available on?",
    content:
      "The app is available for Android only at the moment. You can use the web version that can be accessed on any browser.",
  },
  {
    title: "Is my data secure?",
    content:
      "Yes, we take your privacy seriously. All data is encrypted and handled securely, ensuring your personal information remains safe.",
  },
];

export default function AnimatedAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[50rem] mx-auto space-y-2">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <motion.button
            className="flex justify-between items-center w-full p-4 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => toggleItem(index)}
            initial={false}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <motion.span
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.span>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="bg-gray-50"
              >
                <div className="p-4 text-gray-700">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
