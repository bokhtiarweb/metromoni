import React from "react";
import DeclinedContent from "./DeclinedContent"

export default function AllDeclined() {
  return (
    <div>
      <DeclinedContent></DeclinedContent>
      <div className="flex items-center justify-between">
        <div>
          <button className="btn btn-sm text-gray-500">Select All</button>
          <span className="px-2">|</span>
          <button className="btn btn-sm text-gray-500">Delete All</button>
        </div>
        <div className="mt-8">
          <div className="flex gap-1">
            <button className="join-item btn btn-xs">Prev</button>
            <button className="join-item btn btn-xs bg-green-500">1</button>
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
