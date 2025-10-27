"use client";

import { easeOut, motion } from "motion/react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { useState } from "react";

const icons = [BsFacebook, BsTwitter, BsInstagram, BsGithub];

const Page = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-white">
      <motion.div
      whileHover={{scale: 1.05}}
      transition={{duration: 0.4, ease: easeOut}}
        className="relative flex items-center justify-center rounded-full px-8 py-5 bg-neutral-200 overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated Share Layer */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: hovered ? "-110%" : "0%" }}
          transition={{ type: "spring",
                  duration: 0.6,
                  bounce: 0, ease: easeOut }}
          className="absolute inset-0 bg-black text-white flex items-center justify-center rounded-full z-50"
        >
          <span className="font-medium">Share</span>
        </motion.div>

        {/* Social Icons */}
        <div className="flex space-x-5 items-center text-black z-10">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={
                hovered
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0}
              }
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0,
                ease: easeOut,
                delay: hovered ? index * 0.03 : 0,
              }}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <Icon size={20} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
