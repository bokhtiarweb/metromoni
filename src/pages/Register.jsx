import React from "react";
const res = "/res.jpg";

export default function Register() {
  return (
    <div className="relative bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={res}
          alt="Matrimony Background"
          className="w-full h-[500px] md:h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto relative z-10 text-white text-center py-16 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          No.1 Official Matrimony Service Exclusively For Bangladeshis
        </h1>
        <p className="mt-2 text-lg">
          Find Bangladeshis to marry from all spheres of life, including NRB
          members!
        </p>

        {/* Form Section */}
        <div className="bg-white rounded-lg mt-6 shadow-lg py-6 px-6 w-full max-w-lg mx-auto">
          <div className="flex flex-col gap-4">
            {/* Profile & Gender */}
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="form-control w-full">
                <span className="label-text">Profile for</span>
                <select className="border border-gray-300 p-3 rounded-md text-gray-700 w-full">
                  <option>Select Profile</option>
                  <option>Groom</option>
                  <option>Bride</option>
                </select>
              </label>
              <label className="form-control w-full">
                <span className="label-text">Gender</span>
                <select className="border border-gray-300 p-3 rounded-md text-gray-700 w-full">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
            </div>

            {/* Name */}
            <label className="form-control w-full">
              <span className="label-text">Name</span>
              <input
                type="text"
                placeholder="Enter Name"
                className="border border-gray-300 p-3 rounded-md text-gray-700 w-full"
              />
            </label>

            {/* Country Code & Mobile Number */}
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="form-control w-full">
                <span className="label-text">Country Code</span>
                <select className="border border-gray-300 p-3 rounded-md text-gray-700 w-full">
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
              </label>
              <label className="form-control w-full">
                <span className="label-text">Mobile No</span>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="border border-gray-300 p-3 rounded-md text-gray-700 w-full"
                />
              </label>
            </div>

            {/* Register Button */}
            <button className="w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 p-3 mt-4">
              Register
            </button>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-4 text-sm text-gray-300 flex items-center justify-center flex-wrap">
          <input type="checkbox" className="mr-2" />
          By clicking on Register Free, you agree to{" "}
          <a href="#" className="text-blue-400 ml-1">
            Terms & Conditions
          </a>
          <span className="px-1">and</span>
          <a href="#" className="text-blue-400 ml-1">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
