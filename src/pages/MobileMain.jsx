import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import {
  FaAward,
  FaBell,
  FaCalendarAlt,
  FaEdit,
  FaGrinHearts,
  FaMobileAlt,
  FaSearch,
  FaUserEdit,
} from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import { FaGear, FaUsersGear } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";

export default function MobileMain() {
  const navLinks = (
    <>
      <li className="lg:border-r sm:px-2 pr-2 relative group">
        <NavLink to={"/profiledetail/myhome"} className="uppercase p-1 z-50">
          Home
        </NavLink>
      </li>

      <li className="lg:border-r px-2">
        <NavLink to={"/profiledetail/matches"} className="uppercase p-1">
          Matches <div className="badge badge-warning -ml-1">12</div>
        </NavLink>
      </li>

      <li className="lg:border-r px-2">
        <NavLink to={"/profiledetail/inbox"} className="uppercase p-1">
          Inbox
        </NavLink>
      </li>

      <li className="lg:border-r px-2">
        <NavLink to={"/profiledetail/search"} className="uppercase p-1">
          Search
        </NavLink>
      </li>

      <li className="lg:border-r px-2">
        <NavLink to={"/profiledetail/dailymatches"} className="uppercase p-1">
          <FaCalendarAlt className="text-xl text-white"></FaCalendarAlt>
          Daily Matches
        </NavLink>
      </li>

      <li className="border-1 px-2">
        <NavLink
          to={"/profiledetail/upgrade"}
          target="_blank"
          className="uppercase p-1"
        >
          Upgrade
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-lg mx-auto navbar z-50`}>
      <div className="navbar-start">
      </div>
      <div className="navbar-center block sm:hidden bg- lg:flex z-50">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center justify-center text-white">
          <FaBell className="text-xl mr-4"></FaBell>
          <div className="relative group flex">
            <BsPersonSquare className="text-2xl mr-2"></BsPersonSquare>
            {/* Dropdown (Hidden by default, shown on hover) */}
            <div className="absolute top-[45px] right-0 w-[450px] h-auto p-4 bg-base-100 hidden group-hover:block group-hover:bg-base-100 shadow-xl">
              <div className="border-b pb-4">
                <p>
                  <strong className="text-gray-500">MD. Jhon</strong>{" "}
                  <span className="text-gray-400">(BGD35539111)</span>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Account Type: free{" "}
                  <span className="text-gray-300 px-2">|</span>{" "}
                  <Link className="text-sm text-blue-600">Upgrade Account</Link>
                </p>
              </div>
              <div className="flex items-center border-b">
                <div className="py-4 mr-4"></div>
                <div>
                  <p className="text-gray-400 text-thin text-sm">
                    Profile completeness <span className="px-2">|</span>
                    <Link to={"/"} className="text-blue-600">
                      complete your profile
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex">
                <IoMdArrowDropup className="absolute -top-6 right-6 text-white text-5xl"></IoMdArrowDropup>
                <div>
                  <ul className="left_profile_dropdown mt-4 lg:border-r pr-2 space-y-2">
                    <li>
                      <Link to={`/profiledetail/editprofile`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaEdit></FaEdit>
                          </span>{" "}
                          <span>Edit Profile</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/profiledetail/editpartnerpreference`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaUserEdit className="text-lg"></FaUserEdit>
                          </span>{" "}
                          <span>Edit Partner Preference</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/profiledetail/editprofile`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaMobileAlt className="text-xl -ml-1"></FaMobileAlt>
                          </span>{" "}
                          <span>Edit / Verified Phone No</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/profiledetail/editproflebadge`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaAward className="text-xl -ml-1"></FaAward>
                          </span>{" "}
                          <span>Add Trust Badge</span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="right_profile_dropdown mt-4 ml-4 space-y-2">
                    <li>
                      <Link to={`/profiledetail/editprofile`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaGear></FaGear>
                          </span>
                          <span>Account Setting</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/profiledetail/communicationsetting`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaUsersGear></FaUsersGear>
                          </span>
                          <span>Communication Setting</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaGrinHearts></FaGrinHearts>
                          </span>
                          <span>Privacy Setting</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <RiLoginBoxLine className="text-lg"></RiLoginBoxLine>
                          </span>
                          <span>Log Out</span>
                        </p>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <IoMdArrowDropdown className="text-3xl"></IoMdArrowDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
