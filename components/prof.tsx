"use client" // Ensure this is at the top for client-side rendering

import React from "react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { IconAppWindow } from "@tabler/icons-react"
import Image from "next/image"

export function BackgroundGradientDemo() {
  return (
    <div className=" md:flex justify-center gap-14  px-12">
      {/* BackgroundGradient component is assumed to work on the client */}
      <div className="py-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/kd.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Kaushik Das | Faculty Convener
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            METAPOISE v1.0 has been thoughtfully curated to provide a platform
            for both learning and interaction, where ideas can flourish and
            collaborations can be born. This year’s fest promises an exciting
            array of events designed to engage and inspire participants from all
            backgrounds.
          </p>
        </BackgroundGradient>
      </div>
      <div className="py-4">
        {/* Another instance of BackgroundGradient */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/nomimaam.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Nomi Baruah | HOD, CSE
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Welcome to Metapoise v1.0, our first Techno Alumni Meet! This event
            celebrates our shared journey, achievements, and the strong bonds
            within our academic family. It&apos;s a chance to reconnect, inspire
            students, and explore new tech. Thanks to the organizers, and I hope
            you enjoy the event filled with enriching discussions and
            camaraderie!
          </p>
        </BackgroundGradient>
      </div>
    </div>
  )
}
