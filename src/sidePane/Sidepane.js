import React, { useState } from "react";
const Sidepane = ({ isOpenHandle }) => {
  const [gender, setGender] = useState("women");
  const onGenderChange = () => {
    if (gender == "women") setGender("men");
    else if (gender == "women") {
      setGender("women");
    }
  };
  return (
    <>
      <div className="fixed inset-y-0  inset-x-0 -ml-64 mt-16 w-64 bg-white-900 shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between px-4 py-3 bg-white-800">
          {gender == "women" ? (
            <button
              onClick={onGenderChange}
              className="text-black text-lg font-semibold"
            >
              women
            </button>
          ) : (
            <button className="text-black text-lg font-semibold">men</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidepane;
