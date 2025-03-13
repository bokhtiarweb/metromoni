import React from "react";

export default function BranchLocatorModal({Id}) {
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
          <strong className="text-lg">Branch Locator</strong>
          <div className="mt-4">
            <strong>Bangladesh</strong>
            <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
            <p className="text-gray-700">consectetur adipisicing elit</p>
            <p className="text-gray-700">Nostrum, non. Nesciunt ratione</p>
            <p className="text-gray-700">cupiditate incidunt reiciendis</p>
            <p className="text-gray-700">soluta modi magnam repellat.</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
