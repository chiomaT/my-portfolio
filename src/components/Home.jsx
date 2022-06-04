import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
const Home = () => {
  return (
    <div className="w-full h-screen bg-[#223117]">

        <div className="max-w-[400px] mx-auto px-8 flex flex-col justify-center h-full">
           <div>
               <p className="text-pink-600">Hi my name is</p>
               <h1 className="text-[#fcfcfc] text-4xl sm:text-7xl font-bold">Chioma Theresa Nwabugwu</h1>
               <h2 className="text-[#fcfc] text-4xl sm:text-7xl font-bold">I'm a fullstack developer</h2>
           </div>

           <div>
            <button className="text-[#fcfcfc] group border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-white duration-300" >
            View work
                <span className="group-hover:rotate-90 duration-300">
                 <HiArrowNarrowRight className="ml-2" />
                </span>
    
                </button>
        </div>
        </div>
        
        </div>
  )
}

export default Home