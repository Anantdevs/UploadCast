import Marquee from "react-fast-marquee";
import img1 from "../images/mar1.jpg";
import img2 from "../images/mar2.jpg";
import img3 from "../images/mar3.jpg";
import img4 from "../images/mar4.jpg";
import img5 from "../images/mar5.jpg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function Marque() {
  const images = [img1, img2, img3, img4, img5];
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      id="marquee"
      className=" bg-shadow-scroll  w-full h-[115vh] bg-[#000000] text-white "
    >
      <div className="flex justify-end space-y-8">
        <div className="pt-16 ">
          <div className="autoShow text-7xl  w-[730px] mb-8">
            STOP FIGHTING WITH FLOWS USE REPEAT
          </div>
        </div>{" "}
      </div>
      <Link to="/main_project">
        <motion.div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
          style={{
            backgroundColor: "black",
            overflow: "hidden",
            display: "flex",
            width: "35%",
            height: "80px",
          }}
          className="button text-5xl  border rounded-full items-center justify-center overflow-hidden ml-[50vw]"
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: hover ? "210px" : 0,
              height: hover ? "75px" : "",
              width: hover ? "75px" : "",
            }}
            transition={{
              height: { duration: 0.3 },
              width: { duration: 0.3 },
            }}
            className="bg-[#f5ff7d] capitalize w-full h-full text-black flex justify-center items-center border-2 rounded-full border-black"
          >
            {!hover ? (
              <motion.h1
                initial={{ opacity: "100%" }}
                animate={{ opacity: hover ? 0 : "100%" }}
                transition={{ opacity: { duration: 0.0 } }}
                className="flex gap-6 justify-center items-center"
              >
                Book a demo
                <FontAwesomeIcon className="size-6" icon={faArrowUp} />
              </motion.h1>
            ) : (
              <FontAwesomeIcon className="size-6" icon={faArrowUp} />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hover ? "100%" : "0" }}
            className="text-md text-white absolute capitalize"
          >
            Book a Demo
          </motion.div>
        </motion.div>
      </Link>
      <Marquee>
        {images.map((item, index) => (
          <div className="border-2 border-white rounded-3xl overflow-hidden p-0 mx-4 mt-64">
            <div className="img_wrapper" key={index}>
              <img src={item} alt="" />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Marque;
