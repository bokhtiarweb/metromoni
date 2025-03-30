import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function ActiveModalContent({showSpecificModal}) {
  return (
    <div className="collapse collapse-plus border border-gray-300 bg-gray-100">
      <input type="checkbox" className="peer min-h-0 " defaultChecked />
      <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
        Active
      </div>
      <div className="collapse-content">
        <div className="grid gap-3">
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              Online Now (72)
            </a>
          </p>
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              One week age (33)
            </a>
          </p>
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              One month age (324)
            </a>
          </p>
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              One month and above (333)
            </a>
          </p>
          <div className="group flex justify-end">
            <button
              onClick={() => showSpecificModal('ActiveModalContent')}
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
