import React, { useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCrown,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import {
  IoIosMail,
  IoMdClose,
  IoMdMenu,
  IoMdPerson,
  IoMdPersonAdd,
} from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const profileImag = "/cat.jpg";

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
          className={`fixed top-0 left-0 max-w-[100vw] h-screen transform transition-transform duration-300 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
          {/* Close Button */}
          <div className="p-4 flex justify-end">
            <button onClick={closeDrawer} className="text-3xl">
              <IoMdClose />
            </button>
          </div>
          {/* Sidebar Content */}
          <div
            onClick={closeDrawer}
            className="w-fit mt-1"
          >
            <div className="bg-slate-200 px-2">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20">
                  <img
                    className="w-full h-full rounded-full"
                    src={profileImag}
                    alt="Profile Image"
                  />
                </div>
                <div>
                  <strong>Jhon Henry</strong>
                  <p>BGD3553911</p>
                  <div className="text-[14px]">
                    <span>Membership</span>
                    <span className="text-blue-500 ml-2">Free</span>
                    <span className="px-1">|</span>
                    <span className="text-blue-500">Upgrade Now</span>
                  </div>
                  <div>
                    <progress
                      className="progress progress-error w-40"
                      value="70"
                      max="100"
                    ></progress>
                    <p className="text-orange-500 -mt-2">
                      Your profile score 70%
                    </p>
                  </div>
                </div>
                <div>
                  <FaPencil className="text-xl"></FaPencil>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 py-4 px-2 border-b border-slate-400">
              <div className="space-y-4">
                <Link
                  to={`/profiledetail/myhome`}
                  className="flex items-center gap-2"
                >
                  <IoMdPersonAdd className="text-xl"></IoMdPersonAdd>Matches
                </Link>
                <Link
                  to={`/profiledetail/inbox`}
                  className="flex items-center gap-2"
                >
                  <IoIosMail className="text-xl"></IoIosMail>Mailbox
                </Link>
                <Link
                  to={`/profiledetail/dailymatches`}
                  className="flex items-center gap-2"
                >
                  <FaCalendarAlt className="text-xl"></FaCalendarAlt>Daily
                  Matches
                </Link>
                <Link
                  to={`/profiledetail/editprofile`}
                  className="flex items-center gap-2"
                >
                  <FaPencil className="text-xl"></FaPencil>Edit profile
                </Link>
                <Link className="flex items-center gap-2">
                  <IoMdPerson className="text-xl"></IoMdPerson>Edit Partner
                  Preference
                </Link>
                <Link className="flex items-center gap-2 text-green-700">
                  <FaCrown className="text-xl"></FaCrown>Upgrade Now
                </Link>
                <div className="flex justify-between items-center">
                  <Link to={`/profiledetail/settings`} className="flex items-center gap-2">
                    <IoMdPerson className="text-xl"></IoMdPerson> Settings
                  </Link>
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
