"use client"

import { Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

interface OrganizerCardProps {
  imageUrl: string
  imagealt?: string
  name: string
  role: string
  connect?: string
}

export const OrganizerCard = ({
  imageUrl,
  name,
  role,
  connect,
}: OrganizerCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: [1, 1.05, 1] }}
      className=" border-white/10 border-4 rounded-xl m-6 p-4 shadow-violet-400 shadow-md hover:shadow-violet-400 hover:shadow-2xl"
    >
      <div className="flex items-center justify-center">
        <Image
          src={imageUrl}
          alt=""
          width={200}
          height={200}
          className="object-cover rounded-full shadow-lg shadow-slate-800 opacity-80 transition-shadow hover:opacity-100 "
        />
      </div>
      <div className="py-4">
        <div className="">
          <h2 className="text-white text-lg font-bold flex  justify-center">
            {name}
            {connect ? (
              <Link href={connect}>
                <Link2 className="ml-4" />
              </Link>
            ) : (
              <p></p>
            )}
          </h2>
        </div>
        <div className="text-zind-200 text-lg font-extralight flex justify-center">
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
