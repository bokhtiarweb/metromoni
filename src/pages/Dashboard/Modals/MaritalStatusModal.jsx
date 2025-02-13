import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

export default function MaritalStatusModal({ setMaritalStatus }) {
  return (
    <div className="absolute left-[102%] top-[22%] z-50">
      <div className="bg-white p-6 shadow-lg md:w-[520px] sm:w-[300px] relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropleft className="text-6xl absolute -left-[38px] text-gray-400 textarea-bordered border-green-600" />

        {/* Close Button */}
        <span
          onClick={() => setMaritalStatus(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
        >
          ✕
        </span>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-6">Marital status</h2>
        <form>
          <div className="w-[360px] space-y-2 text-gray-500">
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
                defaultChecked
              />
              <span>Unmarried (318)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Widow/Widower (358)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Divorced (944)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Separated (3687)</span>
            </label>
            
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Married (37)</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="btn btn-sm btn-secondary mt-4 mr-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
