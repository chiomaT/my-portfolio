import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#223117] text-white">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-full max-width-[100px] px-3 grid grid-cols-2 gap-8">
            <div className=" sm:right pl-3 pb-5">
                <p className="text-3xl font-bold inline border-b-4 border-pink-700">about</p>
            </div>
            </div>
            <div className="w-full max-width-[100px] px-3 sm:grid grid-cols-2 gap-8">
            <div className="sm:text-right font-bold text-4xl">
                <p>hi i'm chioma please take a look around</p>
            </div>
            <div>
                <p className="my-4">hi i'm chioma please take a look around'</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About