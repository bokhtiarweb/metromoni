import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function ProfileTypeModalcontent({showSpecificModal}) {
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200">
      <input type="checkbox" className="peer min-h-0 " defaultChecked />
      <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
        Profile type
      </div>
      <div className="collapse-content">
        <div className="grid gap-3">
          <p className="flex items-center text-sm">
            <FaAngleRight></FaAngleRight>{" "}
            <a className="text-gray-500 hover:underline" href="#">
              With photo (772)
            </a>
          </p>
          <div className="group flex justify-end">
            <button
              onClick={() => showSpecificModal('ProfileTypeModalcontent')}
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
