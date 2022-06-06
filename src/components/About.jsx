import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#252527] text-white">
        <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
            <div className="w-full max-width-[100px] px-3 grid grid-cols-2 gap-8">
            <div className=" sm:right pl-3 pb-5">
                <p className="text-3xl font-bold inline border-b-4 border-[#ff007c] px-5">about</p>
            </div>
            </div>
            <div className="w-full max-width-[1000px] px-3 sm:grid grid-cols-2 gap-8">
            <div className="text-left  font-bold text-4xl">
                <p className="text-gray-300">Hi, please take a look around</p>
            </div>
            <div>
                <p className="my-4 text-gray-300">After graduating with a Bsc in Computer Science, I started woking with Javascript and have gained hands-on experience working with the Language for 2 years. I'm a proactive smart driven Product engineer, that solves technical problems without losing sight of why the product exists, with outstanding Leadership and research skills
                i have developed software solutions for Business use cases from conceptualization to deployment. 
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}


export default About