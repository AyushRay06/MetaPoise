"use client"
import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards" // Assuming this is the updated component

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={sponsorLogos} direction="left" speed="fast" />
    </div>
  )
}

const sponsorLogos = [
  {
    imageUrl: "/sponsors/s1.jpeg",
    altText: "Sponsor 1",
  },
  {
    imageUrl: "/sponsors/s2.jpeg",
    altText: "Sponsor 2",
  },
  {
    imageUrl: "/sponsors/s3.jpeg",
    altText: "Sponsor 3",
  },
  {
    imageUrl: "/sponsors/s4.jpeg",
    altText: "Sponsor 4",
  },
  {
    imageUrl: "/sponsors/s5.jpeg",
    altText: "Sponsor 5",
  },
]
