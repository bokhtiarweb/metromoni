import React, { useState } from "react";
import { FaArrowRight, FaDotCircle, FaPencilAlt } from "react-icons/fa";

export default function PrivacySettings() {
  const [activeCollapse, setActiveCollapse] = useState("privacy");
  const [activeTab, setActiveTab] = useState("privacyTab");
  const [privacyInfo, setPrivacyInfo] = useState("photo");
  const [notificationInfo, setNotificationInfo] = useState("notification");

  const handlePrivacySetting = (tab) => {
    setPrivacyInfo(tab.toLowerCase());
    setActiveTab("privacyTab");
  };
  const handleNotificationSetting = (tab) => {
    setNotificationInfo(tab.toLowerCase());
    setActiveTab("notificationTab");
  };

  return (
    <div className="hidden sm:block max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="max-w-5xl mx-auto mt-4 bg-white shadow-lg rounded-lg flex gap-6">
        {/* Sidebar - Vertical Tabs */}
        <div className="w-1/4 bg-gray-100 rounded-lg">
          {/* Profile Info */}
          <div>
            <div className="collapse border border-base-300 bg-base-200">
              <input
                type="checkbox"
                className="peer min-h-0"
                checked={activeCollapse == "privacy"}
                onChange={() => {
                  setActiveCollapse(
                    activeCollapse === "privacy" ? null : "privacy"
                  );
                  setActiveTab("privacyTab");
                }}
              />
              <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                <h3 className="text-orange-600 font-semibold mb-4">
                  Privacy Settings
                </h3>
              </div>
              <div className="collapse-content">
                <div className="flex flex-col space-y-2">
                  {["Photo", "Phone", "Profile Views", "Call Preference"].map(
                    (tab) => (
                      <button
                        key={tab}
                        className={`p-2 text-left rounded-lg text-sm ${
                          privacyInfo === tab.toLowerCase()
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-blue-100"
                        }`}
                        onClick={() => handlePrivacySetting(tab)}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <div className="collapse border border-base-300 bg-base-200">
              <input
                type="checkbox"
                className="peer min-h-0"
                checked={activeCollapse == "notification"}
                onChange={() => {
                  setActiveCollapse(
                    activeCollapse === "notification" ? null : "notification"
                  );
                  setActiveTab("notificationTab");
                }}
              />
              <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                <h3 className="text-orange-600 font-semibold mb-4">
                  Notification Settings
                </h3>
              </div>
              <div className="collapse-content">
                <div className="flex flex-col space-y-2">
                  {["Notification"].map((tab) => (
                    <button
                      key={tab}
                      className={`p-2 text-left rounded-lg text-sm ${
                        notificationInfo === tab.toLowerCase()
                          ? "bg-blue-500 text-white"
                          : "bg-white hover:bg-blue-100"
                      }`}
                      onClick={() => handleNotificationSetting(tab)}
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
          {/* Privacy Setting */}
          {activeTab === "privacyTab" && (
            <div>
              {privacyInfo === "photo" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Photo View setting
                  </h3>
                  <div>
                    <div>
                      <p className="text-sm">
                        You can have complete privacy by protecting your photo
                        from members and you can make it visible only to member
                        you prefer.
                      </p>
                    </div>
                    <div className="mt-6">
                      <label className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="label-text">
                            Make my photo visible to all
                          </span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1 mt-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Make my photo visible to only to members I prefer
                          </span>
                        </label>
                      </label>
                      <div className="mt-4">
                        <button className="btn btn-sm btn-warning">save</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {privacyInfo === "phone" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Phone View settings
                  </h3>
                  <div>
                    <div>
                      <p className="text-sm">
                        You can have complete privacy by protecting your photo
                        from members and you can make it visible only to member
                        you prefer.
                      </p>
                    </div>
                    <div className="mt-6">
                      <div>
                        <h2>Registered Phone Number</h2>
                        <p className="text-sm">
                          +8801233454665{" "}
                          <a
                            className="text-blue-500 cursor-pointer"
                            href="/profiledetail/editprofile"
                          >
                            Edit
                          </a>
                        </p>

                        <div className="mt-6">
                          <label className="form-control">
                            <label className="cursor-pointer flex items-center gap-1">
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs checkbox-accent"
                                defaultChecked
                              />
                              <div className={`p-2 w-full`}>
                                <span className="text-gray-700 text-sm">
                                  Show mobile number only to paid members
                                </span>
                                <span className="bg-yellow-300 text-xs p-1 rounded-md ml-1">
                                  Recommemdation for better response
                                </span>
                                <p className="text-xs flex items-center">
                                  <FaArrowRight className="mr-1"></FaArrowRight>{" "}
                                  Paid member can reach you directly
                                </p>
                              </div>
                            </label>
                            <label className="cursor-pointer flex items-center gap-1">
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs checkbox-accent"
                              />
                              <div className={`p-2 w-full`}>
                                <span className="label-text">
                                  Show mobile number only to whome I grant
                                  access to view
                                </span>
                                <p className="text-xs flex items-center">
                                  <FaArrowRight className="mr-1"></FaArrowRight>{" "}
                                  Members can request for your protected mobile
                                  number
                                </p>
                              </div>
                            </label>
                          </label>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="btn btn-sm btn-warning">save</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {privacyInfo === "profile views" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Profile View settings
                  </h3>
                  <div className="mt-6">
                    <label className="form-control">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">
                          Let other members know that you have shortlisted their
                          profile
                        </span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">
                          Let other members know that you have viwed their
                          profile
                        </span>
                      </label>
                    </label>
                    <div className="mt-4">
                      <button className="btn btn-sm btn-warning">save</button>
                    </div>
                  </div>
                </div>
              )}
              {privacyInfo === "call preference" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Call Preference
                  </h3>
                  <div>
                    <div>
                      <strong className="text-sm">
                        Let us know when we can call you:
                      </strong>
                    </div>
                    <div className="mt-6">
                      <label className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Call when there are important updates / offers
                          </span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1 mt-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="label-text">Call after 1 month</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1 mt-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">Call after 3 month</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1 mt-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">Call after 6 month</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1 mt-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">Never</span>
                        </label>
                      </label>
                      <div className="mt-4">
                        <button className="btn btn-sm btn-warning">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contact Details */}
          {activeTab === "notificationTab" && (
            <div>
              {notificationInfo === "notification" && (
                <div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Notification Settings
                    </h3>
                    <div>
                      <p className="text-sm">
                        Received real-time alerts regarding partner search
                        activities and respond to them right from your
                        notifications
                      </p>
                      <div className="collapse collapse-arrow">
                        <input type="checkbox" className="peer min-h-0" />
                        <div className="collapse-title min-h-0">
                          <p className="text-blue-500 flex items-center gap-2">
                            <FaPencilAlt></FaPencilAlt>
                            Edit
                          </p>
                        </div>
                        <div className="collapse-content">
                          <div className="space-y-1 mt-3">
                            <label className="w-fit cursor-pointer flex items-center gap-1">
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs checkbox-accent"
                                defaultChecked
                              />
                              <span className="text-gray-500 text-sm">
                                Received quick notification when a member whom you have shortlisted or expressed interest in:
                              </span>
                            </label>
                            <div className="border-t-2">
                              <p className="flex items-center text-sm mt-6 gap-2"><FaDotCircle></FaDotCircle> Update his/her profile infomation</p>
                              <p className="flex items-center text-sm mt-2 gap-2"><FaDotCircle></FaDotCircle> Comes online</p>
                              <p className="flex items-center text-sm mt-2 gap-2"><FaDotCircle></FaDotCircle> Update photos</p>
                              
                              <p className="flex items-center text-sm mt-2 gap-2"><FaDotCircle></FaDotCircle> or upgrades to premium membership</p>
                              <div className="flex gap-2 mt-4">
                                <button className="btn btn-sm btn-warning">Save changes</button>
                                <button className="btn btn-sm btn-warning">Save</button>
                              </div>
                            </div>
                          </div>
                        </div>
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
  );
}
