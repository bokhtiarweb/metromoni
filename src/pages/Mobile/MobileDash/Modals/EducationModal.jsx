import React, { useState } from "react";

export default function EducationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Sidebar Button */}
      {!isOpen && (
        <button
          onClick={toggleDrawer}
          className="text-3xl mr-[90px] text-white"
        >
          <IoMdMenu />
        </button>
      )}
      <div
        className={`fixed top-0 left-0 w-full h-screen transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button onClick={closeDrawer} className="text-3xl">
            <IoMdClose />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="menu w-full mt-4 border border-red-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            beatae rerum deleniti, dolorem consequatur hic accusantium ullam
            laudantium voluptatibus a, quaerat officia nihil aliquam dignissimos
            molestiae adipisci provident officiis assumenda?
          </p>
        </div>
      </div>
    </>
  );
}
