'use client'

import classNames from "classnames";
import { motion } from "framer-motion";

export const PageWrapper = ({ children, className }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={classNames("min-h-screenHeightWithoutHeader")}
      >
        {children}
      </motion.div>
    );
  };