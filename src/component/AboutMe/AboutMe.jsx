import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="mt-44 ">
      <h1 className="uppercase text-6xl font-family-5 text-black ml-28">
        about me
      </h1>
      <p className="ml-80 mt-4 mr-20">
        I am a passionate web developer with 15 year of experience in creating
        custom websites and web applications. My mission is to help businesses
        and organizations achieve their goals through effective and efficient
        web development solutions.
        <br />
        <br />
        As a dedicated web developer, I am committed to staying up-to-date with
        the latest technologies and trends in the industry. I approach each
        project with enthusiasm, creativity, and a focus on delivering a
        high-quality end product that meets the unique needs of each client.
        With a passion for innovation and an eye for detail, I specialize in
        creating intuitive and user-friendly web experiences. My goal is to not
        only meet but exceed my clients' expectations and deliver exceptional
        results every time.
      </p>
      <div className="flex gap-12 text-black mt-16 ml-80 font-medium">
        <div>
          <h1 className="text-xl font-bold">Strategy</h1>
          <ul className="mt-4 style ml-7">
            <li>Brand Building</li>
            <li>Marketing</li>
            <li>Communications</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">My Skill</h1>
          <ul className="mt-4 style ml-7">
            <li>React</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>Javascript</li>
            <li>Html</li>
            <li>css</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">Advice</h1>
          <ul className="mt-4 style ml-7">
            <li>Change Management</li>
            <li>Process Management</li>
            <li>organizational Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
