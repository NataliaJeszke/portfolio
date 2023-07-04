'use client'

import { motion } from "framer-motion"

export default function ButtonProjects(){
    return(
        <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 rounded bg-blue-500 px-6 py-2 text-white"
      >
        Hover me
      </motion.button>
    )
}