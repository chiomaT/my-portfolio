import React from "react";
import photo from "../images/Theresa.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      <div className="px-3 flex flex-col justify-center h-full xs:mb-8 md:max-w-[1000px] md:mx-auto md:px-8">
        <div className="w-full max-width-[300px] px-3 sm:grid grid-cols-2 gap-20">
          <div className="width-full mt-44 md:mt-0 max-h-[800px]">
            <img
              src={photo}
              alt="my photo"
              className=" rounded-lg h-full profile-image pt-44 md:pt-0 md:h-full md:w-full"
            ></img>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0 text-[#ff007c]">Hi, my name is</p>
            <h3 className=" text-gray-300 text-2xl md:text-2xl sm:text-4xl font-bold">
              Chioma Theresa Nwabugwu,
            </h3>
            <p className="text-[#fcfc] text-lg md:text-2xl sm:text-2xl font-bold">
              I'm a fullstack JavaScript developer from Nigeria.{" "}
            </p>
            <p className="text-gray-300 py-2 text-base md:text-2xl">
              {" "}
              I've been working with JavaScript for two years and have gained
              hands-on experience using few JavaScript libraries like Reactjs
              and NodeJs. Learning and evolving both professionally and
              personally are my core engines in life.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <button className="text-gray-300 rounded-lg group border-2 px-3 py-3 my-2 border-[#ff007c] flex items-center hover:bg-[#ff007c] hover:border-[#ff007c] duration-700">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
