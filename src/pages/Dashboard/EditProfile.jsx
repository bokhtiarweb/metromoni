import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaMusic } from "react-icons/fa";
import { FaBasketball, FaBowlFood } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import EditMobileProfile from "../Mobile/MobileDash/EditMobileProfile";
import EditPartnerMobilePreferrance from "../Mobile/MobileDash/EditPartnerMobilePreferrance";
const profileImg = "/cat.jpg";

export default function EditProfile() {
  const [activeCollapse, setActiveCollapse] = useState("profile");
  const [activeTab, setActiveTab] = useState("basicTab");
  const [profileInfo, setProfileInfo] = useState("basic information");
  const [contactInfo, setContactInfo] = useState("location");
  const [photoInfo, setPhotoInfo] = useState("photo");
  const [settingInfo, setSettingInfo] = useState("change password");
  const [trustInfo, setTrustInfo] = useState("identity badge");

  const handleProfileTab = (tab) => {
    setProfileInfo(tab.toLowerCase());
    setActiveTab("basicTab");
  };

  const handleContactTab = (tab) => {
    setContactInfo(tab.toLowerCase());
    setActiveTab("contactTab");
  };

  const handlePhotoTab = (tab) => {
    setPhotoInfo(tab.toLowerCase());
    setActiveTab("photoTab");
  };
  const handleSettingTab = (tab) => {
    setSettingInfo(tab.toLowerCase());
    setActiveTab("settingTab");
  };
  const handleTrustTab = (tab) => {
    setTrustInfo(tab.toLowerCase());
    setActiveTab("trustTab");
  };

  return (
    <>
      <div className="hidden sm:block max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Profile Header */}
        <div className="flex gap-6">
          <div className="bg-gray-200 py-2">
            <img
              src={profileImg}
              alt="Profile image"
              className="w-32 h-32 mx-auto"
            />
            <div className="text-center mt-2">
              <p className="text-sm my-2">Member would like to see you</p>
              <button className="btn btn-sm btn-secondary text-white">
                Add Photo
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[70%]">
            <div>
              <h2 className="text-2xl font-bold">Edit Profile</h2>
              <p className="text-gray-600">Fields marked as * are mandatory</p>
            </div>
            <a className="text-blue-600" href="#">
              View my Profile
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-4 bg-white shadow-lg rounded-lg flex gap-6">
          {/* Sidebar - Vertical Tabs */}
          <div className="w-1/4 bg-gray-100 rounded-lg">
            {/* Profile Info */}
            <div>
              <div className="collapse collapse-plus border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  checked={activeCollapse == "profile"}
                  onChange={() => {
                    setActiveCollapse(
                      activeCollapse === "profile" ? null : "profile"
                    );
                    setActiveTab("basicTab");
                  }}
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">Profile Info</h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {[
                      "Basic Information",
                      "Education & Occupation",
                      "Family Details",
                      "Hobbies & Interest",
                      "Partner Preference",
                    ].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          profileInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handleProfileTab(tab)}
                      >
                        {tab === "Partner Preference" ? (
                          <a href="/profiledetail/editpartnerpreference">
                            {tab}
                          </a>
                        ) : (
                          tab
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Details */}
            <div>
              <div className="collapse collapse-plus border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  checked={activeCollapse === "contact"}
                  onChange={() => {
                    setActiveCollapse(
                      activeCollapse === "contact" ? null : "contact"
                    );
                    setActiveTab("contactTab");
                  }}
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Details
                  </h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {["Location", "Email", "Contact Number"].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          contactInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handleContactTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Enhance photo */}
            <div>
              <div className="collapse collapse-plus border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  checked={activeCollapse === "photo"}
                  onChange={() => {
                    setActiveCollapse(
                      activeCollapse === "photo" ? null : "photo"
                    );
                    setActiveTab("photoTab");
                  }}
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">
                    Enhance Profile
                  </h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {["photo"].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          photoInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handlePhotoTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Settings */}
            <div>
              <div className="collapse collapse-plus border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  checked={activeCollapse === "setting"}
                  onChange={() => {
                    setActiveCollapse(
                      activeCollapse === "setting" ? null : "setting"
                    );
                    setActiveTab("settingTab");
                  }}
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">Settings</h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {[
                      "Change Password",
                      "Deactive Profile",
                      "Delete Profile",
                    ].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          settingInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handleSettingTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Trust Badge */}
            <div>
              <div className="collapse collapse-plus border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  checked={activeCollapse === "trust"}
                  onChange={() => {
                    setActiveCollapse(
                      activeCollapse === "trust" ? null : "trust"
                    );
                    setActiveTab("trustTab");
                  }}
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">Trust badge</h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {["Identity Badge", "Professional Badge"].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          trustInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handleTrustTab(tab)}
                      >
                        <a href="/profiledetail/editproflebadge">{tab}</a>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Panel - Tab Content for profile info */}
          <div className="w-3/4 p-4 border rounded-lg">
            {/* Profile info */}
            {activeTab === "basicTab" && (
              <div>
                {profileInfo === "basic information" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Profile created by */}
                      <label className="form-control">
                        <span className="label-text">Profile created By *</span>
                        <select className="select select-bordered">
                          <option>Self</option>
                          <option>Parents</option>
                          <option>Sibiling</option>
                          <option>Relative</option>
                          <option>Friend</option>
                        </select>
                      </label>
                      {/* Name */}
                      <label className="form-control">
                        <span className="label-text">Name *</span>
                        <input type="text" className="input input-bordered" />
                      </label>
                      {/* Date of birth */}
                      <label className="form-control">
                        <span className="label-text">Date of Birth *</span>
                        <input type="date" className="input input-bordered" />
                      </label>
                      {/* Marital status */}
                      <label className="form-control">
                        <span className="label-text">Marital Status *</span>
                        <select className="select select-bordered">
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
                          className="input input-bordered"
                          placeholder="152 cm"
                        />
                      </label>
                      {/* Weight */}
                      <label className="form-control">
                        <span className="label-text">Weight</span>
                        <div className="flex gap-4">
                          <select className="select select-bordered">
                            <option>--KGS--</option>
                            <option>41kg</option>
                            <option>42kg</option>
                            <option>43kg</option>
                            <option>45kg</option>
                          </select>
                          <div className="divider">OR</div>
                          <select className="select select-bordered">
                            <option>--LBS--</option>
                            <option>91lbs</option>
                            <option>92lbs</option>
                            <option>93lbs</option>
                            <option>94lbs</option>
                            <option>95lbs</option>
                          </select>
                        </div>
                      </label>
                      {/* Body Type */}
                      <label className="form-control">
                        <span className="label-text">Body Type</span>
                        <div className="flex gap-4">
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
                      {/* Physically status */}
                      <label className="form-control">
                        <span className="label-text">Physically Status*</span>
                        <div className="flex gap-4">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Normal</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Physically challenged
                            </span>
                          </label>
                        </div>
                      </label>
                      {/* Religion */}
                      <label className="form-control">
                        <span className="label-text">Religion *</span>
                        <select className="select select-bordered">
                          <option>Islam</option>
                          <option>Hinduism</option>
                          <option>Christianity</option>
                          <option>Buddhism</option>
                        </select>
                      </label>
                      {/* Sect */}
                      <label className="form-control">
                        <span className="label-text">Sect *</span>
                        <select className="select select-bordered">
                          <option>Sunni</option>
                          <option>Shia</option>
                          <option>Ahamadiyya</option>
                          <option>Hanafi</option>
                        </select>
                      </label>
                      {/* Mother Tongue */}
                      <label className="form-control">
                        <span className="label-text">Mother Tongue *</span>
                        <select className="select select-bordered">
                          <option>Bangla</option>
                          <option>English</option>
                          <option>Urdu</option>
                          <option>Hindi</option>
                        </select>
                      </label>
                      {/* Eating habit */}
                      <label className="form-control">
                        <span className="label-text">Eating Habit</span>
                        <div className="flex-wrap gap-4">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Vegetarian</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Non Vegetarian</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Halal food always
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Halal food when I can
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">No Restrictions </span>
                          </label>
                        </div>
                      </label>
                      {/* Smoking */}
                      <label className="form-control">
                        <span className="label-text">Smoking</span>
                        <div className="flex gap-4">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Yes</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">No</span>
                          </label>
                        </div>
                      </label>
                      {/* Drinking Habit */}
                      <label className="form-control">
                        <span className="label-text">Drinking Habit</span>
                        <div className="flex gap-4">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Non Drinker</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Light / Social Drinker
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Regular Drinker</span>
                          </label>
                        </div>
                      </label>
                      {/* About Me */}
                      <label className="form-control">
                        <span className="label-text">About Me</span>
                        <textarea
                          placeholder="Bio"
                          className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                        ></textarea>
                      </label>
                      <label className="form-control">
                        <button className="btn btn-warning">Save</button>
                      </label>
                    </div>
                  </div>
                )}

                {profileInfo === "education & occupation" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Education & Occupation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Education */}
                      <label className="form-control">
                        <span className="label-text">Education *</span>
                        <select className="select select-bordered">
                          <option>Higher Secondary / Secondary</option>
                          <option>PHD</option>
                          <option>Masters</option>
                          <option>Bachelors</option>
                        </select>
                      </label>
                      {/* Collage Institute */}
                      <label className="form-control">
                        <span className="label-text">Collage Institute </span>
                        <input type="text" className="input input-bordered" />
                      </label>
                      {/* Employed in */}
                      <label className="form-control">
                        <span className="label-text">Employed in</span>
                        <div className="flex-wrap gap-4">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Government</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Defence</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Private</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Bussiness</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Self Employed</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Not Working</span>
                          </label>
                        </div>
                      </label>
                      {/* Occupation */}
                      <label className="form-control">
                        <span className="label-text">Occupation *</span>
                        <select className="select select-bordered">
                          <option>Supervisor</option>
                          <option>Officer</option>
                          <option>Clerk</option>
                          <option>Diploma</option>
                        </select>
                      </label>
                      {/* Annual Income */}
                      <label className="form-control">
                        <span className="label-text">Annual Income *</span>
                        <div className="flex gap-4">
                          <select className="select select-bordered">
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Us</option>
                            <option>Australia</option>
                          </select>
                          <select className="select select-bordered">
                            <option>192000</option>
                            <option>200000</option>
                            <option>210000</option>
                            <option>220000</option>
                            <option>230000</option>
                            <option>250000</option>
                          </select>
                        </div>
                        <span>BDT 16000 per month</span>
                      </label>
                      <label className="form-control">
                        <button className="btn btn-warning">Save</button>
                      </label>
                    </div>
                  </div>
                )}

                {profileInfo === "family details" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Family Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Native Place */}
                      <label className="form-control">
                        <span className="label-text">Native Place</span>
                        <input type="text" className="input input-bordered" />
                      </label>
                      {/* Father Occupation */}
                      <label className="form-control">
                        <span className="label-text">Father`s Occupation</span>
                        <input type="text" className="input input-bordered" />
                      </label>
                      {/* Mother Occupation */}
                      <label className="form-control">
                        <span className="label-text">Mother`s Occupation</span>
                        <input type="text" className="input input-bordered" />
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
                        <span className="label-text">No. of Sisters</span>
                        <select className="select select-bordered">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </label>
                      {/* About My Family */}
                      <label className="form-control">
                        <span className="label-text">About My Family</span>
                        <textarea
                          placeholder="Bio"
                          className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                        ></textarea>
                      </label>
                      <label className="form-control">
                        <button className="btn btn-warning">Save</button>
                      </label>
                    </div>
                  </div>
                )}

                {profileInfo === "hobbies & interest" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <GiKnifeFork></GiKnifeFork>
                        What are your Hobbies and Interest?
                      </h3>
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Playing musical instruments
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="cursor-pointer flex items-center gap-1">
                          <span className="label-text">Others</span>
                          <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-400">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaMusic></FaMusic>
                        Your favourite music?
                      </h3>
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Playing musical instruments
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="cursor-pointer flex items-center gap-1">
                          <span className="label-text">Others</span>
                          <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-400">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaBasketball></FaBasketball>
                        Sport you like?
                      </h3>
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Playing musical instruments
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="cursor-pointer flex items-center gap-1">
                          <span className="label-text">Others</span>
                          <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-400">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaBowlFood></FaBowlFood>
                        Your favourite Food?
                      </h3>
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Playing musical instruments
                            </span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Acting</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Cooking</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Pets</span>
                          </label>
                          <label className="cursor-pointer flex items-center gap-1">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">Sports</span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="cursor-pointer flex items-center gap-1">
                          <span className="label-text">Others</span>
                          <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Contact Details */}
            {activeTab === "contactTab" && (
              <div>
                {contactInfo === "location" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Location</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Location */}
                        <label className="form-control">
                          <span className="label-text">
                            Country Living in *
                          </span>
                          <select className="select select-bordered">
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>USA</option>
                          </select>
                        </label>
                        <label className="form-control">
                          <span className="label-text">Residing State *</span>
                          <select className="select select-bordered">
                            <option>Dhaka</option>
                            <option>Barisal</option>
                            <option>Chittagong</option>
                            <option>Khulna</option>
                          </select>
                        </label>
                        <label className="form-control">
                          <span className="label-text">
                            Residing District / City *
                          </span>
                          <select className="select select-bordered">
                            <option>Gazipur</option>
                            <option>Bhanga</option>
                            <option>Foritpur</option>
                            <option>Dhaka</option>
                          </select>
                        </label>
                        <label className="form-control">
                          <span className="label-text">Citizenship *</span>
                          <select className="select select-bordered">
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>USA</option>
                          </select>
                        </label>
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {contactInfo === "email" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Email</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Email */}
                        <label className="form-control">
                          <span className="label-text">Email *</span>
                          <input
                            type="email"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </label>
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {contactInfo === "contact number" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Mobile Number *
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Enhance profile */}
            {activeTab === "photoTab" && (
              <div>
                {photoInfo === "photo" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Add photo</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* add photo */}
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-info w-full max-w-xs"
                        />
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Settings info */}
            {activeTab === "settingTab" && (
              <div>
                {settingInfo === "change password" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Change Password
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* old password */}
                        <label className="form-control">
                          <span className="label-text">Old Password *</span>
                          <input
                            type="password"
                            className="input input-bordered"
                          />
                        </label>
                        {/* new password */}
                        <label className="form-control">
                          <span className="label-text">New Password *</span>
                          <input
                            type="password"
                            className="input input-bordered"
                          />
                        </label>
                        {/* confirm password */}
                        <label className="form-control">
                          <span className="label-text">New Password *</span>
                          <input
                            type="password"
                            className="input input-bordered"
                          />
                        </label>
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {settingInfo === "deactive profile" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        De-active Profile
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {/* Hide profile */}
                        <div className="">
                          <strong>Hide Profile</strong>
                          <p className="text-sm">
                            Want to take a short break from your life partner
                            search? You will not be able to contact other
                            members but can still view their profile but other
                            members will not be able to see and contact you.
                          </p>
                          <label className="cursor-pointer flex items-center gap-1 mt-2">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-xs checkbox-accent"
                            />
                            <span className="label-text">
                              Yes, I want to hide my profile
                            </span>
                          </label>
                        </div>
                        <label className="form-control">
                          <button className="btn btn-warning">Save</button>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {settingInfo === "delete profile" && (
                  <div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Delete Profile
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {/* Hide profile */}
                        <div className="">
                          <p className="text-sm">
                            We hope you have found your life partner that you're
                            deleting this profile from BangladeshiMatrimony.
                            Note: Once you delete your profile, it cannot be
                            restored.
                          </p>
                        </div>
                        <div>
                          <div>
                            <Tabs>
                              <TabList>
                                <Tab>Married</Tab>
                                <Tab>Marriage Fixed</Tab>
                                <Tab>Other reasons</Tab>
                              </TabList>
                              <TabPanel>
                                <div>
                                  <h2 className="text-lg font-semibold">
                                    Congratulations !
                                  </h2>
                                  <p>
                                    We are happy that found your life partner.
                                  </p>
                                  <div className="mt-4">
                                    <p>Select the Source</p>
                                    <div className="flex gap-4">
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through BangladeshiMatrimony
                                        </span>
                                      </label>
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through other Matrimonial site
                                        </span>
                                      </label>
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through other source
                                        </span>
                                      </label>
                                    </div>

                                    <div className="mt-4">
                                      <label className="form-control">
                                        <span className="label-text">
                                          Name of the source
                                        </span>
                                        <input
                                          type="text"
                                          className="input input-bordered  w-full max-w-xs"
                                        />
                                      </label>
                                      <label className="form-control mt-4">
                                        <span className="label-text">
                                          Source story
                                        </span>
                                        <textarea
                                          placeholder="Bio"
                                          className="textarea textarea-bordered textarea-md w-full max-w-xs"
                                        ></textarea>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div>
                                  <h2 className="text-lg font-semibold">
                                    Congratulations !
                                  </h2>
                                  <p>
                                    We are happy that found your life partner.
                                  </p>
                                  <div className="mt-4">
                                    <p>Select the Source</p>
                                    <div className="flex gap-4">
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through BangladeshiMatrimony
                                        </span>
                                      </label>
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through other Matrimonial site
                                        </span>
                                      </label>
                                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                                        <input
                                          type="checkbox"
                                          className="checkbox checkbox-xs checkbox-accent"
                                        />
                                        <span className="label-text">
                                          Through other source
                                        </span>
                                      </label>
                                    </div>

                                    <div className="mt-4">
                                      <label className="form-control">
                                        <span className="label-text">
                                          Bride Name
                                        </span>
                                        <input
                                          type="text"
                                          className="input input-bordered  w-full max-w-xs"
                                        />
                                      </label>
                                      <label className="form-control mt-4">
                                        <span className="label-text">
                                          Engagement date
                                        </span>
                                        <input
                                          type="date"
                                          className="input input-bordered  w-full max-w-xs"
                                        />
                                      </label>
                                      <label className="form-control mt-4">
                                        <span className="label-text">
                                          Source story
                                        </span>
                                        <textarea
                                          placeholder="Bio"
                                          className="textarea textarea-bordered textarea-md w-full max-w-xs"
                                        ></textarea>
                                      </label>
                                      <label className="form-control mt-4">
                                        <span className="label-text">
                                          Address
                                        </span>
                                        <textarea
                                          placeholder="Bio"
                                          className="textarea textarea-bordered textarea-md w-full max-w-xs"
                                        ></textarea>
                                      </label>
                                      <label className="form-control mt-4">
                                        <span className="label-text">
                                          Attach Photo
                                        </span>
                                        <input
                                          type="file"
                                          className="file-input file-input-bordered w-full max-w-xs"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div className="mt-4">
                                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Through BangladeshiMatrimony
                                    </span>
                                  </label>
                                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Through other Matrimonial site
                                    </span>
                                  </label>
                                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Through other source
                                    </span>
                                  </label>
                                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Through other source
                                    </span>
                                  </label>
                                </div>
                              </TabPanel>
                            </Tabs>
                          </div>
                          <label className="form-control mt-4">
                            <button className="btn btn-warning">Save</button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="block sm:hidden p-4">
        {/* For mobile profile info */}
        <EditMobileProfile></EditMobileProfile>
        <EditPartnerMobilePreferrance></EditPartnerMobilePreferrance>
      </div>
    </>
  );
}
