"use client";

import { BatteryPlus } from "lucide-react";
import { AnimatePresence, motion, scale } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Hook for detecting outside clicks
const useOutsideClick = (callback) => {
    const ref = useRef(null);

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

const Page = () => {
    const [open, setOpen] = useState(false);
    const [low, setLow] = useState(false);
    const ref = useOutsideClick(() => setOpen(false));

    return (
        <div className="min-h-screen w-screen flex justify-center bg-neutral-50">
            <div className="flex justify-center pt-5 select-none">
                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={ref}
                            onClick={() => setLow(!low)}
                            layoutId="modal"
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            className="cursor-pointer fixed top-5 left-1/2 transform -translate-x-1/2 w-[25vw] h-fit p-8 bg-black rounded-[3rem] text-white"
                        >
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(16px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(16px)" }}
                                className="w-full flex justify-between items-center"
                            >
                                <div>
                                    <div className="text-white font-medium">10% Battery</div>
                                    <div
                                        className={`text-sm transition-all duration-250 ease-in ${low ? "text-yellow-400" : "text-neutral-500"
                                            }`}
                                    >
                                        Tap to turn on Low Power Mode
                                    </div>
                                </div>

                                <div
                                    className={`w-16 h-10 rounded-2xl flex justify-center items-center transition-all duration-250 ease-in ${low ? "bg-yellow-400/50" : "bg-red-900/50 animate-pulse"
                                        }`}
                                >
                                    <BatteryPlus
                                        className={low ? "text-yellow-500" : "text-red-500"}
                                        size={30}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                    )}
                </AnimatePresence>

                <motion.div
                    layoutId="modal"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="w-60 bg-black h-12 rounded-full cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
        </div>
    );
};

export default Page;
