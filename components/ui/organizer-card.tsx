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
    <div>
      <motion.div
        whileHover={{ scale: [1,0.8,1, 1.2, 1],  }}
        className="flex items-center justify-center"
      >
        <Image
          src={imageUrl}
          alt=""
          width={200}
          height={200}
          className="object-cover rounded-full shadow-lg shadow-slate-800 opacity-80 transition-shadow hover:opacity-100 "
        />
      </motion.div>
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
    </div>
  )
}
