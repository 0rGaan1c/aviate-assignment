import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-sky-200 py-4 px-[4%] flex justify-between items-center">
      <a href="/">
        <p className="text-2xl uppercase font-bold">Dashboard</p>
      </a>
      <div className="flex items-center">
        <a href="/faq" className="mr-2 md:mr-8 font-medium">
          FAQs
        </a>
        <div className="bg-white flex items-center w-20 h-10 md:w-28 md:h-10 rounded-xl cursor-pointer justify-between">
          <div className="ml-2 md:ml-4">
            <FaUserAlt />
          </div>
          <p className="mr-2 md:mr-4">USER</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
