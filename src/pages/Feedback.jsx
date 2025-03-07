import React from "react";

export default function Feedback() {
  return (
    <div className="max-w-screen-lg mx-auto pb-8">
      <div>
        <div className="flex items-center justify-between md:w-3/4">
          <h2 className="text-xl font-bold text-orange-500">Feedback</h2>
          <p className="text-blue-500 text-sm">
            Fields marked in ' * ' are Mandatory
          </p>
        </div>
        <div className="mt-8">
          <p className="text-sm">
            Please feel free to post your questions, comments and suggestions.
            We are eager to assist you and serve you better.
          </p>
          <div className="mt-4">
            {/* Priority field */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>Prioriy</p>
              <select className="select select-bordered select-sm w-full max-w-xs">
                <option disabled selected>
                  Medium
                </option>
                <option>Heigh</option>
                <option>Low</option>
              </select>
            </div>
            {/* Name field */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>
                Name<div className="badge badge-xs text-red-600">*</div>
              </p>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            {/* Phone number */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>
                Phone Number<div className="badge badge-xs text-red-600">*</div>
              </p>
              <input
                type="phone"
                placeholder="Your name"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            {/* Email number */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>
                Email<div className="badge badge-xs text-red-600">*</div>
              </p>
              <input
                type="email"
                placeholder="Your name"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            {/* Issue field */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>Issue</p>
              <select className="select select-bordered select-sm w-full max-w-xs">
                <option disabled selected>
                  General Inquiry
                </option>
                <option>Problem using the site</option>
                <option>Abuse</option>
                <option>Feedback</option>
                <option>Advertising</option>
              </select>
            </div>
            {/* Suggesion/feedback */}
            <div className="flex justify-between gap-6 md:w-2/4 py-4 border-b-2 border-dotted">
              <p>
                Suggesion/Feedback
                <div className="badge badge-xs text-red-600">*</div>
              </p>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-sm w-full max-w-xs"
              ></textarea>
            </div>
            {/* Name field */}
            <div className="flex justify-between gap-6 md:w-2/4 pt-4 border-b-2 border-dotted">
              <p>
                Enter the numbers given in the image
                <div className="badge badge-xs text-red-600">*</div>
              </p>
              <input
                type="text"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <span className="bg-gray-400 text-lg h-7 px-2">2978</span>
            </div>
            <div className="mt-4 text-center">
                <button className="btn btn-sm bg-orange-500 text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
