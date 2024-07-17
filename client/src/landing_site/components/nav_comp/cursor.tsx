import { motion, AnimationProps } from "framer-motion";

interface Props {
  position: AnimationProps["animate"];
}
function Cursor({ position }: Props) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-11 bottom-[0.125rem] rounded-full bg-black "
    />
  );
}

export default Cursor;
