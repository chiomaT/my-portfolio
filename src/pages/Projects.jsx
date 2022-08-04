import React, { useState } from "react";
import expense from "../images/expense.jpg";
import annie from "../images/annie.jpg";
import food from "../images/food.jpg";

const Work = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const openPopup = (e) => {
     const switchId = e.target.id;
    console.log(switchId)

    if (switchId === "1" || switchId === "") {
      setModal1(!modal1);
    } 

    if (switchId === "2" || switchId === "") {
      setModal2(!modal2);
    }

    if (switchId === "3" || switchId === "") {
      setModal3(!modal3);
    }

    if (switchId === "4" || switchId === "") {
      setModal4(!modal4);
    }
   
  };
  return (
    
       <div
      name="work"
      className=" pt-20  mt:mt-36 w-full h-full text-gray-400 bg-[#000000] gap-4 md:work-section "
    > 
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff007c]  text-gray-200">
            Work
          </p>
          <p className="py-5 text-2xl">my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
          {/* modal 1 */}
          <div
            style={{ backgroundImage: `url(${food})` }}
            className=" relative group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                Edugie Kitchen
              </span>

              <div className="pt-8 text-center">
                <a href="https://www.edugietaste.com/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>

                <div className="modal-btn">
                  <button
                    onClick={(e) => openPopup(e)}
                    id="1"
                    className="rounded-lg px-2  mt-3 font-bold bg-none text-[#ff007c] hover:bg-none hover:text-gray-300 hover:duration-300"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
            {modal1 && (
              <div className=" absolute modal-text top-0 left-0 w-full h-full bg-black flex flex-col justify-center p-4  text-gray-100">
                <h3>
                  A react and nodejs Application for a restaurant, that allows for meal ordering and delivery.
                </h3>
                <button
                  onClick={openPopup}
                  id="1"
                  className=" w-[100px] rounded-lg px-2 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] mt-14  hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
              {/* modal 2 */}
          <div
            style={{ backgroundImage: `url(${annie})` }}
            className=" relative group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                Reading catalogue
              </span>

              <div className="pt-8 text-center">
                <a href="https://tes-reading-list-a7c954.netlify.app/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chiomaT/my-reading-list-frontend">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Code
                  </button>
                </a>

                <div className="modal-btn">
                  <button
                    onClick={(e) => openPopup(e)}
                    id="2"
                    className="rounded-lg px-2  mt-3 font-bold bg-none text-[#ff007c] hover:bg-none hover:text-gray-300 hover:duration-300"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
            {modal2 && (
              <div className=" absolute modal-text top-0 left-0 w-full h-full bg-black flex flex-col justify-center p-4  text-gray-100">
                <h3>
                  A react and nodejs Application that allows a user view a list
                  of books and provide details about the authors.
                </h3>
                <button
                  onClick={openPopup}
                  id="2"
                  className=" w-[100px] rounded-lg px-2 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] mt-14  hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
              
          <div
            style={{ backgroundImage: `url(${expense})` }}
            className="group container rounded-md flex justify-center items-center mx-auto shadow-lg shadow-[#040c16] content-div relative"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl tracking-wider text-white font-bold">
                Expense Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://tes-expense-tracker.netlify.app/">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chiomaT/Expense-tracker">
                  <button className="rounded-lg px-3 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300">
                    Code
                  </button>
                </a>
                <div className="modal-btn ">
                  <button
                    onClick={(e) => openPopup(e)}
                    id="3"
                    className="rounded-lg px-2  mt-3 font-bold bg-none text-[#ff007c] hover:bg-none hover:text-gray-300 hover:duration-300"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
            {modal3 && (
              <div className=" absolute modal-text top-0 left-0 w-full h-full bg-black flex flex-col justify-center p-4  text-gray-100">
                <h3>
                  A react and nodejs Application for managing budgets and expenses.
                </h3>
                <button
                  onClick={openPopup}
                  id="3"
                  className=" w-[100px] rounded-lg px-2 py-4 mx-3 font-bold bg-gray-300 text-[#ff007c] mt-14  hover:bg-[#ff007c] hover:text-gray-300 hover:duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
