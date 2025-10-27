"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const images = [
  "https://i.pinimg.com/736x/85/2b/02/852b022c2792eb2b4a46924e0a618018.jpg",
  "https://i.pinimg.com/originals/4f/dd/6f/4fdd6f95bb56f8afd09587cc3c7afce5.jpg",
  "https://i.pinimg.com/1200x/1c/5f/98/1c5f9881e833c9cc5c743af121abf932.jpg",
  "https://i.pinimg.com/736x/e0/ae/c5/e0aec56bb8d3d9542586f7be4da3124f.jpg",
];

const tipData = [
  { name: "Dazai", time: "Viewed 4h ago" },
  { name: "Ranpo", time: "Active now" },
  { name: "Fyodor", time: "Viewed 2d ago" },
  { name: "Nikolai", time: "Offline" },
];

const Page = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-neutral-100">
      <div className="p-3 border border-neutral-300 rounded-3xl bg-neutral-200 flex items-center space-x-3">
        {/* Page icons */}
        <div className="flex items-end px-3">
          {images.map((src, index) => {
            const isHovered = hoverIndex === index;
            const { name, time } = tipData[index];

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.div
                  initial={false}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    animate={{
                      scale: isHovered ? 1.35 : 1,
                      marginInline: isHovered ? "1.5rem" : "-0.8rem",
                      zIndex: isHovered ? 10 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    className="cursor-pointer"
                  >
                    <motion.img
                      src={src}
                      alt={name}
                      className="size-12 rounded-full border-2 border-white"
                    />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-sm">
                  <div className="flex flex-col items-start text-center">
                    <span className="font-semibold">{name}</span>
                    <span className="text-neutral-400">{time}</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-1.5">
          <motion.div className="bg-white p-2 rounded-xl cursor-pointer shadow-sm">
            <Link />
          </motion.div>
          <motion.div className="bg-white px-3 py-2 rounded-xl cursor-pointer font-medium shadow-sm">
            Invite
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
