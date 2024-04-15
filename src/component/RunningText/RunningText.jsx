import React from "react";

const RunningText = () => {
  return (
    <div className="relative">
      <div className="h-24 bg-black mt-16 rotate-3 w-full"></div>
      <div className="bg-red-400 h-24 absolute top-0 -rotate-3 w-full">
        <marquee direction="left">
          <div className="flex gap-12 text-5xl text-white font-bold mt-5">
            <h1>Javascript</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>ReactJs</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>Html</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>Css</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>NodeJs</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>Mongodb</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>ExpressJs</h1>
            <h1 className="w-10 bg-white rounded-full h-6">.</h1>
            <h1>Firebase</h1>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default RunningText;
