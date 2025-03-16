import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
const chatImg = "/cat.jpg";

export default function ChatModal() {
  return (
    <div className="absolute right-[102%] top-[58%] z-50">
      <div className="bg-white p-6 shadow-lg w-auto relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropright className="text-6xl absolute -right-[37.5px] top-0 text-white textarea-bordered border-green-600" />

        {/* Modal Content */}
        <form>
          <div className="w-[360px] space-y-2 text-gray-500">
            <div className="flex gap-4">
              <div className="w-36 h-40 border p-2">
                <img src={chatImg} alt="Image" className="w-full h-36" />
              </div>
              <div>
                <div className="text-[12px] flex gap-4">
                  <span>Age, Height</span>
                  <span>: 18 yrs , 5ft - 152 cm</span>
                </div>
                <div className="text-[12px] flex gap-4">
                  <span>Religion</span>
                  <span>: Islam</span>
                </div>
                <div className="text-[12px] flex gap-4">
                  <span>Sect</span>
                  <span>: Sunni</span>
                </div>
                <div className="text-[12px] flex gap-4">
                  <span>Location</span>
                  <span>: Bangladesh</span>
                </div>
                <div className="text-[12px] flex gap-4">
                  <span>Education</span>
                  <span>: Higher Secondary /...</span>
                </div>
                {/* Submit Button */}
                <button className="btn btn-sm btn-secondary mt-4">Chat Now</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
