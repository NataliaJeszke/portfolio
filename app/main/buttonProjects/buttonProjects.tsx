"use client";

import { motion } from "framer-motion";
import Link from "next/link";



export default function ButtonProjects() {
  
  return (
<Link href="/projects">
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        className="mt-4 rounded bg-green-500 px-6 py-2 text-white"
      >
        Click for Projects
      </motion.button>
    </Link>
  );
}
