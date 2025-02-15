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

export default function DashboardNavbar() {
  const radius = 20;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (80 / 100) * circumference;
  const navLinks = (
    <>
      <div className="relative group">
        <li className="lg:border-r sm:px-2 pr-2 relative group">
          <NavLink to={"/profiledetail/myhome"} className="uppercase p-1 z-50">
            My home
          </NavLink>
        </li>
        {/* Dropdown (Hidden by default, shown on hover) */}
        <div className="absolute top-[45px] left-0 w-[550px] h-auto p-4 bg-base-100 hidden group-hover:block group-hover:bg-base-100 shadow-xl z-50">
          <div className="flex">
            <IoMdArrowDropup className="absolute -top-6 text-white text-5xl"></IoMdArrowDropup>
            <div>
              <p className="ml-4 activities_me">Activities done by me</p>
              <ul className="myhome_dropdown mt-4">
                <li>
                  <Link to={`/profiledetail/myhome`}>
                    Profiles viewed & not contacted (8)
                  </Link>
                </li>
                <li>
                  <Link>Profiles shortlisted by me (1)</Link>
                </li>
                <li>
                  <Link>Mobile nos.viewed by me</Link>
                </li>
                <li>
                  <Link>Profiles I have ignored</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="activities_other ml-4">Activities done by others</p>
              <ul className="myhome_dropdown mt-4">
                <li>
                  <Link>Who viewed my profile</Link>
                </li>
                <li>
                  <Link>Who shortlisted me</Link>
                </li>
                <li>
                  <Link>Who viewed my mobile no</Link>
                </li>
                <li>
                  <Link>Interests I received</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/matches"} className="uppercase p-1">
            Matches <div className="badge badge-warning -ml-1">12</div>
          </NavLink>
        </li>
        <div className="absolute top-[45px] left-0 w-[270px] h-[auto] p-4 bg-base-100 hidden group-hover:block group-hover:bg-base-100 shadow-xl">
          <div>
            <IoMdArrowDropup className="absolute -top-6 text-white text-5xl"></IoMdArrowDropup>
            <div>
              <ul className="search_dropdown">
                <li>
                  <Link>Yet to be viewed (3687)</Link>
                </li>
                <li>
                  <Link>Latest Matches (524)</Link>
                </li>
                <li>
                  <Link>Members who might like you</Link>
                </li>
                <li>
                  <Link>Mutual Matches</Link>
                </li>
                <li>
                  <Link>Premium Members (97)</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/inbox"} className="uppercase p-1">
            Inbox
          </NavLink>
        </li>
        {/* Dropdown (Hidden by default, shown on hover) */}
        <div className="absolute top-[45px] left-0 w-[230px] h-auto p-4 bg-base-100 hidden group-hover:block group-hover:bg-base-100 shadow-xl">
          <div className="flex">
            <IoMdArrowDropup className="absolute -top-6 text-white text-5xl"></IoMdArrowDropup>
            <div>
              <div>
                <p className="ml-4 text-black font-semibold">Message</p>
                <ul className="inbox_dropdown mt-1">
                  <li>
                    <Link className="py-0 ml-2">Inbox</Link>
                  </li>
                  <li className="mt-0">
                    <Link className="py-0 mt-1 ml-2">Sent (4)</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="ml-4 mt-4 text-black font-semibold">Request</p>
                <ul className="inbox_dropdown">
                  <li>
                    <Link className="py-0 mt-1 ml-2">Inbox</Link>
                  </li>
                  <li>
                    <Link className="py-0 mt-1 ml-2">Sent (4)</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-2">
                <Link className="py-0 mt-1 ml-4 font-semibold">
                  Chat History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/search"} className="uppercase p-1">
            Search
          </NavLink>
        </li>
        {/* Dropdown (Hidden by default, shown on hover) */}
        <div className="absolute top-[45px] left-0 w-[230px] h-auto p-4 bg-base-100 hidden group-hover:block group-hover:bg-base-100 shadow-xl">
          <div className="flex">
            <IoMdArrowDropup className="absolute -top-6 text-white text-5xl"></IoMdArrowDropup>
            <div>
              <div>
                <ul className="inbox_dropdown">
                  <li className="">
                    <Link className="py-0 -ml-4">Regular Search</Link>
                  </li>
                  <li className="mt-1">
                    <Link className="py-0 mt-1 -ml-4">Advanced Search</Link>
                  </li>
                  <li className="mt-1">
                    <Link className="py-0 mt-1 -ml-4">Keyword Search</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-2">
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Search by ID"
                    className="input input-bordered input-xs w-full max-w-xs"
                  />
                  <button className="ml-2">
                    <FaSearch className="text-gray-400"></FaSearch>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <li className="lg:border-r px-2">
        <NavLink to={"/profiledetail/dailymatches"} className="uppercase p-1">
          <FaCalendarAlt className="text-xl text-white"></FaCalendarAlt>
          Daily Matches
        </NavLink>
      </li>

      <li className="border-1 px-2">
        <NavLink to={"/upgrade"} target="_blank" className="uppercase p-1">
          Upgrade
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-lg mx-auto navbar z-50`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#76a63f] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[45px] h-[40px]" />
          <Link
            to={`/`}
            className="font-bold flex flex-col text-xl text-fuchsia-500"
          >
            <span className="-mb-1 text-green-800">Bangladeshi</span>
            <span className="-mt-1 text-red-600">Matrimony</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex z-50">
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
                <div className="py-4 mr-4">
                  <svg width={45} height={45} viewBox="0 0 50 50">
                    {/* Background Circle */}
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#eee"
                      strokeWidth={strokeWidth}
                      fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#f0c419"
                      strokeWidth={strokeWidth}
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                    />
                    {/* Text */}
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".3em"
                      fontSize="12"
                    >
                      {80}%
                    </text>
                  </svg>
                </div>
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
                      <Link to={`/myhome`}>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaEdit></FaEdit>
                          </span>{" "}
                          <span>Edit Profile</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaUserEdit className="text-lg"></FaUserEdit>
                          </span>{" "}
                          <span>Edit Partner Preference</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaMobileAlt className="text-xl -ml-1"></FaMobileAlt>
                          </span>{" "}
                          <span>Edit / Verified Phone No</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaAward className="text-xl -ml-1"></FaAward>
                          </span>{" "}
                          <span>Edit Partner Preference</span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="right_profile_dropdown mt-4 ml-4 space-y-2">
                    <li>
                      <Link>
                        <p className="flex items-center text-gray-500">
                          <span className="mr-2">
                            <FaGear></FaGear>
                          </span>
                          <span>Account Setting</span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link>
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
