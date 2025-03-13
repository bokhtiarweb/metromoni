import React from "react";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export default function FeedbackModal({ Id }) {
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
          <strong className="text-lg">Help Topics</strong>
          <div className="mt-4">
            <div className="collapse collapse-plus border border-base-300 bg-base-200">
              <input type="checkbox" className="peer min-h-0" defaultChecked />
              <div className="min-h-0 collapse-title p-2 font-medium">
                Matches are not based on my partner preference
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div className="mt-4">
                    <textarea
                      placeholder="Please share more details..."
                      className="textarea textarea-xs w-full"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 bg-base-200 mt-2">
              <input type="checkbox" className="peer min-h-0" />
              <div className="min-h-0 collapse-title p-2 font-medium">
                Not enouth matches available
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div>
                    <p>
                      Set / Edit your Partner preference to get more matches
                    </p>
                    <button className="btn btn-sm btn-outline btn-accent mt-2">
                      Edit partner preference
                    </button>
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="Please share more details..."
                      className="textarea textarea-xs w-full"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 bg-base-200 mt-2">
              <input type="checkbox" className="peer min-h-0" />
              <div className="min-h-0 collapse-title p-2 font-medium">
                My membership is not upgraded to my account
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div>
                    <p>
                      Set / Edit your Partner preference to get more matches
                    </p>
                    <button className="btn btn-sm btn-outline btn-accent mt-2">
                      Edit partner preference
                    </button>
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="Please share more details..."
                      className="textarea textarea-xs w-full"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 bg-base-200 mt-2">
              <input type="checkbox" className="peer min-h-0" />
              <div className="min-h-0 collapse-title p-2 font-medium">
                I have enabled strick filters but, its not working
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div className="mt-4">
                    <textarea
                      placeholder="Please share more details..."
                      className="textarea textarea-xs w-full"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 bg-base-200 mt-2">
              <input type="checkbox" className="peer min-h-0" />
              <div className="min-h-0 collapse-title p-2 font-medium">
                I Want to report a user
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Enter Matrimony ID to reported"
                      className="input w-full"
                    />
                    <select
                      defaultValue="Abuse Category"
                      className="select select-xs mt-2"
                    >
                      <option disabled={true}>Abuse Category</option>
                      <option>Abuse Category</option>
                      <option>Member`s profile is obscenc / gruad</option>
                      <option>Member`s` details are inappropriate</option>
                      <option>Member`s` has duplicate profile</option>
                      <option>Member`s` photo is not real</option>
                      <option>Wrong phone number / Not reachable</option>
                      <option>Member`s` marriage is fixed</option>
                      <option>Member`s` is engaged</option>
                    </select>
                    <textarea
                      placeholder="Comment"
                      className="textarea textarea-xs w-full mt-2"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Report
                    </button>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg">Contact US</h2>
                    <p className="text-[12px]">
                      To report fauad contact our froud Assistance team
                      immediately. Your infomation will be kept confidentail.
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2">
                      <span>
                        <FaPhoneAlt></FaPhoneAlt>
                      </span>
                      <span className="text-blue-700">632929398</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <FaMailBulk></FaMailBulk>
                      </span>
                      <span className="text-blue-700">reportabuse@matrimony.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300 bg-base-200 mt-2">
              <input type="checkbox" className="peer min-h-0" />
              <div className="min-h-0 collapse-title p-2 font-medium">
                I have some other issue
              </div>
              <div className="collapse-content">
                <div className="grid gap-3">
                  <div className="mt-4">
                    <textarea
                      placeholder="Please share more details..."
                      className="textarea textarea-xs w-full"
                    ></textarea>
                    <button className="btn btn-sm btn-secondary mt-2">
                      Submit
                    </button>
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
