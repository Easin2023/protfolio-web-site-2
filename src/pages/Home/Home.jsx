import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Banner from "../../component/Banner/Banner";
import RunningText from "../../component/RunningText/RunningText";
import AboutMe from "../../component/AboutMe/AboutMe";
import WorkProcess from "../../component/WorkProcess/WorkProcess";
import Project from "../../component/Project/Project";
import ProjectDetails from "../../component/ProjectDetails/ProjectDetails";
import ClintRatting from "../../component/ClintRatting/ClintRatting";
import Footer from "../../component/Footer/Footer";
import HirMe from "../../component/HirMe/HirMe";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const [isVisible, setVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollButton = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButton);
    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <Navbar />
        <Banner />
        <RunningText />
        <AboutMe />
        <WorkProcess />
        <Project />
        <RunningText />
        <HirMe />
        <ProjectDetails />
        <ClintRatting />
        <RunningText />
        <Footer />
        <button
          onClick={scrollTop}
          className={`btn-circle hover:text-black hover:bg-white top-[90vh] right-10 text-white bg-[#358dff] btn ${
            isVisible ? "fixed" : "hidden"
          }`}
        >
          <IoIosArrowUp size={30} />
        </button>
      </div>
    </div>
  );
};

export default Home;
