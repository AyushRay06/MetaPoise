"use client"
import React from "react"
import {
  InfiniteMovingCards,
  MajorInfiniteMovingCards,
} from "./ui/infinite-moving-cards" // Assuming this is the updated component

export function MinorSponsors() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={sponsorLogos} direction="left" speed="fast" />
    </div>
  )
}
export function MajorSponsors() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <MajorInfiniteMovingCards
        items={MajorSponsorLogos}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const sponsorLogos = [
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
  {
    imageUrl: "/sponsors/s6.jpeg",
    altText: "Sponsor 6",
  },
  {
    imageUrl: "/sponsors/s7.jpeg",
    altText: "Sponsor 7",
  },
]
const MajorSponsorLogos = [
  {
    imageUrl: "/sponsors/s8.jpeg",
    altText: "Oil-India",
  },
  {
    imageUrl: "/sponsors/s1.jpeg",
    altText: "BCPL",
  },
  {
    imageUrl: "/sponsors/s9.jpeg",
    altText: "Cognitive tech",
  },
]
