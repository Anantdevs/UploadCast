import React from "react";
import { motion } from "framer-motion";
function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-11 bottom-[0.125rem] rounded-full bg-black "
    />
  );
}

export default Cursor;
