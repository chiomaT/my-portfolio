import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import emailjs from "emailjs-com";
import {  FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillPersonDashFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-scroll";
import Resume from "../images/resume.pdf";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [success, setsuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_37895nb", "template_z7uhva9", values, "9gQTInhcjKsOaQ_Ik")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setsuccess("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (success === "SUCCESS") {
      setTimeout(() => {
        setsuccess("");
      }, 3000);
    }
  }, [success]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
    <div
        name="contact-form"
        className="pt-20  w-full mt-14 px-4 md:px-0 md:mt-36 bg-[#000000]  flex justify-center items-center contact-form"
      >
        {success && renderAlert()}
        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] flex flex-col w-full"
        >
          <div className=" md:mt-0 sm:right md:pl-3 pb-5">
            <p className="text-3xl font-bold inline border-b-4 border-[#ff007c] text-[#fcfcfc] md:px-5 lg:px-0 about-page ">
              Contact
            </p>
          </div>
          <p className="text-gray-300 text-2xl">Have questions? say hi</p>
          <InputField
            value={values.fullName}
            handleChange={handleChange}
            label="Full Name"
            name="fullName"
            type="text"
            className="bg-[#fcfcfc] p-3 rounded-lg"
            placeholder="Full Name"
          />
          <InputField
            value={values.email}
            handleChange={handleChange}
            label="E-Mail"
            name="email"
            type="email"
            placeholder="emaill"
          />
          <TextareaField
            value={values.message}
            handleChange={handleChange}
            label="Your message here"
            name="message"
            placeholder="message"
          />
          <button
            type="submit"
            className="text-[#fcfcfc] w-[200px] border-2 border-[#ff007c] rounded-lg px-2 py-2 my-2 flex items-center hover:bg-[#ff007c]  hover:border-[#ff007c] duration-700 focus:outline-none"
          >
            Let's collaborate
          </button>
        </form>
      </div>
      {/* social icons */}
      <div className=" xs:text-[#ff007c] md:flex flex-col lg:hidden  ">
        <ul className=" social-icons">
          <li className=" w-[160px] flex  justify-between items-center ">
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
    </>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-green-700 bg-[#000000] rounded mb-5 text-center ">
    <p>Message sent successfully</p>
  </div>
);

export default ContactForm;

