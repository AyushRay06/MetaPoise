import { AnimatedTooltipVolunteers } from "@/components/animated-tooltip"
import { OrganizingTeam } from "@/components/organizing-team"
import { InfiniteMovingCardsDemo } from "@/components/sponsors"
import { TimelineDemo } from "@/components/timeline"
import { Hero } from "@/components/hero"
import { BackgroundGradientDemo } from "@/components/prof"
import { Footer } from "@/components/footer"
import { Header } from "@/components/navabar"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TimelineDemo />
      <div className="my-36 md:my-44">
        <h1 className="mb-8 md:mb-16 text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
          Faculty Advisors
        </h1>
        <BackgroundGradientDemo />
      </div>
      <h1 className="mb-8 md:mb-16 text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
        Organizers
      </h1>
      <OrganizingTeam />
      {/* <SparklesText
        className="flex justify-center text-2xl md:text-5xl font-bold text-zinc-300 my-32"
        text=" Organizing Team & Volunteers"
      /> */}
      <h1 className="mb-8 md:mb-16 text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
        Organizing Team &<br /> Volunteers
      </h1>
      <AnimatedTooltipVolunteers />
      <h1 className="mt-32 md:mt-40 text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
        Sponsors
      </h1>
      <InfiniteMovingCardsDemo />
      {/* collabration gdsc ieee */}
      <div className="m-10 max-w-7xl mx-auto px-10"></div>
      <Footer />
    </>
  )
}
