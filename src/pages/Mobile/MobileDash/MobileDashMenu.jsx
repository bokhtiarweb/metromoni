import React, { useState } from "react";
import { FaCalendarAlt, FaHome, FaSearch } from "react-icons/fa";
import { IoIosMail, IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function MobileDashMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <li className="lg:border-r sm:px-2 relative group">
        <NavLink to={"/profiledetail/myhome"} className="uppercase p-1">
          <div className="text-center">
            <FaHome className="mx-auto"></FaHome>
            <span className="text-[10px]">Home</span>
          </div>
        </NavLink>
      </li>

      <li className="lg:border-r">
        <NavLink to={"/profiledetail/inbox"} className="uppercase p-1">
          <div className="text-center">
            <IoIosMail className="mx-auto"></IoIosMail>
            <span className="text-[10px]">Mailbox</span>
          </div>
        </NavLink>
      </li>

      <li className="lg:border-r">
        <NavLink to={"/profiledetail/dailymatches"} className="uppercase p-1">
          <div className="text-center">
            <FaCalendarAlt className="mx-auto"></FaCalendarAlt>
            <span className="text-[10px]">Daily Matches</span>
          </div>
        </NavLink>
      </li>

      <li className="lg:border-r">
        <NavLink to={"/profiledetail/search"} className="uppercase p-1">
          <div className="text-center">
            <FaSearch className="mx-auto"></FaSearch>
            <span className="text-[10px]">Search</span>
          </div>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-lg mx-auto navbar -z-10`}>
      <div className="navbar-center block sm:hidden bg- lg:flex z-50">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-start">
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
          <div className="menu w-full mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias beatae rerum deleniti, dolorem consequatur hic
              accusantium ullam laudantium voluptatibus a, quaerat officia nihil
              aliquam dignissimos molestiae adipisci provident officiis
              assumenda?
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
