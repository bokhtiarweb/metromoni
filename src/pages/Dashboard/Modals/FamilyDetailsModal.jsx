import React from "react";
import { FaPersonShelter } from "react-icons/fa6";

export default function FamilyDetailsModal() {
  // Handle opening and closing of the modal
  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close(); // Close the dialog programmatically
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello Programmer!`);
    closeModal();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Click here to add your Family Details
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white rounded-lg max-w-5xl">
          <h3 className="font-bold text-lg flex items-center border-b border-dotted border-gray-400">
            <FaPersonShelter className="mr-2" /> Add Family Members
          </h3>
          <form method="dialog">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <form>
            <div className="overflow-x-auto">
              <table className="table border-b border-gray-400 border-dotted">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Father's Occupation *</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Mother's Occupation *</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>No. of Brothers *</td>
                    <td>
                      <select
                        value={"Select"}
                        onChange={() => {}}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled defaultChecked="Select">
                          Select
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </td>
                    <td>Brother Married *</td>
                    <td>
                      <select
                        value={"Select"}
                        onChange={() => {}}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled defaultChecked="Select">
                          Select
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>No. of Sisters *</td>
                    <td>
                      <select value={`Select`}
                        onChange={() => {}} className="select select-bordered w-full max-w-xs">
                        <option disabled defaultChecked="Select">
                        Select
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </td>
                    <td>Sisters Married *</td>
                    <td>
                      <select value={`Select`}
                        onChange={() => {}} className="select select-bordered w-full max-w-xs">
                        <option disabled defaultChecked="Select">
                        Select
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-around py-4">
                <p>*MandatorySave</p>
                <button
                  onClick={handleFormSubmit}
                  className="bg-orange-600 text-white text-lg py-1 px-2 rounded-lg"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
