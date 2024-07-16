import { Link } from "react-router-dom"; // If using React Router for navigat
import Navbar from "./components/navbar";
import Masker from "./components/masker";
import About1 from "./components/about1";
import Marque from "./components/marquee";
import Footer from "./components/subscipt";
import LocomotiveScroll from "locomotive-scroll";

// import LocomotiveScroll from "locomotive-scroll";

const LandingPage = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const marqueSection = document.getElementById("marquee");
  let top = 0;
  if (marqueSection) {
    const { top: sectionTop } = marqueSection.getBoundingClientRect();
    top = sectionTop;
  }
  return (
    <div style={{ backgroundColor: "#ede7e2" }} className="w-full ">
      <Navbar reach={top} />
      <Masker />
      <About1 />
      <Marque />
      <Footer />
    </div>
  );
};

export default LandingPage;
