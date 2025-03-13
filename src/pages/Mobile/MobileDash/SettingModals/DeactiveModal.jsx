import React from "react";

export default function DeactiveModal({ Id }) {
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
          <strong className="text-lg">Deactive / Hide account</strong>
          <div className="mt-4">
            <p className="text-[13px]">
              Want to take a small break from matchmaking? Deactive your
              profile. You can view others profiles but can not contact them
              while other members can not view or contact you.
            </p>

            <div className="mt-8 text-center">
              <button className="btn btn-sm btn-secondary text-white">
                Deactive Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
