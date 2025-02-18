import React from "react";
const res = "/res.jpg";

export default function Register() {
  return (
    // <div
    //   className={`bg-cover bg-center bg-no-repeat w-full bg-fixed`}
    //   style={{ backgroundImage: `url(${res})` }}
    // >
    //   Register
    //   <div className="grid items-center h-[100vh]">
    //     <div className="max-w-screen-lg mx-auto bg-black opacity-80 p-8">
    //       <h2 className="text-white font-bold text-3xl">
    //         No.1 Official Matrimony Service Exclusively For Bangladeshis
    //       </h2>
    //       <h3 className="text-white text-xl mt-2">
    //         Find Bangladeshi to marry from all spheres of life, including NRB
    //         members!
    //       </h3>
    //     </div>
    //   </div>
    // </div>

    <div className="relative bg-black">
      {/* Background Grid Images */}
      <div className="absolute inset-0">
        <img
          src={res}
          alt="Matrimony Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto relative z-10 text-white text-center py-16 px-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          No.1 Official Matrimony Service Exclusively For Bangladeshis
        </h1>
        <p className="mt-2 text-lg">
          Find Bangladeshis to marry from all spheres of life, including NRB
          members!
        </p>

        {/* Form Section */}
        <div className="bg-white rounded-lg mt-6 shadow-lg py-6 px-4">
          <div className="sm:flex-wrap flex items-center gap-2">
            <div className="flex">
              {/* Matrimony Profile Dropdown */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Profile for</span>
                </div>
                <select className="border border-gray-300 p-3 rounded-md text-gray-700">
                  <option>Select Profile</option>
                  <option>Groom</option>
                  <option>Bride</option>
                </select>
              </label>
              <div>
                {/* Gender */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select className="border border-gray-300 p-3 rounded-md text-gray-700">
                    <option>Select Profile</option>
                    <option>Groom</option>
                    <option>Bride</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              {/* Name Input */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border border-gray-300 p-3 rounded-md text-gray-700"
                />
              </label>
            </div>
            <div className="flex">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Contry Code</span>
                </div>
                {/* Country Code Dropdown */}
                <select className="bg-gray-100 text-gray-700 p-3 border-r border-gray-300">
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
              </label>
              {/* Mobile Number Input */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Mobile No</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="p-3 flex-grow text-gray-700 outline-none"
                />
              </label>
            </div>
            {/* Register Button */}
            <div className="mt-8">
              <label className="form-control w-full max-w-xs">
                <button className="btn bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-auto">
                  Register
                </button>
              </label>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4 text-sm text-gray-300 flex items-center justify-center">
          <input type="checkbox" className="mr-2" />
          By clicking on Register Free, you agree to{" "}
          <a href="#" className="text-blue-400 ml-1">
            Terms & Conditions
          </a>{" "}
          <span className="px-1">and</span>{" "}
          <a href="#" className="text-blue-400 ml-1">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
