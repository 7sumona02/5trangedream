"use client";

import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [callback]);

  return ref;
};

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

const Page = () => {
  const [selected, setSelected] = useState(false);
  const ref = useOutsideClick(() => setSelected(false));

  const handleSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center">
      <div
        ref={ref}
        className="flex items-center rounded-2xl bg-black p-1 shadow-sm"
      >
        <motion.button
          variants={buttonVariants}
          initial={false}
          animate="animate"
          custom={selected}
          onClick={handleSelect}
          transition={transition}
          className="relative text-white flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-250 cursor-pointer"
        >
          <Plus size={20} />
          <AnimatePresence initial={false} mode="wait">
            {selected && (
              <motion.span
                variants={spanVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="overflow-hidden whitespace-nowrap"
              >
                Create New
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
