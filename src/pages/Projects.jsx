import React from "react";
import expense from "../images/expense.jpg";
import starwars from "../images/star-wars.jpg";
import annie from "../images/annie.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full h-full text-gray-400 bg-[#000000] gap-4 work-section md:h-screen"
    >
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff007c]  text-gray-200">
            Work
          </p>
          <p className="py-5 text-2xl">my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
          <div
            style={{ backgroundImage: `url(${annie})` }}
            className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                Reading catalogue
              </span>

              <div className="pt-8 text-center">
                <a href="https://tes-reading-list-a7c954.netlify.app/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chiomaT/my-reading-list-frontend">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${expense})` }}
            className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                Expense Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://tes-expense-tracker.netlify.app/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chiomaT/Expense-tracker">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${starwars})` }}
            className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                <h2>Star wars characters</h2>
              </span>
              <div className="pt-8 text-center">
                <a href="https://chioma-star-wars.netlify.app/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chiomaT/Decagon-week1-task">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
