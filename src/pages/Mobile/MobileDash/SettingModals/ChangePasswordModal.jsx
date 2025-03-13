import React from "react";

export default function ChangePasswordModal({ Id }) {
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
          <strong className="text-lg">Change Password</strong>
          <div className="grid grid-cols-1 gap-4 mt-4">
            {/* Old password */}
            <label className="form-control">
              <span className="label-text">Old Password *</span>
              <input type="password" className="input input-bordered" />
            </label>
            {/* New password */}
            <label className="form-control">
              <span className="label-text">New Password *</span>
              <input type="password" className="input input-bordered" />
            </label>
            {/* Confirm password */}
            <label className="form-control">
              <span className="label-text">Confirm Password *</span>
              <input type="password" className="input input-bordered" />
            </label>
            {/* Save button */}
            <label className="form-control">
              <button className="btn btn-warning w-full">Save</button>
            </label>
          </div>
        </div>
      </div>
    </dialog>
  );
}
