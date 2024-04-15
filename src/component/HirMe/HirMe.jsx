import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { SiUpwork } from "react-icons/si";

const HirMe = () => {
  return (
    <div id="section5" className="mb-20">
      <h1 className="text-6xl text-black font-family-5 ml-28 my-20">
        Hire me from the freelance <br /> marketplace Upwork
      </h1>
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-12">
          <div>
            <h1 className="text-4xl font-bold">
              Hi!. I'm a Freelance <br /> Web Developer
            </h1>
          </div>
          <div className="mr-32">
            <p className="flex items-center gap-3">
              <MdOutlineMailOutline />
              <span>mdeasinarafat016456@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <MdOutlineLocalPhone />
              <span>{"(+880)"}1645650504</span>
            </p>
            <p className="flex items-center gap-3">
              <IoLocationOutline />
              <span>Barisal, Bangladesh</span>
            </p>
          </div>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~0126ba7b8e5cdacbe5"
            className="btn text-xl flex items-center rounded-full bg-[#358dff] text-white hover:bg-white hover:text-black"
          >
            <SiUpwork />
            <span>Hir Me</span>
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HirMe;
