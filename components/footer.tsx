"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <footer className="py-5 border border-t border-white/15 ">
      <div className="container">
        {/* main wrapping div */}
        <div className="flex flex-col gap-y-8 lg:items-center lg:flex-row justify-between">
          {/* left or top div */}
          <div className="flex gap-x-5 items-center">
            <Image
              src="/MetaPoise.png"
              alt="developer"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="font-medium">Metapoise</p>
          </div>
          {/* middle div */}
          <div className="flex flex-col lg:flex-row gap-x-8 ">
            <a
              href="https://www.instagram.com/metapoise_official/"
              className=" text-xs md:text-sm text-white/70 hover:text-white py-2 md:py-4"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/%F0%9D%99%BC%F0%9D%99%B4%F0%9D%9A%83%F0%9D%99%B0%F0%9D%99%BF%F0%9D%99%BE%F0%9D%99%B8%F0%9D%9A%82%F0%9D%99%B4/61564376692181/?mibextid=kFxxJD"
              className=" text-xs md:text-sm text-white/70 hover:text-white py-2 md:py-4"
            >
              facebook
            </a>

            <a
              href="#"
              className=" text-xs md:text-sm text-white/70 hover:text-white py-2 md:py-4"
            >
              Home
            </a>
          </div>
          {/* right or bottom div */}

          <motion.div
            className="flex "
            whileInView={{
              scale: [1.04, 1.09, 1.04, 1.01, 1.04],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Link href="https://portfolio-website-nu-lyart.vercel.app/">
              <Image
                src="/team/ayush.jpeg"
                alt="developer"
                width={40}
                height={40}
                className="rounded-full opacity-70 hover:opacity-100 ml-8"
              />
              <p className="text-xs hover:text-white text-white/70">
                Developer | Connect
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
