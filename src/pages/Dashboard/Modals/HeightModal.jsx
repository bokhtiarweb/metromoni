import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

export default function HeightModal({ showSpecificModal }) {
  return (
    <div className="absolute left-[102%] top-[22%] z-50">
      <div className="bg-white p-6 shadow-lg md:w-[520px] sm:w-[300px] relative border border-green-600">
        {/* Arrow Icon */}
        <IoMdArrowDropleft className="text-6xl absolute -left-[38px] text-gray-400 textarea-bordered border-green-600" />

        {/* Close Button */}
        <span
          onClick={showSpecificModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
        >
          ✕
        </span>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-6">Height</h2>
        <form>
          <table className="table border-b border-gray-400 border-dotted">
            <tbody>
              {/* row 3 */}
              <tr className="sm:grid">
                <td>
                  <select
                    value={"4ft 4in to 5ft 4in (3679)"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="4ft 4in to 5ft 4in (3679)">
                      4ft 4in to 5ft 4in (3679)
                    </option>
                    <option>4ft 4in to 5ft 4in (3679)</option>
                    <option>4ft 4in to 5ft 4in (3679)</option>
                  </select>
                </td>
                <td>
                  <select
                    value={"4ft 4in to 5ft 4in (3679)"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="4ft 4in to 5ft 4in (3679)">
                    4ft 4in to 5ft 4in (3679)
                    </option>
                    <option>4ft 4in to 5ft 4in (3679)</option>
                    <option>4ft 4in to 5ft 4in (3679)</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="btn btn-sm btn-secondary mt-4 mr-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
