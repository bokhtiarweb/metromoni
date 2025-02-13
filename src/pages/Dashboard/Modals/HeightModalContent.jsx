import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function HeightModalContent({showSpecificModal}) {
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200">
      <input type="checkbox" className="peer min-h-0" />
      <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
        Height
      </div>
      <div className="collapse-content">
        <div className="grid gap-3">
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              4ft 4in to 5ft 4in (3679)
            </a>
          </p>
          <div className="group flex justify-end">
            <button
              onClick={() => showSpecificModal('HeightModalContent')}
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
