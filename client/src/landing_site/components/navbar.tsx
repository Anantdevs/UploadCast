import { useState } from "react";
import Cursor from "./nav_comp/cursor";
import Litem from "./nav_comp/li_item";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // const ref2 = useRef<HTMLLIElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [opacityhover, setOpacityhover] = useState(0);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setOpacityhover(100);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setOpacityhover(0);
  };
  return (
    <div className=" fixed z-[999] w-full px-20 py-8 flex justify-between items-center backdrop-blur-[3px]">
      <div className="logo">
        <div>
          <svg
            width="200"
            height="80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="50 0 170 80"
            className="svg_fill"
          >
            <style>
              {`.logo-text {
          font-family: Arial, sans-serif;
          font-size: 24px;
          // fill: #333;
        }
        .mic-icon {
          // fill: #333;
        }`}
            </style>
            <path
              className="mic-icon"
              d="M80,50c-10.5,0-19-8.5-19-19V9c0-5,4-9,9-9s9,4,9,9v22C99,41.5,90.5,50,80,50z M80,6c-3.9,0-7,3.1-7,7v22 c0,2.8,1.1,5.3,2.9,7.1C75.7,43.6,76,43.8,76,44v-28C76,9.5,76.5,9,77,9s1,0.5,1,1v28c0,0.2,0.3,0.4,0.5,0.1C85.9,40.3,87,37.8,87,35V13 C87,9.1,83.9,6,80,6z"
            />
            <text x="92" y="40" className="logo-text">
              Learncast
            </text>
          </svg>
        </div>
      </div>
      <ul
        className="navbar links flex gap-10 relative rounded-full border-2  p-3 bg-[#ede7e2]"
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        {[
          "Home",
          "products",
          "About",
          "pricing",
          "login",
          "book a demo",
        ].map((item, index) => (
          <Litem item={item} index={index} setPosition={setPosition} />
        ))}
        <Cursor position={position}></Cursor>
      </ul>
      <ul className="ml-10 flex gap-5 relative p-3 b">
        {["login", "book a demo"].map((item, index) => (
          <Link to={`${index === 1 ? "/main_project" : ""}`}>
            <motion.div
              className={`rounded-full border-2 navbar
                h-12 flex items-center justify-center overflow-hidden bg-black ${
                  index == 1 ? "w-52" : "w-28"
                }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.li
                key={index}
                initial={{ x: 0 }}
                animate={{
                  x:
                    hoveredIndex === index ? (index == 1 ? "80px" : "150%") : 0,
                  height:
                    hoveredIndex === index ? (index == 1 ? "38px" : "") : "",
                  width:
                    hoveredIndex === index ? (index == 1 ? "38px" : "") : "",
                }}
                transition={{
                  height: { duration: 0.3 },
                  width: { duration: 0.3 },
                }}
                className={`rounded-full text-md capitalize font-semibold flex gap-2 items-center justify-center text-black mix-blend-difference w-full h-full overflow-hidden ${
                  index == 1 ? "bg-[#f5ff7c]" : "bg-[#ede6e2]"
                }`}
              >
                <motion.h1
                  animate={{ opacity: hoveredIndex === index ? 0 : "100%" }}
                  transition={{ opacity: { duration: 0.0 } }}
                  className="flex justify-center items-center"
                >
                  {hoveredIndex === null && hoveredIndex == 1 ? (
                    <FontAwesomeIcon className="size-4" icon={faArrowUp} />
                  ) : (
                    <div className="flex gap-2 justify-center items-center">
                      {item}
                      <FontAwesomeIcon className="size-4" icon={faArrowUp} />
                    </div>
                  )}
                </motion.h1>
              </motion.li>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex == index ? opacityhover : 0 }}
                transition={{ opacity: 0.0 }}
                className="text-white text-md capitalize absolute"
              >
                {item}
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
