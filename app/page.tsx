import { About } from "@/components/about"
import { SpotlightPreview } from "@/components/hero"
import BlurIn from "@/components/magicui/blur-in"
import { ModeToggle } from "@/components/mode-toggle"
import { FloatingDockDemo } from "@/components/navbar"
import { LensDemo } from "@/components/prof"
import { InfiniteMovingCardsDemo } from "@/components/sponsors"
import { TimelineDemo } from "@/components/timeline"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <About />
      <TimelineDemo />
      <LensDemo />

      <InfiniteMovingCardsDemo />
    </div>
  )
}
