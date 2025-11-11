"use client"

import { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export default function Background({ children }) {
  const [intensity, setIntensity] = useState(1.5)
  const [speed, setSpeed] = useState(1.0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [activeEffect, setActiveEffect] = useState("mesh")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pnpm i 21st")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] relative">
      {activeEffect === "mesh" && (
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={["#ffffff", "#eaeaea", "#d8d8d8", "#f5f5f5"]}
          speed={speed}
          backgroundColor="#ffffff"
        />
      )}

      {activeEffect === "dots" && (
        <div className="w-full h-full absolute inset-0 bg-[#fafafa]">
          <DotOrbit
            className="w-full h-full"
            dotColor="#bfbfbf"
            orbitColor="#d3d3d3"
            speed={speed}
            intensity={intensity}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            className="w-full h-full absolute inset-0"
            colors={["#fefefe", "#ebebeb", "#cccccc", "#f7f7f7"]}
            speed={speed * 0.5}
            wireframe="true"
            backgroundColor="#ffffff"
          />
          <div className="w-full h-full absolute inset-0 opacity-60">
            <DotOrbit
              className="w-full h-full"
              dotColor="#bfbfbf"
              orbitColor="#d6d6d6"
              speed={speed * 1.5}
              intensity={intensity * 0.8}
            />
          </div>
        </>
      )}

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 pointer-events-auto"></div>
        <div className="absolute bottom-8 left-8 pointer-events-auto"></div>
        <div className="absolute bottom-8 right-8 pointer-events-auto space-y-4"></div>
        <div className="absolute top-8 right-8 pointer-events-auto"></div>
      </div>

      {/* Subtle glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#e0e0e0]/60 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#f2f2f2]/80 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#d6d6d6]/70 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>

      {children}
    </div>
  )
}
