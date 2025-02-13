import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

export default function ActiveModal({showSpecificModal}) {

  return (
    <div className="absolute left-[102%] top-[58%] z-50">
      <div className="bg-white p-6 shadow-lg w-auto relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropleft className="text-6xl absolute -left-[38px] text-gray-400 textarea-bordered border-green-600" />

        {/* Close Button */}
        <span
          onClick={showSpecificModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
        >
          ✕
        </span>
        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-6">Active</h2>
        <form>
          <div className="w-[360px] space-y-2 text-gray-500">
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
                defaultChecked
              />
              <span>Members who are currently online now (318)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Members active in the last one week (398)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Members active in the last one month (944)</span>
            </label>
            <label className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="active"
                className="checkbox checkbox-xs"
              />
              <span>Members active for more than a month (3687)</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="btn btn-sm btn-secondary mt-4 mr-4">
              Submit
            </button>
          </div>

          {/* Note */}
          <p className="text-gray-500 text-xs mt-4">
            Note: There may be a slight difference in the members online count
            as members keep logging on and off.
          </p>
        </form>
      </div>
    </div>
  );
}
