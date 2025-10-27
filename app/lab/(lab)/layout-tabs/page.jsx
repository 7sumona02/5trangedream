"use client";

import { motion } from "motion/react";
import { useState } from "react";

const Page = () => {
  const tabs = ["Light", "Dark", "Auto"];
  const [activeTab, setActiveTab] = useState("Light");

  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-white">
      <div className="relative flex items-center justify-center gap- p-1 rounded-xl bg-neutral-900 backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-6 py-2 text-sm font-medium cursor-pointer"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 rounded-lg bg-white"
                transition={{
                  type: "spring",
                  duration: 0.4,
                  bounce: 0,
                }}
              />
            )}
            <span
              className={`relative z-10 transition-all ease-out duration-250 ${
                activeTab === tab ? "text-neutral-900" : "text-white"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
