"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const Collaboration = () => {
  return (
    <section className="flex place-content-center gap-2  px-8 py-24">
      <div className="">
        <FlipLink href="https://gdg.community.dev/gdg-on-campus-dibrugarh-university-dibrugarh-india/">
          GDG.DU
        </FlipLink>

        <FlipLink href="#">IEEE.DU</FlipLink>

        <FlipLink href="https://sanganak-codingclub-website.web.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYnFdNPY9mZEySRmnwKo0G8kYq8VLnClFHHinuw66mFLpfm2O2jhgwnYPs_aem_PR_67U02RX-1j8c7M2nGTg">
          Sanganak
        </FlipLink>
      </div>
      <div className="hidden md:block flex-col justify-center items-center text-center">
        <Image src="/sponsors/gdg.png" alt="gdc" width={100} height={100} />
        <Image src="/sponsors/ieee.png" alt="gdc" width={120} height={120} />
        <Image
          src="/sponsors/sanganak.png"
          alt="gdc"
          width={200}
          height={200}
          className=""
        />
      </div>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}
export default Collaboration
