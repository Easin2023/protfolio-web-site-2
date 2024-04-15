import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-black font-family-5 mt-32 text-center">
        INTERESTED IN WORKING <br /> TOGETHER?
      </h1>
      <p className="text-center mt-32">Drop me and email</p>
      <h1 className="text-2xl text-center font-bold">
        mdeasinarafat016456@gmail.com
      </h1>
      <hr className="mt-10"></hr>
      <div className="flex gap-4 my-10 justify-center">
        <a
          target="_blank"
          href="https://github.com/Easin2023"
          className="btn rounded-full hover:bg-[#358dff] hover:text-white bg-white text-black"
        >
          <FaGithub />
          <span>Github</span>
          <FaArrowRightLong />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/easi_arafat_khan/"
          className="btn rounded-full hover:bg-[#358dff] hover:text-white bg-white text-black"
        >
          <IoLogoInstagram />
          <span>Instagram</span>
          <FaArrowRightLong />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/Easin_Arafa"
          className="btn rounded-full hover:bg-[#358dff] hover:text-white bg-white text-black"
        >
          <BsTwitterX />
          <span>Twitter</span>
          <FaArrowRightLong />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100072451573313"
          className="btn rounded-full hover:bg-[#358dff] hover:text-white bg-white text-black"
        >
          <IoLogoFacebook />
          <span>Facebook</span>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default Footer;
