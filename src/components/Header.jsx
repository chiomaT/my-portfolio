import React, {useState} from "react";
import { FaTimes, FaBars } from "react-icons/fa";

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
      </div>
    
    
    </>
  );
};

export default Header;
