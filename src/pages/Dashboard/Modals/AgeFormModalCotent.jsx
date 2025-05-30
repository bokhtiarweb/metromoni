import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function AgeFormModalCotent({showSpecificModal}) {
  return (
      <div className="collapse collapse-plus border border-gray-300 bg-gray-100">
        <input type="checkbox" className="peer min-h-0 " />
        <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
          Age form
        </div>
        <div className="collapse-content">
          <div className="grid gap-3">
            <p className="flex items-center text-sm">
              <FaAngleRight></FaAngleRight>{" "}
              <a className="text-gray-500 hover:underline" href="#">
                18yrs to 21 yrs (3679)
              </a>
            </p>
            <div className="group flex justify-end">
              <button
                onClick={() => showSpecificModal('AgeFormModalCotent')}
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
