'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function ButtonProjects(){
    return(
        <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 rounded bg-green-500 px-6 py-2 text-white"
      >
        <Link href="/projects">Click for Projects</Link>
      </motion.button>
    )
}