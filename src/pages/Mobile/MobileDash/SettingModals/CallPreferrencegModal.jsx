import React from "react";

export default function CallPreferrencegModal({ Id }) {
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
          <strong className="text-lg">Call Preferrence</strong>
          <div className="mt-4">
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
                  <button className="btn btn-sm btn-warning">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
