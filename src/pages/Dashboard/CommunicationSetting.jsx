import React, { useState } from "react";

export default function CommunicationSetting() {
  const [activeTab, setActiveTab] = useState("email");

  const handleTab = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <div className="mt-8">
      <div className="flex justify-around">
        <h2>
          Now you can controls updates you receive from us on SMS, Emails &
          Notifications
        </h2>
        <button className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white">
          Enable All
        </button>
      </div>

      <div className="max-w-5xl mx-auto flex gap-6 mt-6 border border-gray-300">
        <div className="w-1/4 p-2">
          <div className="flex flex-col space-y-1">
            <div className="collapse">
              <input
                type="checkbox"
                className="peer min-h-0"
                checked={activeTab === "email"}
                onChange={() =>
                  setActiveTab(activeTab === "email" ? null : "email")
                }
              />
              {["Email", "Chrome Notification", "SMS"].map((tab, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-lg my-1 ${
                    activeTab === tab.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                  onClick={() => handleTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          {activeTab === "email" && (
            <div className="p-4">
              <div className="border-b py-2">
                <h4 className="text-lg font-semibold">Activity</h4>
                <p className="text-gray-500">
                  If you turn this off, you won`t get any email about member
                  activity on your profile
                </p>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">More email alerts</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Interest Received</h2>
                    <p className="text-sm text-gray-400">
                      When other members send an interest to you
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get email instantly
                        </span>
                      </label>
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get one email daily for all interests received
                        </span>
                      </label>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Replay Received</h2>
                      <p className="text-sm text-gray-400">
                        When members replay to you personalised messages
                      </p>
                      <div className="space-y-1 mt-3">
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get email instantly
                          </span>
                        </label>
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get one email daily for all replies received
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b py-2 mt-4">
                <h4 className="text-lg font-semibold">Match Recomendations</h4>
                <p className="text-gray-500">
                  If you turn this off, you might miss out on our recommended
                  matches based on your preferrences
                </p>
              </div>

              <div className="mt-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">Other settings</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Premium</h2>
                    <p className="text-sm text-gray-400">
                      If you turn this off, you might miss out on offers &
                      promosion
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">Membership offers</span>
                      </label>
                      <span className="text-gray-500">
                        Package discount etc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button className="btn btn-sm">Cancel</button>
                <button className="btn btn-sm bg-orange-600">Save</button>
              </div>
            </div>
          )}
          {activeTab === "chrome notification" && (
            <div className="p-4">
              <div className="border-b py-2">
                <h4 className="text-lg font-semibold">Activity</h4>
                <p className="text-gray-500">
                  If you turn this off, you won`t get any email about member
                  activity on your profile
                </p>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">More email alerts</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Interest Received</h2>
                    <p className="text-sm text-gray-400">
                      When other members send an interest to you
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get email instantly
                        </span>
                      </label>
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get one email daily for all interests received
                        </span>
                      </label>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Replay Received</h2>
                      <p className="text-sm text-gray-400">
                        When members replay to you personalised messages
                      </p>
                      <div className="space-y-1 mt-3">
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get email instantly
                          </span>
                        </label>
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get one email daily for all replies received
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b py-2 mt-4">
                <h4 className="text-lg font-semibold">Match Recomendations</h4>
                <p className="text-gray-500">
                  If you turn this off, you might miss out on our recommended
                  matches based on your preferrences
                </p>
              </div>

              <div className="mt-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">Other settings</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Premium</h2>
                    <p className="text-sm text-gray-400">
                      If you turn this off, you might miss out on offers &
                      promosion
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">Membership offers</span>
                      </label>
                      <span className="text-gray-500">
                        Package discount etc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button className="btn btn-sm">Cancel</button>
                <button className="btn btn-sm bg-orange-600">Save</button>
              </div>
            </div>
          )}
          {activeTab === "sms" && (
            <div className="p-4">
              <div className="border-b py-2">
                <h4 className="text-lg font-semibold">Activity</h4>
                <p className="text-gray-500">
                  If you turn this off, you won`t get any email about member
                  activity on your profile
                </p>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">More email alerts</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Interest Received</h2>
                    <p className="text-sm text-gray-400">
                      When other members send an interest to you
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get email instantly
                        </span>
                      </label>
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">
                          Get one email daily for all interests received
                        </span>
                      </label>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Replay Received</h2>
                      <p className="text-sm text-gray-400">
                        When members replay to you personalised messages
                      </p>
                      <div className="space-y-1 mt-3">
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get email instantly
                          </span>
                        </label>
                        <label className="w-fit cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                            defaultChecked
                          />
                          <span className="text-gray-500">
                            Get one email daily for all replies received
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b py-2 mt-4">
                <h4 className="text-lg font-semibold">Match Recomendations</h4>
                <p className="text-gray-500">
                  If you turn this off, you might miss out on our recommended
                  matches based on your preferrences
                </p>
              </div>

              <div className="mt-4">
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when members request details about your
                    profile
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Requrest</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Profile Views</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>
                <div>
                  <label className="w-fit cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span>Interest acceptance</span>
                  </label>
                  <span className="label-text">
                    Receive an email when member who match your preferrences
                    shortlist you.
                  </span>
                </div>

                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="collapse-title min-h-0">
                    <p className="text-blue-500">Other settings</p>
                  </div>
                  <div className="collapse-content">
                    <h2 className="text-xl font-semibold">Premium</h2>
                    <p className="text-sm text-gray-400">
                      If you turn this off, you might miss out on offers &
                      promosion
                    </p>
                    <div className="space-y-1 mt-3">
                      <label className="w-fit cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="text-gray-500">Membership offers</span>
                      </label>
                      <span className="text-gray-500">
                        Package discount etc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button className="btn btn-sm">Cancel</button>
                <button className="btn btn-sm bg-orange-600">Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
