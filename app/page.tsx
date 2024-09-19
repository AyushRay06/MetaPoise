import { About } from "@/components/about"
import { AnimatedTooltipVolunteers } from "@/components/animated-tooltip"
import { SpotlightPreview } from "@/components/hero"
import { OrganizingTeam } from "@/components/organizing-team"
import { LensDemo } from "@/components/prof"
import { InfiniteMovingCardsDemo } from "@/components/sponsors"
import { TimelineDemo } from "@/components/timeline"

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <About />
      <TimelineDemo />
      <div>
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 my-16 md:my-20 lg:my-32">
          Faculty Advisors
        </h1>
      </div>
      <LensDemo />
      <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 my-16 md:my-20 lg:my-32">
        Organizers
      </h1>
      <OrganizingTeam />
      {/* <SparklesText
        className="flex justify-center text-2xl md:text-5xl font-bold text-zinc-300 my-32"
        text=" Organizing Team & Volunteers"
      /> */}
      <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-5xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 my-16 md:my-20 lg:my-32">
        Organizing Team &<br /> Volunteers
      </h1>
      <AnimatedTooltipVolunteers />
      <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mt-32 md:mt-64 lg:mt-96">
        Sponsors
      </h1>

      <InfiniteMovingCardsDemo />
    </div>
  )
}
