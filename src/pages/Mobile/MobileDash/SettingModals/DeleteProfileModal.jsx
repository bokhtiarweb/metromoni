import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function DeleteProfileModal({ Id }) {
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
          <strong className="text-lg">Delete Profil</strong>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="sm:hidden max-w-xs mx-auto p-4">
                <div>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Warning Message */}
                    <div className="mt-4">
                      <p className="text-[12px] text-red-600 p-2 bg-yellow-100 border border-red-700">
                        Note: Once you delete your profile, it cannot be
                        restored.
                      </p>
                      <p className="text-[14px] mt-4">
                        Please choose a reason for profile deletion
                      </p>
                    </div>
                    {/* Tabs */}
                    <div>
                      <Tabs>
                        <TabList className="grid grid-cols-1 w-full space-y-2">
                          <Tab className="w-full text-center">Married</Tab>
                          <Tab className="w-full text-center">
                            Marriage Fixed
                          </Tab>
                          <Tab className="w-full text-center">
                            Other Reasons
                          </Tab>
                        </TabList>

                        {/* Married Tab */}
                        <TabPanel>
                          <div>
                            <h2 className="text-lg font-semibold">
                              Congratulations!
                            </h2>
                            <p>
                              We are happy that you found your life partner.
                            </p>
                            <div className="mt-4">
                              <p>Select the Source</p>
                              <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-1">
                                  <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs checkbox-accent"
                                  />
                                  <span className="label-text">
                                    Through BangladeshiMatrimony
                                  </span>
                                </label>
                                <label className="flex items-center gap-1">
                                  <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs checkbox-accent"
                                  />
                                  <span className="label-text">
                                    Through other Matrimonial site
                                  </span>
                                </label>
                                <label className="flex items-center gap-1">
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
                                    className="input input-bordered w-full"
                                  />
                                </label>
                                <label className="form-control mt-4">
                                  <span className="label-text">
                                    Source story
                                  </span>
                                  <textarea className="textarea textarea-bordered w-full"></textarea>
                                </label>
                              </div>
                            </div>
                          </div>
                        </TabPanel>

                        {/* Marriage Fixed Tab */}
                        <TabPanel>
                          <div>
                            <h2 className="text-lg font-semibold">
                              Congratulations!
                            </h2>
                            <p>
                              We are happy that you found your life partner.
                            </p>
                            <div className="mt-4">
                              <p>Select the Source</p>
                              <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-1">
                                  <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs checkbox-accent"
                                  />
                                  <span className="label-text">
                                    Through BangladeshiMatrimony
                                  </span>
                                </label>
                                <label className="flex items-center gap-1">
                                  <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs checkbox-accent"
                                  />
                                  <span className="label-text">
                                    Through other Matrimonial site
                                  </span>
                                </label>
                                <label className="flex items-center gap-1">
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
                                  <span className="label-text">Bride Name</span>
                                  <input
                                    type="text"
                                    className="input input-bordered w-full"
                                  />
                                </label>
                                <label className="form-control mt-4">
                                  <span className="label-text">
                                    Engagement date
                                  </span>
                                  <input
                                    type="date"
                                    className="input input-bordered w-full"
                                  />
                                </label>
                                <label className="form-control mt-4">
                                  <span className="label-text">
                                    Source story
                                  </span>
                                  <textarea className="textarea textarea-bordered w-full"></textarea>
                                </label>
                                <label className="form-control mt-4">
                                  <span className="label-text">Address</span>
                                  <textarea className="textarea textarea-bordered w-full"></textarea>
                                </label>
                                <label className="form-control mt-4">
                                  <span className="label-text">
                                    Attach Photo
                                  </span>
                                  <input
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </TabPanel>

                        {/* Other Reasons Tab */}
                        <TabPanel>
                          <div className="mt-4 flex flex-col gap-2">
                            <label className="flex items-center gap-1">
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs checkbox-accent"
                              />
                              <span className="label-text">
                                Through BangladeshiMatrimony
                              </span>
                            </label>
                            <label className="flex items-center gap-1">
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs checkbox-accent"
                              />
                              <span className="label-text">
                                Through other Matrimonial site
                              </span>
                            </label>
                            <label className="flex items-center gap-1">
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
                    {/* Save Button */}
                    <label className="form-control mt-4">
                      <button className="btn btn-warning w-full">Save</button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
