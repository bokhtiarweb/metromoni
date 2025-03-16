import React, { useState } from "react";
import { FaComment } from "react-icons/fa";
import ChatModal from "./ChatModal";
const chatImg = "/cat.jpg";

export default function OnlineMember() {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <>
      <div
        className="flex items-center justify-between border-b border-gray-100 pb-2 relative"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex justify-center gap-2 ">
          <div>
            <img src={chatImg} className="w-10 h-10" alt="Img" />
          </div>
          <span className="text-sm">
            Jhon Henry <br />
            BGD4629542335
          </span>
        </div>
        <FaComment className="text-green-400 text-sm"></FaComment>
        {isHover && <ChatModal></ChatModal>}
      </div>
    </>
  );
}
