import React from 'react'
import expense from "../images/expense.jpg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-400 bg-[#252527]">
        <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff007c]  text-gray-200">Work</p>
            <p className="py-6">some of my work</p>
            </div>
          {/* grid container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {/* grid items */}
              <div style={{backgroundImage:`url(${expense})`}} className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div">
                  {/* hover effect */}
                  <div className ="opacity-0 group-hover:opacity-100">
                      <span className ="text-2xl tracking-wider text-white font-bold">
                          React Application
                      </span>
                      <div className ="pt-8 text-center">
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Demo</button>
                          </a>
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Code</button>
                          </a>
                      </div>
                  </div>
              </div>
               {/* grid items */}
               <div style={{backgroundImage:`url(${expense})`}} className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div">
                  {/* hover effect */}
                  <div className ="opacity-0 group-hover:opacity-100">
                      <span className ="text-2xl tracking-wider text-white font-bold">
                          React Application
                      </span>
                      <div className ="pt-8 text-center">
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Demo</button>
                          </a>
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Code</button>
                          </a>
                      </div>
                  </div>
              </div>
                {/* grid items */}
                <div style={{backgroundImage:`url(${expense})`}} className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div">
                  {/* hover effect */}
                  <div className ="opacity-0 group-hover:opacity-100">
                      <span className ="text-2xl tracking-wider text-white font-bold">
                          React Application
                      </span>
                      <div className ="pt-8 text-center">
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Demo</button>
                          </a>
                          <a href="http://">
                              <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-white">Code</button>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Work