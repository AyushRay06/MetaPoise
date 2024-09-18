import BlurIn from "./magicui/blur-in"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export const About = () => {
  return (
    <div className=" max-w-5xl mx-auto p-10">
      <div className="flex items-center justify-center text-neutral-400 pb-10 text-2xl md:text-4xl font-semibold">
        <BlurIn word=" About Us" />
      </div>
      <TextGenerateEffect
        className="text-xs md:text-lg lg:text-2xl font-medium md:font-normal text-neutral-600"
        words=" MetaPoise is a dynamic techno-cultural cum alumni meet, designed to
            foster learning and networking in a vibrant atmosphere. This event
            brings together students, professionals, and esteemed alumni,
            offering a platform to explore the latest advancements in technology
            through workshops, discussions, and exhibitions. MetaPoise not only
            serves as a hub for innovation but also strengthens alumni
            connections, creating valuable opportunities for mentorship,
            collaboration, and professional growth. It's where knowledge meets
            culture, blending technology and tradition to inspire the next
            generation of innovators."
      />
    </div>
  )
}
