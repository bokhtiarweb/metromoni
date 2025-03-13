import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PrivacyModal({ Id }) {
  const [activeCollapse, setActiveCollapse] = useState("privacy");
  const [privacyInfo, setPrivacyInfo] = useState("photo");

  const handlePrivacySetting = (tab) => {
    setPrivacyInfo(tab.toLowerCase());
  };

  return (
    <dialog id={Id} className="modal sm:hidden">
      <div className="modal-box h-screen max-w-xs p-4">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div>
          <strong className="text-lg">Privacy Setting</strong>
          <div className="mt-4">
            <div className="flex flex-col space-y-2">
              {["Photo", "Phone", "Profile Views"].map((tab) => (
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
              ))}
            </div>
            <div className="sm:hidden max-w-xs mx-auto p-4">
              {privacyInfo === "photo" && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Photo View Setting
                  </h3>
                  <p className="text-sm">
                    You can have complete privacy by protecting your photo from
                    members and making it visible only to members you prefer.
                  </p>
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
                          Make my photo visible only to members I prefer
                        </span>
                      </label>
                    </label>
                    <div className="mt-4">
                      <button className="btn btn-sm btn-warning w-full">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {privacyInfo === "phone" && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Phone Number Setting
                  </h3>
                  <p className="text-sm">
                    Only premium members can view your phone number.
                  </p>
                  <div className="mt-6">
                    <label className="form-control">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-700 text-sm">
                          Show mobile number only to paid members
                        </span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">
                          Show mobile number only to whom I grant access
                        </span>
                      </label>
                    </label>
                    <div className="mt-6">
                      <button className="btn btn-sm btn-warning w-full">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {privacyInfo === "profile views" && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
                    Profile View Settings
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
                          Let other members know that you have viewed their
                          profile
                        </span>
                      </label>
                    </label>
                    <div className="mt-4">
                      <button className="btn btn-sm btn-warning w-full">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
