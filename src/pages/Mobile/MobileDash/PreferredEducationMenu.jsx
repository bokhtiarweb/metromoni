import React from "react";

export default function PreferredEducationMenu({item, education, handleEducation}) {
    
  return (
      <button
      onClick={() => handleEducation(item)}
      className={`flex-shrink-0 px-4 py-2 ${
        education === item.toLowerCase() ? "bg-green-500 text-white" : " "
      }  rounded-full`}
    >
      {item}
    </button>
  );
}

{/* <div className="relative bg-white p-2 shadow-md block sm:hidden"></div> */}
