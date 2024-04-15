import React from "react";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";

const Project = () => {
  return (
    <div id="section4" className="mb-36">
      <div className="flex justify-between">
        <div className="ml-32">
          <h1 className="text-6xl text-black font-family-5">
            Take A Look At My <br /> Recent Project
          </h1>
          <button></button>
        </div>
        <div className="pr-24 pt-8">
          <button className="btn rounded-full text-white bg-[#358dff] hover:text-black hover:bg-white">
            ShowAll
            <FaLongArrowAltRight size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-32 mt-14 ml-5">
        <div className="flex w-[600px] h-[300px] gap-5 border rounded-xl p-8 items-center bg-[#ffeb3b] shadow-2xl">
          <div>
            <h1 className="text-xl font-bold">online Class</h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eius culpa eligendi autem sit saepe, esse dolor repellat quisquam!
            </p>
            <div className="mt-8">
              <a
                href="https://abrupt-collar.surge.sh/"
                className="btn rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                Live Link <FaLongArrowAltRight />
              </a>
              <a
                href="https://github.com/Easin2023/Learn-Loom-pro-web"
                className="btn rounded-full items-center text-white bg-black hover:text-black hover:bg-white ml-3"
              >
                <span>gitHub</span> <FaGithub />
              </a>
            </div>
          </div>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              className="w-[500px] rounded-xl transition duration-300 ease-in-out hover:scale-110 shadow-2xl"
              src="https://i.ibb.co/vXrfp6W/screencapture-abrupt-collar-surge-sh-2024-04-14-18-22-34.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-[600px] h-[300px] gap-5 border rounded-xl p-8 items-center bg-[#ffeb3b] shadow-2xl">
          <div>
            <h1 className="text-xl font-bold">Food sharing</h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eius culpa eligendi autem sit saepe, esse dolor repellat quisquam!
            </p>
            <div className="mt-8">
              <a
                href="https://forgetful-birth.surge.sh/"
                className="btn rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                Live Link <FaLongArrowAltRight />
              </a>
              <a
                href="https://github.com/Easin2023/Food-sharing-web"
                className="btn rounded-full items-center text-white bg-black hover:text-black hover:bg-white ml-3"
              >
                <span>gitHub</span> <FaGithub />
              </a>
            </div>
          </div>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              className="w-[500px] rounded-xl transition duration-300 ease-in-out hover:scale-110 shadow-2xl"
              src="https://i.ibb.co/SV5M5gf/rsz-2screencapture-forgetful-birth-surge-sh-2024-01-02-23-09-12.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-[600px] h-[300px] gap-5 border rounded-xl p-8 items-center bg-[#ffeb3b] shadow-2xl">
          <div>
            <h1 className="text-xl font-bold">CarBazar.com</h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eius culpa eligendi autem sit saepe, esse dolor repellat quisquam!
            </p>
            <div className="mt-8">
              <a
                href="https://carbazar-firebase-auth.web.app/"
                className="btn rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                Live Link <FaLongArrowAltRight />
              </a>
              <a
                href="https://github.com/Easin2023/Car-bazar-web"
                className="btn rounded-full items-center text-white bg-black hover:text-black hover:bg-white ml-3"
              >
                <span>gitHub</span> <FaGithub />
              </a>
            </div>
          </div>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              className="w-[500px] rounded-xl transition duration-300 ease-in-out hover:scale-110 shadow-2xl"
              src="https://i.ibb.co/rkHwKRw/screencapture-carbazar-firebase-auth-web-app-2024-01-02-23-22-03.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-[600px] h-[300px] gap-5 border rounded-xl p-8 items-center bg-[#ffeb3b] shadow-2xl">
          <div>
            <h1 className="text-xl font-bold">Todo List</h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eius culpa eligendi autem sit saepe, esse dolor repellat quisquam!
            </p>
            <div className="mt-8">
              <a
                href="https://tasteful-spring.surge.sh/"
                className="btn rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                Live Link <FaLongArrowAltRight />
              </a>
              <a
                href="https://github.com/Easin2023/scic-tack-assignment"
                className="btn rounded-full items-center text-white bg-black hover:text-black hover:bg-white ml-3"
              >
                <span>gitHub</span> <FaGithub />
              </a>
            </div>
          </div>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              className="w-[500px] rounded-xl transition duration-300 ease-in-out hover:scale-110 shadow-2xl"
              src="https://i.ibb.co/YbCD5Cg/screencapture-tasteful-spring-surge-sh-2024-01-02-23-14-57.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
