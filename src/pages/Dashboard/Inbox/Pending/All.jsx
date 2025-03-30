import React from "react";
import PendingContent from "./PendingContent";
const noImg = '/add-photo-inbox1.png'

export default function All() {
  return (
    <div>
      <div>
        <a href="#" target="_blank"><img src={noImg} alt="" /></a>
      </div>
      <PendingContent></PendingContent>
      <div className="flex items-center justify-between">
        <div>
          <button className="btn btn-sm bg-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 text-gray-500">Select All</button>
          <span className="px-2">|</span>
          <button className="btn btn-sm bg-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 text-gray-500">Delete All</button>
        </div>
        <div className="mt-8">
          <div className="flex gap-1">
            <button className="join-item btn btn-xs">Prev</button>
            <button className="join-item btn btn-xs bg-green-500 text-white">1</button>
            <button className="join-item btn btn-xs btn-active">2</button>
            <button className="join-item btn btn-xs">3</button>
            <button className="join-item btn btn-xs">4</button>
            <button className="join-item btn btn-xs">5</button>
            <button className="join-item btn btn-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
