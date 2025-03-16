import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { FaComment, FaMessage, FaMinus } from "react-icons/fa6";
const chatImg = "/cat.jpg";

export default function ChatBoxModal() {
  return (
    <div className="w-[260px] h-[340px] bg-base-100 border fixed right-[270px] bottom-0 z-50 transition-all duration-300 hidden sm:block">
      <div className={`flex justify-between p-2 bg-green-400 cursor-pointer`}>
        <div className="flex items-center gap-1">
          <FaComment className="text-green-700 text-sm"></FaComment>
          <span className="text-[13px] text-white">Jhon Henry</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMinus className="text-white"></FaMinus>
          <FaRegWindowClose className="text-white"></FaRegWindowClose>
        </div>
      </div>
      <div className="flex justify-between gap-2 p-2">
        <div className="w-36 h-16">
          <img src={chatImg} className="w-full h-full" alt="Image" />
        </div>
        <div>
          <div className="text-[12px] flex-wrap">
            <span>21 yrs, 5ft 4in - 162cm</span>
            <span className="px-1">|</span>
            <span className="px-1">Islam</span> <span className="px-1">|</span>{" "}
            <span>Sunni</span>
            <span className="px-1">|</span> <span>Bengali</span>{" "}
            <span className="px-1">|</span> <span>Bangladesh</span>{" "}
            <span className="px-1">|</span> <span>Bachelors</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] p-2 border">
          <a className="text-blue-400" href="">
            Full profile
          </a>
          <span>|</span>
          <a href="">Clear chat history</a>
          <span>|</span>
          <a className="text-blue-400" href="">
            Block user
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-1 py-2 absolute bottom-0 w-full">
        <FaMessage className="text-sm text-gray-400 cursor-pointer"></FaMessage>
        <div className="cursor-pointer">😊</div>
      </div>

    </div>
  );
}
