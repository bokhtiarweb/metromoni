// Sidebar.jsx
import React from "react";
import { FaArrowUp, FaMessage } from "react-icons/fa6";
import OnlineMember from "./OnlineMember";

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
          <div className="divider my-0 text-sm">Contacted Member (214)</div>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
          <div className="divider mb-0 text-sm">Shortlisted (3)</div>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
          <div className="divider mb-0 text-sm">Preferred Matches (472)</div>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
          <OnlineMember></OnlineMember>
        </div>
      </div>

      <div className="flex items-center px-2 gap-1 absolute bottom-0">
        <input
          type="text"
          placeholder="Search by ID"
          className="input input-xs max-w-36"
        />
        <select defaultValue="Pick a color" className="select select-xs max-w-28">
          <option>
            Online
          </option>
          <option>
            Invisible
          </option>
        </select>
      </div>
    </div>
  );
}
