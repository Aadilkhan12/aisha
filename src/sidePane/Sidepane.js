import React, { useState } from "react";
import jsonData from "./data.js";
const Sidepane = ({ isOpenHandle }) => {
const [gender, setGender] = useState("women");



  const onGenderChange = () => {
    if (gender === "women") {
      setGender("men"); 
    } else {
      setGender("women"); 
    }
  };

  return (
    <>
      <div className="fixed inset-y-0 inset-x-0 -ml-64 mt-16 w-64 bg-white-900 shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between px-4 py-3 bg-white-800">
          <div className="flex flex-col items-center justify-between px-4 py-3 bg-white-800">
            <button
              onClick={onGenderChange}
              className={`text-lg font-semibold ${
                gender === "women" ? "text-red-900" : ""
              }`}
            >
              Women
            </button>
            {gender ==="women"&&<h1
              className={`text-lg h-5 -mt-3 w-5  ${
                gender === "women" ? ("text-red-900 block ") : ""
              }`}
            >
              .
            </h1>}
          </div>
          <div className="flex flex-col items-center justify-between px-4 py-3 bg-white-800">
            <button
              onClick={onGenderChange}
              className={`text-lg font-semibold ${
                gender === "men" ? "text-red-900" : ""
              }`}
            >
              Men
            </button>
          {gender ==="men"&&  <h1
              className={`text-lg -mt-3 h-5 w-5 ${
                gender === "men" ? ("text-red-900 block") : ""
              }`}
            >
              .
            </h1>}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Sidepane;