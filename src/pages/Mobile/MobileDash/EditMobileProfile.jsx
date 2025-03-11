import React from "react";
import { FaMobileAlt, FaMusic } from "react-icons/fa";
import { FaBasketball, FaBowlFood } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";

export default function EditMobileProfile() {
  return (
    <div className="space-y-8">
      <div>
        <div className="bg-slate-200 mb-4">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div className="text-center p-4">
            <a
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <FaMobileAlt className="mx-auto"></FaMobileAlt>
              <p className="text-[14px]">View Mobile No</p>
            </a>
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">
                Phone Number of Jhon (BGD3251671)
              </h3>
              <p className="py-4">
                <strong>Mobile:</strong>
                <span className="ml-4">0125454868</span>
              </p>
              <p className="py-4">
                <strong>Phone verified on:</strong>
                <span className="ml-4">01-01-2025</span>
              </p>
            </div>
          </dialog>
        </div>
        <div className="mb-4">
          <label className="form-control">
            <span className="label-text">Few words about me</span>
            <textarea
              placeholder="Bio"
              className="textarea textarea-xs"
              value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus voluptatibus aperiam debitis consequatur`}
            ></textarea>
          </label>
        </div>
        <h3 className="text-lg font-semibold">Basic Details</h3>
        <div className="space-y-4">
          {/* Profile created by */}
          <label className="form-control">
            <span className="label-text">Profile created By *</span>
            <select className="select select-bordered w-full">
              <option>Self</option>
              <option>Parents</option>
              <option>Sibling</option>
              <option>Relative</option>
              <option>Friend</option>
            </select>
          </label>
          {/* Name */}
          <label className="form-control">
            <span className="label-text">Name *</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          {/* Date of birth */}
          <label className="form-control">
            <span className="label-text">Date of Birth *</span>
            <input type="date" className="input input-bordered w-full" />
          </label>
          {/* Marital status */}
          <label className="form-control">
            <span className="label-text">Marital Status *</span>
            <select className="select select-bordered w-full">
              <option>Unmarried</option>
              <option>Married</option>
              <option>Widow/Widower</option>
              <option>Divorced</option>
              <option>Separated</option>
            </select>
          </label>
          {/* Height */}
          <label className="form-control">
            <span className="label-text">Height *</span>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="152 cm"
            />
          </label>
          {/* Weight */}
          <label className="form-control">
            <span className="label-text">Weight</span>
            <div className="flex flex-wrap gap-4">
              <select className="select select-bordered w-full">
                <option>--KGS--</option>
                <option>41kg</option>
                <option>42kg</option>
                <option>43kg</option>
              </select>
              <div className="divider">OR</div>
              <select className="select select-bordered w-full">
                <option>--LBS--</option>
                <option>91lbs</option>
                <option>92lbs</option>
                <option>93lbs</option>
              </select>
            </div>
          </label>
          {/* Body Type */}
          <label className="form-control">
            <span className="label-text">Body Type</span>
            <div className="flex flex-wrap gap-4">
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">Slim</span>
              </label>
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">Athletic</span>
              </label>
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">Average</span>
              </label>
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">Heavy</span>
              </label>
            </div>
          </label>
          {/* Religion */}
          <label className="form-control">
            <span className="label-text">Religion *</span>
            <select className="select select-bordered w-full">
              <option>Islam</option>
              <option>Hinduism</option>
              <option>Christianity</option>
              <option>Buddhism</option>
            </select>
          </label>
          {/* About Me */}
          <label className="form-control">
            <span className="label-text">About Me</span>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </label>
        </div>
      </div>

      {/* Education & Occupation */}
      <div>
        <h3 className="text-lg font-semibold">Education & Occupation</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Education */}
          <label className="form-control">
            <span className="label-text">Education *</span>
            <select className="select select-bordered w-full">
              <option>Higher Secondary</option>
              <option>PHD</option>
              <option>Masters</option>
              <option>Bachelors</option>
            </select>
          </label>
          {/* College Institute */}
          <label className="form-control">
            <span className="label-text">College Institute</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
        </div>
      </div>

      {/* Family Details */}
      <div>
        <h3 className="text-lg font-semibold">Family Details</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Native Place */}
          <label className="form-control">
            <span className="label-text">Native Place</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          {/* Father's Occupation */}
          <label className="form-control">
            <span className="label-text">Father's Occupation</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          {/* Mother's Occupation */}
          <label className="form-control">
            <span className="label-text">Mother's Occupation</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          {/* No. of Brothers */}
          <label className="form-control">
            <span className="label-text">No. of Brothers</span>
            <select className="select select-bordered">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          {/* No. of Sisters */}
          <label className="form-control">
            <span className="label-text">No. of Brothers</span>
            <select className="select select-bordered">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          <label className="form-control">
            <span className="label-text">About My Family</span>
            <textarea placeholder="Bio" className="textarea textarea-xs"></textarea>
          </label>
        </div>
      </div>

      {/* Hobbies Section */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <GiKnifeFork />
          What are your Hobbies and Interests?
        </h3>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "Acting",
            "Cooking",
            "Music",
            "Sports",
            "Pets",
            "Dancing",
            "Reading",
            "Traveling",
          ].map((hobby, index) => (
            <label
              key={index}
              className="cursor-pointer flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-accent"
              />
              <span className="label-text">{hobby}</span>
            </label>
          ))}
        </div>

        {/* Other Hobbies Textarea */}
        <div className="mt-4">
          <label className="flex flex-col">
            <span className="label-text">Others</span>
            <textarea
              placeholder="Write here..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </label>
        </div>
      </div>

      {/* Music Section */}
      <div className=" border-gray-400">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaMusic />
          Your Favourite Music?
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {["Classical", "Jazz", "Rock", "Pop", "Hip-Hop", "Electronic"].map(
            (music, index) => (
              <label
                key={index}
                className="cursor-pointer flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">{music}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Sports Section */}
      <div className="mt-6 border-t border-gray-400">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaBasketball />
          Sports You Like?
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Football",
            "Basketball",
            "Tennis",
            "Cricket",
            "Swimming",
            "Cycling",
          ].map((sport, index) => (
            <label
              key={index}
              className="cursor-pointer flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-accent"
              />
              <span className="label-text">{sport}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Food Preferences */}
      <div className="mt-6 border-t border-gray-400">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaBowlFood />
          Your Favourite Food?
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {["Italian", "Chinese", "Mexican", "Indian", "Thai", "Japanese"].map(
            (food, index) => (
              <label
                key={index}
                className="cursor-pointer flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-accent"
                />
                <span className="label-text">{food}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
}
