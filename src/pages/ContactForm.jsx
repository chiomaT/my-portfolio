import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
// import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from "emailjs-com";

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
    <div
      name="contact-form"
      className="w-full h-custom-h-60 mt-44 bg-[#000000]  flex justify-center items-center md:mt-0 md:h-screen md:pt-0"
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
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-green-700 bg-[#000000] rounded mb-5 text-center ">
    <p>Message sent successfully</p>
  </div>
);

export default ContactForm;
