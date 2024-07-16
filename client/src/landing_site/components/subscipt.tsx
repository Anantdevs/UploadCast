// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";
// import { Link } from "lucide-react";
// import React, { useState } from "react";/

function Footer() {
  return (
    <div className="z-[10000] bg-shadow-scroll flex h-screen w-screen bg-black justify-center items-center">
      <div className="bg-[#f5ff7d] w-11/12 h-3/4 rounded-[2.8rem] overflow-hidden flex gap-56">
        <div className="ml-10 my-10 h-fit w-[25rem] flex flex-col gap-10">
          <div className="text-2xl uppercase">
            Subscribe for fresh content and product updates.
          </div>
          <div className="border border-black rounded-md overflow-hidden">
            <input
              className="h-full w-full bg-[#f5ff7d] p-3"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          {/* <div className="w-[400]">
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
          </div> */}
        </div>
        <div className=" h-fit w-fit flex flex-row gap-10 mt-10 uppercase">
          <div>
            <p className="text-xs">Product</p>
            <div className="col1 h-fit w-fit flex flex-col gap-2 mt-4">
              <div>FROM EMAIL</div>
              <div>FROM SMS</div>
              <div>FROM QR CODES</div>
              <div>SUBSCRIPTION PAGES</div>
              <div>SUPPORT</div>
            </div>
          </div>
          <div>
            <p className="text-xs">Company</p>
            <div className="col2 h-fit w-fit flex flex-col gap-2  mt-4">
              <div>ABOUT US</div>
              <div>COMMUNITY</div>
              <div>PARTNERS</div>
              <div>GET IN TOUCH</div>
              <div>PRIVACY</div>
              <div>TERMS</div>
            </div>
          </div>
          <div>
            <p className="text-xs">Content</p>
            <div className="col3 h-fit w-fit flex flex-col gap-2  mt-4">
              <div>RESOURCE HUB</div>
              <div>BLOG</div>
              <div>PODCAST</div>
              <div>NEWSLETTER</div>
            </div>
          </div>
          <div>
            <p className="text-xs">Social</p>
            <div className="col4 h-fit w-fit flex flex-col gap-2  mt-4">
              <div>LINKEDIN</div>
              <div>TWITTER</div>
              <div>INSTAGRAM</div>
              <div>TIKTOK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
