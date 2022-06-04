import React, {useState} from "react";
import { FaTimes, FaBars,FaLinkedin, } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai"
import {BsFillPersonDashFill} from "react-icons/bs"
import {MdMarkEmailUnread} from "react-icons/md"

const Header = () => {
    const [header, setHeader] = useState(false)

    const handleClick = () => { 
        setHeader(!header)
    }

  return (
    <>
      <div className="fixed bg-[#223117] flex justify-between items-center px-4 w-full h-[80px] text-gray-300">
          <div className="header-logo text-[#e64096]">
          Header
          </div>
       
        {/* nav links */}
        <div className="nav-links">
        <ul className=" hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

        {/* hambuger menu */}
        <div onClick = {handleClick} className="md:hidden z-10">
            {!header ? <FaBars /> : <FaTimes />}
        </div>
      {/* mobile menu */}
    <div className={!header ? "hidden" :"absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center bg-[#223117]"}>
      <ul >
          <li className="text-2xl py-4">Home</li>
          <li className="text-2xl py-4">About</li>
          <li className="text-2xl py-4">Skills</li>
          <li className="text-2xl py-4">Work</li>
          <li className="text-2xl py-4">Contact</li>
        </ul>
      </div>

      <div className="hidden">
      <ul >
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* social media icons */}
      <div className="hidden lg:flex flex-col fixed left-0 top-[20%]">
          <ul>
              <li className=" w-[160px] h-[60px] flex justify-between items-center">
                  <a href="https://www.linkedin.com/in/chiomat/" className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-200">
                      LinkedIn <FaLinkedin size={30} />
                  </a>
              </li>

              <li className=" w-[160px] h-[60px] flex justify-between items-center">
                  <a href="#" className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-200">
                      Github <AiFillGithub size={30} />
                  </a>
              </li>

              <li className=" w-[160px] h-[60px] flex justify-between items-center">
                  <a href="#" className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-200">
                      Email <MdMarkEmailUnread size={30} />
                  </a>
              </li>

              <li className=" w-[160px] h-[60px] flex justify-between items-center">
                  <a href="#" className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-200">
                      Resume <BsFillPersonDashFill size={30} />
                  </a>
              </li>
          </ul>
      </div>
      </div>
    
    
    </>
  );
};

export default Header;
