import React from "react";
import { motion } from "framer-motion";
import { PagesAnimation } from "./PagesAnimation";

const PagesParent = ({ children }) => {
  return (
    <motion.div
      variants={PagesAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={"mt-pages"}
    >
      {children}
    </motion.div>
  );
};

export default PagesParent;
