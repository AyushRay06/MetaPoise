import { About } from "@/components/about"
import { SpotlightPreview } from "@/components/hero"
import { LensDemo } from "@/components/prof"
import { InfiniteMovingCardsDemo } from "@/components/sponsors"
import { TimelineDemo } from "@/components/timeline"

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
