import React from "react"
import { Spotlight } from "./ui/spotlight"
import { FloatingDockDemo } from "./navbar"
import BlurIn from "./magicui/blur-in"

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Fixed NavBar */}
      <div className="hidden md:block fixed top-10 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl p-4">
        <FloatingDockDemo />
      </div>

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        {/* Content below the fixed nav */}

        <BlurIn
          word="Metapoise"
          className="text-4xl md:text-8xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        />

        <p className="mt-4 font-normal text-base md:text-xl text-neutral-500 max-w-2xl text-center mx-auto">
          A celebration of innovation, where cutting-edge technology meets
          creativity, showcasing futuristic ideas, gadgets, and solutions that
          shape tomorrow.
        </p>
      </div>
    </div>
  )
}
