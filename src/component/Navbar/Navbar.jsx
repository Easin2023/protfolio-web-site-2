import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="mx-28 font-font-family-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link>
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link>
                <li>
                  <a>About me</a>
                </li>
              </Link>
              <Link>
                <li>
                  <a href="">Service</a>
                </li>
              </Link>
              <Link>
                <li>
                  <a href="">Work</a>
                </li>
              </Link>
              <Link>
                <li>
                  <a href="">Blog</a>
                </li>
              </Link>
            </ul>
          </div>
          <a className=" text-3xl font-family-5">Easin Arafat</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            <Link to="section1" smooth={true} duration={500}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="section2" smooth={true} duration={500}>
              <li>
                <a>About Me</a>
              </li>
            </Link>
            <Link to="section3" smooth={true} duration={500}>
              <li>
                <a href="">Service</a>
              </li>
            </Link>
            <Link to="section4" smooth={true} duration={500}>
              <li>
                <a href="">Work</a>
              </li>
            </Link>
            {/* <Link to="section5" smooth={true} duration={500}>
              <li>
                <a href="">Blog</a>
              </li>
            </Link> */}
            <Link to="section5" smooth={true} duration={500}>
              <li>
                <a href="">Hir To UpWork</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="section6" smooth={true} duration={500}>
            <a className="btn rounded-full bg-black text-white hover:bg-white hover:text-black shadow-lg">
              Contact Me
              <FaArrowRightLong />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
