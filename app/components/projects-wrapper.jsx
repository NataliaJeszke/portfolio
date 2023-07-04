'use client'

import classNames from "classnames";
import { motion } from "framer-motion";

export const ProjectsWrapper = ({ children, className, i }) => {
    return (
      <motion.div
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
    >
        {children}
      </motion.div>
    );
  };