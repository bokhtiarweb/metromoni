// Sidebar.jsx
import React from "react";
import { FaArrowUp, FaMessage } from "react-icons/fa6";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`w-[250px] h-[100vh] bg-slate-400 fixed right-0 hidden sm:block ${
        !isOpen ? "top-[95%]" : "top-0"
      } bottom-0 z-50 transition-all duration-300`}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#94d400] p-2 w-full"
        >
          <div className="flex items-center text-white">
            <span>
              <FaMessage />
            </span>
            <span className="text-sm ml-1">Online Members (31)</span>
            <span className="mx-auto">
              <FaArrowUp />
            </span>
          </div>
        </button>
        <div className="p-4 text-white">
          <p>
            <span className="text-5xl text-red-600">sidebar</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            exercitationem temporibus porro commodi suscipit mollitia ipsum odio
            dolore? Veniam incidunt fugiat minima voluptatum nostrum debitis
            placeat optio culpa qui eos.
          </p>
        </div>
      </div>
    </div>
  );
}
