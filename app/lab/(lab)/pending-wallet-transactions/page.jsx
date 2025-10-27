"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

const cardData = [
  {
    img: "https://i.pinimg.com/736x/9d/3a/73/9d3a738899eef34eab56790027a43ae9.jpg",
    title: "Ethereum",
    subtitle: "Sending to Vitalik",
    rightText: "$20.00",
  },
  {
    img: "https://i.pinimg.com/736x/98/b7/b8/98b7b8e34083ec0efcae73e2d89a3cbb.jpg",
    title: "Dead Fellaz",
    subtitle: "Sending to Vitalik",
    rightText: "fee only",
    bordered: true,
  },
  {
    img: "https://i.pinimg.com/736x/27/68/fc/2768fc6e66392b4a5e2d74ae8a807737.jpg",
    title: "Happy Hour",
    subtitle: "Sending to Vitalik",
    rightText: "fee only",
    bordered: true,
  },
]

const spring = { type: "spring", stiffness: 150, damping: 20 }

export default function Cards() {
  const [open, setOpen] = useState(true)

  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-[#5652f5]">
      <div className="flex flex-col items-center gap-5">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-medium text-neutral-100">Pending</div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex gap-1 items-center cursor-pointer"
          >
            <span className="text-lg font-medium text-neutral-100">3</span>
            {open ? (
              <ChevronDown size={20} className="text-neutral-300" />
            ) : (
              <ChevronUp size={20} className="text-neutral-300" />
            )}
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center">
          {cardData.map((card, i) => {
            const yValues = [0, 10, 20]
            const widthValues = ["25vw", "24vw", "23vw"]
            const offset = open ? -(i * 65) : yValues[i]

            return (
              <motion.div
                key={card.title}
                layout
                initial={false}
                animate={{
                  width: open ? widthValues[i] : "25vw",
                  y: offset,
                }}
                transition={spring}
                className="flex justify-between items-center border border-white/30 rounded-xl p-1 bg-neutral-200/50 backdrop-blur-lg text-neutral-800 relative cursor-pointer"
                style={{ zIndex: 10 - i }}
              >
                {/* Left Image + Spinner */}
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-white rounded-full p-0.5">
                    <Spinner className="size-5 text-[#5652f5]" />
                  </div>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 rounded-lg aspect-square"
                  />
                </div>

                {/* Content */}
                <div className="w-full flex justify-between items-end font-medium px-2">
                  <div className="-space-y-1">
                    <div className="text-sm text-neutral-200">{card.subtitle}</div>
                    <div className="text-lg font-medium text-neutral-100">
                      {card.title}
                    </div>
                  </div>

                  {card.bordered ? (
                    <div className="text-neutral-200 capitalize border rounded-lg border-neutral-200 px-2 py-1 text-xs">
                      {card.rightText}
                    </div>
                  ) : (
                    <div className="text-neutral-200">{card.rightText}</div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
