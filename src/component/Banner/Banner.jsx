import React from "react";
import { ImCloudDownload } from "react-icons/im";
import { IoArrowDownOutline } from "react-icons/io5";
import Resume from '../../assets/Full-Stack_Resume.pdf';

const Banner = () => {
  // const downloadFile = () => {
  //   window.location.href =
  //     "https://drive.google.com/file/d/1XZVEc_nPJaeMM90QG60wjnn2UJbbTiDv/view?usp=sharing";
  // };

  return (
    <div className="flex gap-10 mt-24 ml-32">
      <div>
        <img
          className="rounded-3xl"
          src="https://i.ibb.co/5MWWZD7/394559949-374692381622478-7628019852304827346-n-1-removebg-preview-1.png"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="uppercase text-7xl font-family-5 text-black">
          creative Web
        </h1>
        <div className="flex items-center gap-4 ml-16 font-family-5 text-black">
          <h1 className="border-b border-black w-16 border-4"></h1>
          <h1 className="uppercase text-7xl">Developer</h1>
        </div>
        <p className="mt-5">
          I'm a Full Stack Creative Web Developer & Software Engineer based in
          Warsaw, <br /> Poland. Providing the best development services for
          your next projects.
        </p>
        <div className="flex items-center gap-12 mt-14">
          <a
            // onClick={downloadFile}
            download="resume" href={Resume}
            className="btn w-44 text-xl rounded-full bg-[#358dff] text-white hover:bg-white hover:text-black"
          >
            Resume <ImCloudDownload />
          </a>
          <div className="flex items-center gap-3">
            <h1 className="border-2 border-black flex rounded-t-full rounded-b-full w-10 justify-center items-center h-16">
              <IoArrowDownOutline size={25} />
            </h1>
            <p className="text-sm font-bold">
              Keep <br /> scrolling
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-12">
          <h1 className="text-6xl text-black font-bold">W.</h1>
          <h1 className="font-bold">
            Award Winner <br /> Nominee
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
