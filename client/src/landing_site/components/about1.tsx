import accordionData from "../utils/accord_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { SetStateAction, useState } from "react";

function About1() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index: SetStateAction<number>) => {
    setOpenIndex(index);
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      style={{ backgroundColor: "#ede6e2" }}
      className="bg-shadow-scroll w-full h-max px-10 pt-16 pb-32"
    >
      <div className="w-full h-full">
        <div className=" pl-40">
          <div
            className="autoShow uppercase text-7xl mb-16"
            style={{ textAlign: "end" }}
          >
            GET MORE FROM YOUR AUTOMATIONS AND FLOWS
          </div>
        </div>
        <div className="w-full rounded-3xl grid grid-cols-[500px_minmax(600px,_1fr)] border-r-4 border-solid border-2 border-black overflow-hidden">
          <div className="accordion border-r-2 border-black ">
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  height: index == openIndex ? "30vw" : "auto",
                  backgroundColor: index == openIndex ? "yellow" : "",
                }}
                className="accordion-item border-b-2 border-black p-4"
                style={{
                  backgroundColor: index == openIndex ? "yellow" : "",
                  height: index == openIndex ? "30vw" : "auto",
                  overflow: "hidden",
                }}
              >
                <div
                  className={`accordion-title ${
                    index === openIndex ? "open" : ""
                  }`}
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex flex-row justify-between text-2xl">
                    {item.question}
                    {!(openIndex === index) ? (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ paddingRight: "1vw" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="accordion-content">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
          <div
            className="accordian "
            style={{
              background: `url(${accordionData[openIndex].image}) center center / cover no-repeat`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About1;
