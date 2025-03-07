import React from "react";

export default function PreferredProfessionMenu() {
  return (
    <button
      key={index}
      onClick={() => handleProfession(item)}
      className={`flex-shrink-0 px-4 py-2 ${
        profession === item.toLowerCase() ? "bg-green-500 text-white" : " "
      }  rounded-full`}
    >
      {item}
    </button>
  );
}
