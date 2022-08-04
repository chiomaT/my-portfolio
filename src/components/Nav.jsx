import React, { useState } from "react";
import { FaTimes, FaBars, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillPersonDashFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-scroll";
import Resume from "../images/resume.pdf";

const Header = () => {
  const [header, setHeader] = useState(false);

  const handleClick = () => {
    setHeader(!header);
  };

  return (
    <>
      <div className="fixed bg-[#000000] flex justify-between items-center px-4 w-full h-[80px] text-gray-300">
        <div className="header-logo text-[#e64096]"></div>

        {/* nav links */}
        <div className="nav-links">
          <ul className=" hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={700}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={700}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={700}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={700}>
                Work
              </Link>
            </li>
            <li>
              <Link to="contact-form" smooth={true} duration={700}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* hambuger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!header ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <div
          className={
            !header
              ? "hidden"
              : "absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center bg-[#000000]"
          }
        >
          <ul>
            <li className="text-2xl py-4">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Profile
              </Link>
            </li>
            <li className="text-2xl py-4">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="text-2xl py-4">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="text-2xl py-4">
              <Link
                onClick={handleClick}
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li className="text-2xl py-4">
              <Link
                onClick={handleClick}
                to="contact-form"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden">
          <ul>
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
              <a
                href="https://www.linkedin.com/in/chiomat/"
                className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-500"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>

            <li className=" w-[160px] h-[60px] flex justify-between items-center">
              <a
                href="https://github.com/chiomaT"
                className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-500"
              >
                Github <AiFillGithub size={30} />
              </a>
            </li>

            <li className=" w-[160px] h-[60px] flex justify-between items-center">
              <Link
                to="contact-form"
                smooth={true}
                duration={500}
                className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-500"
              >
                Email <MdMarkEmailUnread size={30} />
              </Link>
            </li>

            <li className=" w-[160px] h-[60px] flex justify-between items-center">
              <a
                href={Resume}
                className="flex justify-between items-center w-full text-gray-200 ml-[-100px] hover:ml-[-10px] duration-500"
              >
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
