import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaBan,
  FaBell,
  FaLock,
  FaPhoneAlt,
  FaRegTimesCircle,
  FaTrashAlt,
  FaUserCheck,
  FaUserLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Logout from "../Mobile/MobileDash/SettingModals/Logout";
import BlockedProfileModal from "../Mobile/MobileDash/SettingModals/BlockedProfileModal";
import IgnoredProfiledModal from "../Mobile/MobileDash/SettingModals/IgnoredProfiledModal";
import CommunicationModal from "../Mobile/MobileDash/SettingModals/CommunicationModal";
import CallPreferrencegModal from "../Mobile/MobileDash/SettingModals/CallPreferrencegModal";
import PrivacyModal from "../Mobile/MobileDash/SettingModals/PrivacyModal";
import ChangePasswordModal from "../Mobile/MobileDash/SettingModals/ChangePasswordModal";
import DeactiveModal from "../Mobile/MobileDash/SettingModals/DeactiveModal";
import DeleteProfileModal from "../Mobile/MobileDash/SettingModals/DeleteProfileModal";
import HelpCenterModal from "../Mobile/MobileDash/SettingModals/HelpCenterModal";
import TermConditionmodal from "../Mobile/MobileDash/SettingModals/TermConditionmodal";
import PrivacyPolicyModal from "../Mobile/MobileDash/SettingModals/PrivacyPolicyModal";

