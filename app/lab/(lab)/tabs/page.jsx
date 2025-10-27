"use client"

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from 'motion/react'
import { Bell, Home, HelpCircle, Settings, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const useOutsideClick = (callback) => {
    const ref = useRef()

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [callback])

    return ref
}

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
    const tabs = [
        { title: "Dashboard", icon: Home },
        { title: "Notifications", icon: Bell },
        { type: "separator" },
        { title: "Settings", icon: Settings },
        { title: "Support", icon: HelpCircle },
        { title: "Security", icon: Shield },
    ];
    
    const [selected, setSelected] = useState(null)
    const ref = useOutsideClick(() => setSelected())

    const handleSelect = (index) => {
        setSelected(index)
    }

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
    );

    return (
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div ref={ref} className="flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm">
                {tabs.map((tab, index) => {
                    if (tab.type === "separator") {
                        return <Separator key={`separator-${index}`} />;
                    }

                    const Icon = tab.icon
                    return (
                        <motion.button key={tab.title} variants={buttonVariants} initial={false} animate="animate" custom={selected === index} onClick={() => handleSelect(index)} transition={transition} className={cn("relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300", selected === index ? cn("bg-muted text-blue-500") : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
                            <Icon size={20} />
                            <AnimatePresence initial={false}>
                                {selected === index && (
                                    <motion.span
                                        variants={spanVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={transition}
                                        className="overflow-hidden"
                                    >
                                        {tab.title}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default Page