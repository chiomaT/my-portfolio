import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#252527] p-5 flex justify-center items-center">
        <form className="max-w-[600px] flex flex-col w-full" method="post" action="https://getform.io/f/c90aea30-b7df-44f6-925c-6d07dc17b3c4">
            <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-[#ff007c] text-[#fcfcfc]">
                contact
            </p>
            <p className="p-4 text-gray-400">Submit the form below</p>
            </div>
           <input type ="text" placeholder ="name" name="name" className="bg-[#fcfcfc] p-3 rounded-lg" ></input>
           <input type ="email" placeholder ="Email" name="Email" className="my-4 p-3 bg-[#fcfcfc] rounded-lg"></input>
    <textarea name="message" rows = "5" placeholder ="Message" className="p-3 rounded-lg"></textarea>
    <button className="text-[#fcfcfc] w-[200px] border-2 border-[#ff007c] rounded-lg px-2 py-2 my-2 flex items-center hover:bg-[#ff007c] hover:border-white duration-300">Let's collaborate</button>
        </form>
        </div>
  )
}

export default Contact