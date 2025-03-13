import React from "react";
const blockedImg = "/cat.jpg";

export default function BlockedProfileModal({ Id }) {
  return (
    <dialog id={Id} className="modal sm:hidden">
      <div className="modal-box h-screen max-w-xs p-4">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div>
              <img src={blockedImg} alt="" className="w-20 h-20 rounded-full" />
            </div>
            <div className="grid">
              <strong>William Jhon henry</strong>
              <span>BGD173438t</span>
              <button className="btn btn-sm btn-warning">Cancel</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={blockedImg} alt="" className="w-20 h-20 rounded-full" />
            </div>
            <div className="grid">
              <strong>William Jhon henry</strong>
              <span>BGD173438t</span>
              <button className="btn btn-sm btn-warning">Cancel</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={blockedImg} alt="" className="w-20 h-20 rounded-full" />
            </div>
            <div className="grid">
              <strong>William Jhon henry</strong>
              <span>BGD173438t</span>
              <button className="btn btn-sm btn-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