export default function Settings() {
  const [settingInfo, setSettingInfo] = useState("edit email address");

  const handleSettingTab = (tab) => {
    setSettingInfo(tab.toLowerCase());
  };

  return (
    <>
      <div className="hidden sm:block max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="max-w-5xl mx-auto mt-4 bg-white shadow-lg rounded-lg flex gap-6">
          {/* Sidebar - Vertical Tabs */}
          <div className="w-1/4 bg-gray-100 rounded-lg">
            {/* Settings */}
            <div>
              <div className="collapse border border-base-300 bg-base-200">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  defaultChecked
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  <h3 className="text-xl font-semibold mb-4">Settings</h3>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col space-y-2">
                    {[
                      "Edit Email Address",
                      "Edit Contact Number",
                      "Change Password",
                      "Deactive Profile",
                      "Delete Profile",
                    ].map((tab) => (
                      <button
                        key={tab}
                        className={`p-2 sm:text-sm text-left rounded-lg text-sm ${
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
          </div>
          {/* Right Panel - Tab Content for profile info */}
          <div className="w-3/4 p-4 border rounded-lg">
            {/* Settings info */}
            <div>
              {settingInfo === "edit email address" && (
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold mb-4">Email</h3>
                    <p className="text-sm">
                      Fields marked as '*' are Mandatory
                    </p>
                  </div>
                  <div className="flex gap-4">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <span className="label-text">Email *</span>
                      <input
                        type="email"
                        placeholder="E-mail"
                        className="input-sm input input-bordered"
                      />
                    </div>
                    <div>
                      <button className="btn btn-sm btn-warning">Save</button>
                    </div>
                  </div>
                </div>
              )}

              {settingInfo === "edit contact number" && (
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
                      <div className="sm:mt-12">
                        <button className="btn btn-sm btn-warning">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {settingInfo === "change password" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Change Password
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* old password */}
                    <label className="form-control">
                      <span className="label-text">Old Password *</span>
                      <input type="password" className="input input-bordered" />
                    </label>
                    {/* new password */}
                    <label className="form-control">
                      <span className="label-text">New Password *</span>
                      <input type="password" className="input input-bordered" />
                    </label>
                    {/* confirm password */}
                    <label className="form-control">
                      <span className="label-text">New Password *</span>
                      <input type="password" className="input input-bordered" />
                    </label>
                    <label className="form-control">
                      <button className="btn btn-warning">Save</button>
                    </label>
                  </div>
                </div>
              )}
              {settingInfo === "deactive profile" && (
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
                        search? You will not be able to contact other members
                        but can still view their profile but other members will
                        not be able to see and contact you.
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
              )}
              {settingInfo === "delete profile" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Delete Profile</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Hide profile */}
                    <div className="">
                      <p className="text-sm">
                        We hope you have found your life partner that you're
                        deleting this profile from BangladeshiMatrimony. Note:
                        Once you delete your profile, it cannot be restored.
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
                              <p>We are happy that found your life partner.</p>
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
                              <p>We are happy that found your life partner.</p>
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
                                    <span className="label-text">Address</span>
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden p-2">
        <div>
          <Link to={`/`} className="flex items-center gap-2">
            <FaArrowLeft></FaArrowLeft>
            Setting
          </Link>

          <div className="mt-4 space-y-2">
            <span className="flex items-center gap-2">
              <FaBan></FaBan>
              <span
                onClick={() =>
                  document.getElementById("my_blocked_profil_modal").showModal()
                }
              >
                blocked Profiles
              </span>
              <BlockedProfileModal
                Id={`my_blocked_profil_modal`}
              ></BlockedProfileModal>
            </span>

            <span className="flex items-center gap-2">
              <FaRegTimesCircle></FaRegTimesCircle>
              <span
                onClick={() =>
                  document.getElementById("my_ignored_profil_modal").showModal()
                }
              >
                Ignored Profiles
              </span>
              <IgnoredProfiledModal
                Id={`my_ignored_profil_modal`}
              ></IgnoredProfiledModal>
            </span>

            <span className="flex items-center gap-2">
              <FaBell></FaBell>
              <span
                onClick={() =>
                  document.getElementById("my_communication_modal").showModal()
                }
              >
                Communication settings
              </span>
              <CommunicationModal
                Id={`my_communication_modal`}
              ></CommunicationModal>
            </span>

            <span className="flex items-center gap-2">
              <FaPhoneAlt></FaPhoneAlt>
              <span>
                <span
                  onClick={() =>
                    document.getElementById("my_call_modal").showModal()
                  }
                >
                  Call Preferrence
                </span>
              </span>
              <CallPreferrencegModal
                Id={`my_call_modal`}
              ></CallPreferrencegModal>
            </span>

            <span className="flex items-center gap-2">
              <FaUserLock></FaUserLock>
              <span
                onClick={() =>
                  document.getElementById("my_privacy_modal").showModal()
                }
              >
                Privacy Settings
              </span>
              <PrivacyModal Id={`my_privacy_modal`}></PrivacyModal>
            </span>

            <span className="flex items-center gap-2">
              <FaLock></FaLock>
              <span
                onClick={() =>
                  document.getElementById("my_password_modal").showModal()
                }
              >
                Change Password
              </span>
              <ChangePasswordModal
                Id={`my_password_modal`}
              ></ChangePasswordModal>
            </span>

            <span className="flex items-center gap-2">
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
              <span>
                Logout
              </span>
            </span>

            <span className="flex items-center gap-2">
              <FaUserCheck></FaUserCheck>
              <span
                onClick={() =>
                  document.getElementById("my_deactive_modal").showModal()
                }
              >
                Deactivate / Hide Account
              </span>
              <DeactiveModal Id={`my_deactive_modal`}></DeactiveModal>
            </span>

            <span className="flex items-center gap-2">
              <FaTrashAlt></FaTrashAlt>
              <span
                onClick={() =>
                  document.getElementById("my_delete_modal").showModal()
                }
              >
                Delete Profile
              </span>
              <DeleteProfileModal Id={`my_delete_modal`}></DeleteProfileModal>
            </span>
          </div>

          <div className="mt-4 space-y-2 border-t-2">
            <span
              className="flex items-center gap-2"
              onClick={() =>
                document.getElementById("my_helpcenter_modal").showModal()
              }
            >
              24/7 Help Center
              <HelpCenterModal Id={`my_helpcenter_modal`}></HelpCenterModal>
            </span>
            <span
              className="flex items-center gap-2"
              onClick={() =>
                document.getElementById("my_termcondition_modal").showModal()
              }
            >
              Terms & Conditions
              <TermConditionmodal
                Id={`my_termcondition_modal`}
              ></TermConditionmodal>
            </span>
            <span
              className="flex items-center gap-2"
              onClick={() =>
                document.getElementById("my_privacypolicy_modal").showModal()
              }
            >
              Privacy Policy
            </span>
            <PrivacyPolicyModal
              Id={`my_privacypolicy_modal`}
            ></PrivacyPolicyModal>
          </div>
        </div>
      </div>
    </>
  );
}
