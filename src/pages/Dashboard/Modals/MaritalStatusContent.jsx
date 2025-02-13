import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function MaritalStatusContent({showSpecificModal}) {
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200">
      <input type="checkbox" className="peer min-h-0" />
      <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
        marital status
      </div>
      <div className="collapse-content">
        <div className="grid gap-3">
          <div className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              Unmarried (3179)
            </a>
          </div>
          <div className="group flex justify-end">
            <button
              onClick={() => showSpecificModal('MaritalStatusContent')}
              className="btn btn-sm btn-info text-gray-100"
            >
              more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
