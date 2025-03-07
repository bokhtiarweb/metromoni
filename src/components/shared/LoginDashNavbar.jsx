import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function DashboardNavbar({isSticky}) {
  const navLinks = (
    <>
      <div>
        <li className="lg:border-r sm:px-2 pr-2 relative group">
          <NavLink to={"/profiledetail/myhome"} className="uppercase p-1 z-50">
            My home
          </NavLink>
        </li>
      </div>

      <div>
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/matches"} className="uppercase p-1">
            Matches <div className="badge badge-warning -ml-1">12</div>
          </NavLink>
        </li>
      </div>

      <div>
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/inbox"} className="uppercase p-1">
            Inbox
          </NavLink>
        </li>
      </div>

      <div>
        <li className="lg:border-r px-2">
          <NavLink to={"/profiledetail/search"} className="uppercase p-1">
            Search
          </NavLink>
        </li>
      </div>

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
    <div className={`mx-auto navbar z-50 bg-[#76a63f]  ${
          isSticky ? "fixed top-0 w-full shadow-lg z-50" : "relative"
        }`}>
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
      </div>
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
