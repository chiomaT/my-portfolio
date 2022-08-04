import React from "react";
import Resume from "../images/resume.pdf";

const About = () => {
  return (
    <div
      name="about"
      className="pt-20 w-full bg-[#000000] text-white  md:pt-44   md:mt-0 about"
    >
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col md:justify-center">
        <div className="w-full max-width-[100px] px-3 grid grid-cols-2 gap-8">
          <div className=" md:mt-0 sm:right md:pl-3 pb-5">
            <p className="text-3xl font-bold inline border-b-4 border-[#ff007c]  md:px-5 lg:px-0 about-page ">
              About
            </p>
          </div>
        </div>
        <div className=" space-y-6 md:space-y-0 w-full max-width-[1000px] px-3 md:grid md:grid-cols-2 md:gap-8">
          <div className="text-left font-bold text-4xl">
            <p className="text-[#fcfcfc] mt-6 text-3xl sm:text-2xl md:text-2xl ">
              Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-base my-4 text-gray-300 md:text-2xl">
              {" "}
              I'm a Product engineer that solves technical problems without
              losing sight of why the product exists. I have developed software
              solutions for business use cases from conceptualization to
              deployment. I am currently working with Decagon as a full stack
              software Engineer, and also as a technical instructor for beginner
              NodeJs Engineers.
              <a
                href={Resume}
                className=" text-[#ff007c] hover:text-gray-300 pl-2 duration-500"
              >
                Download resume
              </a>
              <span className="pl-2">
                for more details on my skills and experiences
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
