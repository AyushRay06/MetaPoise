"use client"
import React from "react"
import { AnimatedTooltip } from "./ui/animated-tooltip"

const volunteers = [
  {
    id: 1,
    name: " Madhushree Bhattacharjee",
    designation: "Anchor",
    image: "/team/m.jpeg",
  },
  {
    id: 2,
    name: "Parinita Baruah",
    designation: "Documentation",
    image: "/team/ppp.jpeg",
  },
  {
    id: 3,
    name: "Shahzad Amin",
    designation: "Documentation",
    image: "/team/s.jpeg",
  },
  {
    id: 4,
    name: "Kasturi Devi",
    designation: "Volunteer",
    image: "/team/k.jpeg",
  },
  {
    id: 5,
    name: "Ishani Phukan",
    designation: "Design",
    image: "/team/i.jpeg",
  },
  {
    id: 6,
    name: "Pranjit Hazarika",
    designation: "Allumni contact & Documentation",
    image: "/team/pra.jpeg",
  },
  {
    id: 7,
    name: "Rijaul Haque",
    designation: "Volunteer",
    image: "/team/re.jpg",
  },

  {
    id: 8,
    name: "Gargi Hatibaruah",
    designation: "Documentation",
    image: "/team/g.jpg",
  },
]

export function AnimatedTooltipVolunteers() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={volunteers} />
    </div>
  )
}
