import React from "react";

const ProjectDetails = () => {
  return (
    <div className="bg-red-400 text-white flex h-36 justify-around">
      <div className="flex items-center gap-4">
        <h1 className="text-5xl font-bold text-white">30</h1>
        <p>completed project</p>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-5xl font-bold text-white">100%</h1>
        <p>Client satisfaction</p>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-5xl font-bold text-white">3</h1>
        <p>On-Going Project</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
