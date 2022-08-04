import React from "react";
import CSS from "../images/CSS.png";
import html from "../images/HTML.png";
import js from "../images/javascript.png";
import react from "../images/react.png";
import tailWind from "../images/tailwind.png";
import node from "../images/node.png";
import typescript from "../images/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="pt-20  md:mt-36 bg-[#000000] text-gray-200 w-full md:skills-section  "
    >
      <div
        name="conainer"
        className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center "
      >
        <div>
          <p className="text-3xl text-gray-50 font-bold inline border-b-4 border-[#ff007c] md:pt-44 md:text-4xl ">
            Skills
          </p>
          <p className="py-4 text-3xl mt-4 md:mt-0 md:text-2xl">
            These are some of the technologies i've worked with
          </p>
        </div>

        <div className="w-full grid  md:grid-cols-3 sm:grid-cols-2 gap-7 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg  duration-700">
            <img className="mx-auto w-20" src={js} alt="html icon"></img>
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg  duration-700">
            <img
              className="mx-auto w-20"
              src={typescript}
              alt="html icon"
            ></img>
            <p>TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg duration-700">
            <img className="mx-auto w-20" src={react} alt="html icon"></img>
            <p>reactJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg  duration-700">
            <img className="mx-auto w-20" src={node} alt="html icon"></img>
            <p>NodeJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg  duration-700">
            <img className="mx-auto w-20" src={CSS} alt="html icon"></img>
            <p>css3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg duration-700">
            <img className="mx-auto w-20" src={html} alt="html icon"></img>
            <p>HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[black] rounded-lg duration-700">
            <img className="mx-auto w-20" src={tailWind} alt="html icon"></img>
            <p>tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
