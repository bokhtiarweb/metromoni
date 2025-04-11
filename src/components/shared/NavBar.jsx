import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function NavBar() {
  const [showForgotPass, setShowForgotPass] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-screen-lg mx-auto navbar">
      <div className="navbar-start">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[45px] h-[40px]" />
          <Link
            to={`/`}
            className="font-bold flex flex-col text-xl text-fuchsia-500"
          >
            <span className="-mb-1 text-green-800">BMC</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end w-full hidden sm:block text-end">
        <span className="sm:text-sm text-lg mr-2">Already a Member?</span>
        {/* Open the modal using */}
        <button
          className="btn btn-sm btn-success text-semibold text-white mr-2"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Log In
        </button>
        <Link to={`/register`}>
          <button className="btn btn-sm btn-success text-semibold text-white">
            Register
          </button>
        </Link>
        <dialog
          id="my_modal_2"
          className="modal"
          onClick={(e) => {
            const modal = document.getElementById("my_modal_2");
            if (e.target === modal) {
              modal.close();
              setShowForgotPass(true);
            }
          }}
        >
          {showForgotPass ? (
            <div className="modal-box">
              <h3 className="font-bold text-lg">Log In</h3>
              <div className="mt-4">
                <form>
                  <input
                    type="text"
                    placeholder="Matrimony ID / Email"
                    className="input input-bordered w-full"
                  />
                  <div className="mt-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered w-full relative"
                    />
                    <span className="absolute right-12 mt-3 text-center">
                      <FaEye className="text-xl"></FaEye>
                    </span>
                  </div>

                  {/* Checkbox */}
                  <div className="mt-4 flex justify-between">
                    <label className="cursor-pointer flex items-center w-[35%]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-success mr-2"
                      />
                      <span className="label-text">Keep me logged in</span>
                    </label>
                    <a
                      onClick={() => setShowForgotPass(!showForgotPass)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="mt-4 text-end">
                    {/* Close the modal when clicking Cancel */}
                    <button
                      type="button"
                      className="btn btn-outline btn-sm btn-accent mr-4"
                      onClick={() =>
                        document.getElementById("my_modal_2").close()
                      }
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogin}
                      className="btn btn-sm btn-success text-semibold text-white"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="modal-box">
              <h3 className="font-bold text-lg">Forgot Password?</h3>
              <div className="mt-4">
                <form>
                  <input
                    type="text"
                    placeholder="Matrimony ID / Email"
                    className="input input-bordered w-full"
                  />
                  <p className="mt-4">
                    Please enter your Matrimony ID/Email ID/Mobile Number. We'll
                    send a mail & SMS with a link to reset your password. This
                    link will be valid only for 2 hours.
                  </p>

                  <div className="mt-4 text-end">
                    {/* Close the modal when clicking Cancel */}
                    <button
                      type="button"
                      className="btn btn-outline btn-sm btn-accent mr-4"
                      onClick={() => setShowForgotPass(true)}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogin}
                      className="btn btn-sm btn-success text-semibold text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </div>
  );
}
