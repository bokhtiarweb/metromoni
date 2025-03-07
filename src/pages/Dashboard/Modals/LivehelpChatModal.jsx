import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
const supportImg = "/cat.jpg";

export default function LivehelpChatModal({ setLiveChat }) {
  return (
    <div className="absolute right-[50%] top-0 z-50">
      <div className="bg-white p-6 shadow-lg md:w-[520px] sm:w-[300px] relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropright className="text-6xl absolute -right-[38px] -top-4 text-gray-400 textarea-bordered border-green-600" />
        {/* Close Button */}
        <span
          onClick={() => setLiveChat(false)}
          className="absolute top-2 left-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
        >
          ✕
        </span>

        {/* Modal Content */}
        <div>
          <div className="bg-sky-700 py-6 rounded-xl">
            <h2 className="text-xl text-white">Live Chat</h2>
          </div>
          <div className="mt-4 p-4">
            <div className="flex items-center gap-2 border-b-2 pb-2">
              <img src={supportImg} alt="" className="w-12 h-12 rounded-full" />
              <p className="font-bold">Jhon henry</p>
            </div>
            <div className="divider divider-info">New Chat</div>
            <div className="flex gap-2">
              <img src={supportImg} alt="" className="w-8 h-8 rounded-full" />
              <div className="text-start">
                <p className="text-sm">Jhon henry</p>
                <p className="text-xs text-gray-600 p-2 bg-slate-200">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div>
                <button className="btn btn-outline btn-info">
                  Make change my profile
                </button>
              </div><div>
                <button className="btn btn-outline btn-info">
                  Make change my profile
                </button>
              </div><div>
                <button className="btn btn-outline btn-info">
                  Make change my profile
                </button>
              </div><div>
                <button className="btn btn-outline btn-info">
                  Make change my profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
