import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Banner from "../../component/Banner/Banner";
import RunningText from "../../component/RunningText/RunningText";
import AboutMe from "../../component/AboutMe/AboutMe";
import WorkProcess from "../../component/WorkProcess/WorkProcess";
import Project from "../../component/Project/Project";
import ProjectDetails from "../../component/ProjectDetails/ProjectDetails";
import ClintRatting from "../../component/ClintRatting/ClintRatting";
import TestimonialsSlider from "../../component/Test";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RunningText />
      <AboutMe />
      <WorkProcess />
      <Project />
      <ProjectDetails />
      <ClintRatting />
      <RunningText />
      <Footer />
    </div>
  );
};

export default Home;
