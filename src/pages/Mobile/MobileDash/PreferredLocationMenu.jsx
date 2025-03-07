import React from "react";

export default function PreferredLocationMenu({
  item,
  location,
  handleLocation,
}) {
  return (
    <button
      onClick={() => handleLocation(item)}
      className={`flex-shrink-0 px-4 py-2 ${
        location === item.toLowerCase() ? "bg-green-500 text-white" : " "
      }  rounded-full`}
    >
      {item}
    </button>
  );
}
