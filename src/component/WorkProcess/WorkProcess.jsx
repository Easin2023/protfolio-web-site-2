import React from "react";
import "./WorkProcess.css";
const WorkProcess = () => {
  return (
    <div id="section3" className="bg-black mb-48 mt-24">
      <h1 className="uppercase text-6xl font-family-5 text-white text-center py-24">
        My Work Process
      </h1>
      <div className="flex gap-20 items-center px-60">
        <div className="text-white font-bold ">
          <div className="flex items-center gap-3 mb-20">
            <h1 className="text-blue-500">01.</h1>
            <h1 className="text-4xl text-blue-500">Research</h1>
          </div>
          <div className="flex items-center gap-3 mb-20">
            <h1>02.</h1>
            <h1 className="text-4xl">strategy</h1>
          </div>
          <div className="flex items-center gap-3 mb-20">
            <h1>03.</h1>
            <h1 className="text-4xl">Development</h1>
          </div>
        </div>
        <div className="pb-20">
          <div className="element">
            <div className="circle1"></div>
            <div className="vline1"></div>
            <div className="circle circle-black"></div>
            <div className="vline"></div>
            <div className="circle circle-black"></div>
          </div>
        </div>
        <div className=" text-white ">
          <h1 className="mb-20">
            I start by learning and researching based on client brief and
            resource to gain about the needs, goals, products, and requirements
            to do well.
          </h1>
          <h1 className="mb-20">
            Then start to plan and structure the project process and budget
            based on the discovery phase before start the development
          </h1>
          <h1 className="mb-20">
            After I completed all the processes, goals, and scope, I started to
            do the development process such as creating basic codes and
            programming
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
