import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-4 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 bg-white shadow-md z-50"
          : "bg-green-500"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Bangladeshi Matrimony</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Search</li>
          <li className="hover:underline cursor-pointer">Register</li>
          <li className="hover:underline cursor-pointer">Upgrade</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
