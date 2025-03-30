import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto navbar bg-white w-full">
      <div className="navbar-start">
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
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end sm:w-full lg:w-[50%] gap-2 hidden sm:block">
        <div>
          <div className="flex gap-2">
            <label>
              <input
                type="text"
                placeholder="Matrimony ID / Email"
                className="input input-bordered input-sm bg-gray-100 w-full max-w-xs"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-sm bg-gray-100 w-full max-w-xs"
              />
            </label>
            <div>
              <button className="btn btn-sm btn-success text-semibold text-white mr-2">
                Log In
              </button>
            </div>
          </div>
          <div className="flex sm:gap-10 gap-14 w-5/6">
            <label className="cursor-pointer flex items-center gap-1">
              <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" />
              <span className="xs:text-[12px] text-sm font-semibold text-gray-400 ml-1">
                Keep me logged in{" "}
              </span>
            </label>
            <span className="text-sm font-semibold text-gray-400">
              <a href="#">Forgot password?</a>
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-end gap-2 block sm:hidden">
        <div className="flex justify-end gap-2">
          <div>
            <Link to={`/login`}>
              <button className="btn btn-sm btn-success text-semibold text-white mr-2">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
