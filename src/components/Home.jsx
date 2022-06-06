import React from 'react'
import photo from "../images/Theresa.jpeg"
import {HiArrowNarrowRight} from "react-icons/hi"
const Home = () => {
  return (
    <div name ="home" className="w-full h-screen bg-[#252527]">

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="w-full max-width-[300px] px-3 grid grid-cols-2 gap-20">
            <div>
              <img src={photo} alt="my photo"></img>
            </div>
           <div>
               <p className="text-[#ff007c]">Hi, my name is</p>
               <h3 className="text-gray-300 text-2xl sm:text-4xl font-bold">Chioma Theresa Nwabugwu,</h3>
               <p className="text-[#fcfc] text-2xl sm:text-2xl font-bold">I'm a fullstack JavaScript developer from Nigeria, </p>
               <p className="text-gray-300"> I've been working with JavaScript for two years and have gained hands-on experience using few JavaScript libraries like Reactjs and NodeJs. Learning and evolving both professionally and personally are my core engines in life.</p>
           </div>

           <div>
            <button className="text-gray-300 rounded-lg group border-2 px-3 py-3 my-2 border-[#ff007c] flex items-center hover:bg-[#ff007c] hover:border-[#ff007c] duration-300" >
            View work
                <span className="group-hover:rotate-90 duration-300">
                 <HiArrowNarrowRight className="ml-2" />
                </span>
    
                </button>
        </div>
        </div>
        </div>
        
        </div>
  )
}

export default Home