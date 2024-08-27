import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Masker() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const handleMouseEnter1 = () => {
    setHover(true);
  };
  const handleMouseLeave1 = () => {
    setHover(false);
  };
  const handleMouseEnter2 = () => {
    setHover2(true);
  };
  const handleMouseLeave2 = () => {
    setHover2(false);
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="w-full pt-12 "
      style={{
        backgroundColor: "#ede7e2",
      }}
    >
      <div className="textstructure mt-40 px-20 ">
        {["THE EASIEST WAY", "TO Edit", "audio"].map((item, index) => (
          <div className="masker">
            {index === 1 ? (
              <div className="inline-block ">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "15vh" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                  style={{
                    backgroundColor: "#D97A6C",
                    height: "13vh",
                    width: "15vh",
                    borderRadius: "2vh",
                    position: "relative",
                    bottom: "4.5vh",
                    marginRight: "1vh",
                  }}
                  className="flex text-xl justify-center items-center"
                >
                  <motion.div
                    id="playIcon"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: "100%",
                      rotate: hover2 ? 405 : 0,
                    }}
                    transition={{ opacity: { delay: 0.3 } }}
                  >
                    <FontAwesomeIcon className="size-12" icon={faArrowUp} />
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              ""
            )}
            <motion.h1
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }} // Animation duration
              key={index}
              className="uppercase text-9xl leading-[-5.5vw] inline-block "
              style={{
                transformOrigin: "0% 100%", // Set transform origin to bottom-left corner
              }}
            >
              {item}
            </motion.h1>
            {index === 2 ? (
              <Link to="/main_project">
                <motion.div
                  onMouseEnter={() => handleMouseEnter1()}
                  onMouseLeave={() => {
                    handleMouseLeave1();
                  }}
                  style={{
                    backgroundColor: "black",
                    overflow: "hidden",
                    display: "flex",
                    width: "35%",
                    height: "80px",
                  }}
                  className="button text-5xl  border rounded-full items-center justify-center overflow-hidden"
                >
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{
                      x: hover ? "182px" : 0,
                      height: hover ? "75px" : "",
                      width: hover ? "75px" : "",
                    }}
                    transition={{
                      height: { duration: 0.3 },
                      width: { duration: 0.3 },
                    }}
                    className="bg-[#f5ff7d] capitalize w-full h-full flex justify-center items-center border-2 rounded-full border-black"
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
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="pl-48">
        <div className=" mt-20 text-xl w-96 mb-96">
          Learncast creates and edit better audio and videos
          It edit your audio faster than the API call .
        </div>
      </div>
    </div>
  );
}

export default Masker;
