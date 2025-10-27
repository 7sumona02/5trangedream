"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"


const page = () => {
    const [toggle, setToggle] = useState(false)
    const menuBar = "absolute block h-[4px] w-full bg-black rounded-md transition-all duration-300 ease-in-out";
  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-neutral-50">
        <div className="block relative  menu-icon w-[40px] h-[30px] cursor-pointer" onClick={() => setToggle(!toggle)}>
            <div className={cn(menuBar, toggle? "rotate-45 top-[13px]" : "top-0 rotate-0")}></div>
            <div className={cn(menuBar, toggle ? "opacity-0 translate-x-5 top-[13px]" : "opacity-100 translate-x-0 top-[13px]")}></div>
            <div className={cn(menuBar, toggle ? "-rotate-45 top-[13px]" : "top-[26px] rotate-0")}></div>
        </div>
    </div>
  )
}

export default page