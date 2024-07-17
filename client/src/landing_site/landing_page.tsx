// If using React Router for navigat
// import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/navbar";
import Masker from "./components/masker";
import About1 from "./components/about1";
import Marque from "./components/marquee";
import Footer from "./components/subscipt";
// import LocomotiveScroll from "locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";

// import LocomotiveScroll from "locomotive-scroll";

const LandingPage = () => {
  new LocomotiveScroll();
  return (
    <div style={{ backgroundColor: "#ede7e2" }} className="w-full ">
      <Navbar />
      <Masker />
      <About1 />
      <Marque />
      <Footer />
    </div>
  );
};

export default LandingPage;
