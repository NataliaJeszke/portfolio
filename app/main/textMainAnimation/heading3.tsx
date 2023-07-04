'use client'
import style from '../main.module.css'
import { motion } from "framer-motion"

export default function Heading3(){
    return(
        <motion.h3
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={style.h3}>With a bit of fullstack spice!
    </motion.h3>
    )
}