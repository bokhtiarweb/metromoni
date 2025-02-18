import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function ShortListModal({ setIsShortlist }) {
  return (
    <div className="absolute right-[102%] top-0 z-50">
      <div className="bg-white p-6 shadow-lg md:w-[520px] sm:w-[300px] relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropright className="text-6xl absolute -right-[38px] -top-4 text-gray-400 textarea-bordered border-green-600" />
        {/* Close Button */}
        <span
          onClick={() => setIsShortlist(false)}
          className="absolute top-2 left-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
        >
          ✕
        </span>

        {/* Modal Content */}
        <p className="text-sm">You have added Jhon henry (BGD1883935) to your <a href="http://localhost:5173/profiledetail/matches">shortlist</a> </p>
        <p className="text-sm mt-6">Go ahead and initiate contact with the member by sending an interest</p>
        <form>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button onClick={() => {}} className="btn btn-sm btn-secondary mt-4 mr-4">
              Send interest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
