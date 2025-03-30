import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardNavbar({isSticky}) {
  const navLinks = (
    <>
      <div>
        <li className="lg:border-r sm:px-2 pr-2 relative group">
          <NavLink to={"/profiledetail/myhome"} className="uppercase p-1 z-50">
            Home
          </NavLink>
        </li>
      </div>

      <div>
        <li className="lg:border-r px-2">
          <NavLink to={"/register"} className="uppercase p-1">
            Register
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
      <div className="navbar-start hidden xs:block">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-center md:mx-auto block:flex z-50">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
