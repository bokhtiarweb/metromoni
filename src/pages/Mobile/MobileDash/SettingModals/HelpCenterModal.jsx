import React from "react";
import CallPreferrencegModal from "./CallPreferrencegModal";
import { FaEdit, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import FeedbackModal from "./FeedbackModal";
import BranchLocatorModal from "./BranchLocatorModal";

export default function HelpCenterModal({ Id }) {
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
          <strong className="text-lg">24/7 Help Center</strong>
          <div className="mt-2 space-y-2">
            <span className="flex items-center gap-2">
              <FaPhoneAlt></FaPhoneAlt>
              <span>Call us</span>
            </span>
            <span className="flex items-center gap-2">
              <FaEdit></FaEdit>
              <span>
                <span
                  onClick={() =>
                    document.getElementById("my_feedback_modal").showModal()
                  }
                >
                  Feedback
                </span>
                <FeedbackModal Id={`my_feedback_modal`}></FeedbackModal>
              </span>
              <CallPreferrencegModal
                Id={`my_call_modal`}
              ></CallPreferrencegModal>
            </span>
            <span className="flex items-center gap-2">
              <FaMailBulk></FaMailBulk>
              <span>E-mail us</span>
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <span>
                <span
                  onClick={() =>
                    document.getElementById("my_branch_modal").showModal()
                  }
                >
                  Branch Locator
                </span>
                <BranchLocatorModal Id={`my_branch_modal`}></BranchLocatorModal>
              </span>
              <CallPreferrencegModal
                Id={`my_call_modal`}
              ></CallPreferrencegModal>
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
}
