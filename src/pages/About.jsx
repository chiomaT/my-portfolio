import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-48 mt-44 w-full h-custom-h-85 bg-[#000000] text-white  sm:pt-44 md:h-screen md:pt-0 md:mt-0 about"
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
              Hi, please take a look around.
            </p>
          </div>
          <div>
            <p className="text-base my-4 text-gray-300 md:text-2xl">
              {" "}
              I'm a proactive smart driven Product engineer, that solves
              technical problems without losing sight of why the product exists,
              with my hands-on experience with nodeJs, NodeTs , ReactJs and
              ReactTs and outstanding Leadership and research skills i have
              developed software solutions for Business use cases from
              conceptualization to deployment. After graduating with a Bsc in
              Computer Science, I started woking with Javascript and have gained
              hands-on experience working with the Language for 2 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
