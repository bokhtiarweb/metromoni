import React, { useState } from "react";

export default function Logout() {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="bg-white border rounded-md shadow-md p-6 w-[700px]">
        {/* Logged Out Message */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Logged Out</h2>
        <div className="bg-yellow-100 text-yellow-700 p-3 rounded-md text-sm">
          You have logged out from BangladeshiMatrimony. Thank you for using our
          services!
        </div>

        {/* Login Form */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Matrimony ID / Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Forgot Password & Keep Me Logged In */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="mr-2"
              checked={keepLoggedIn}
              onChange={() => setKeepLoggedIn(!keepLoggedIn)}
            />
            Keep me logged in
          </label>
        </div>

        {/* Login Button */}
        <button className="w-full mt-4 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}
