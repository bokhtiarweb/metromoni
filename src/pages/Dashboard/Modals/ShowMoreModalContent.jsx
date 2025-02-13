import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";

export default function ShowMoreModalContent({
  activeModal,
  showSpecificModal,
}) {
  const [showMore, setShowMore] = useState(false);

  const items = [
    "Religion",
    "Mother tongue",
    "Sect",
    "Education Category",
    "Employed in",
    "Occupation",
    "Annual income",
    "Country",
    "Resident status",
    "Citizenship",
    "Physical Status",
    "Body type",
    "Eating habits",
    "Smoking habits",
    "Drinking habits",
    "Profile created by",
  ];

  return (
    <div>
      {/* More Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="btn btn-sm bg-gray-200 text-black px-3 py-1 rounded-md text-sm text-center float-right"
      >
        {showMore ? "Show Less ▲" : "More ▼"}
      </button>

      {/* Filters List */}
      <div
        className={`transition-all duration-300 ${
          showMore ? "block" : "hidden"
        }`}
      >
        <ul className="mt-2 space-y-2 text-sm">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-2 rounded-md bg-white relative"
            >
              <div
                key={index}
                className="collapse collapse-plus border border-base-300 bg-base-200"
              >
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  {item}
                </div>
                <input type="checkbox" className="peer min-h-0" />
                <div className="collapse-content">
                  <div className="grid gap-3">
                    <div className="flex items-center text-sm">
                      <FaAngleRight></FaAngleRight>{" "}
                      <a className="text-gray-500 hover:underline" href="#">
                        {item}
                      </a>
                    </div>
                    <div className="group flex justify-end">
                      <button
                        onClick={() => showSpecificModal(index)}
                        className="text-blue-600 text-xs underline"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MODAL */}
              {activeModal === index && (
                <div className="absolute left-[100%] top-[4%] z-50">
                  <div className="bg-white p-6 shadow-lg w-auto relative border border-green-600">
                    {/* Arrow Icon */}
                    <IoMdArrowDropleft className="text-6xl absolute -left-[38px] text-gray-400" />

                    {/* Close Button */}
                    <span
                      onClick={() => showSpecificModal(null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
                    >
                      ✕
                    </span>

                    {/* Modal Content */}
                    <h2 className="text-xl font-semibold mb-6">{item}</h2>
                    <form>
                      <div className="w-[360px] space-y-2 text-gray-500">
                        <label className="space-x-2 flex items-center">
                          <input
                            type="checkbox"
                            name="active"
                            className="checkbox checkbox-xs"
                          />
                          <span>Option 1</span>
                        </label>
                        <label className="space-x-2 flex items-center">
                          <input
                            type="checkbox"
                            name="active"
                            className="checkbox checkbox-xs"
                          />
                          <span>Option 2</span>
                        </label>
                        <label className="space-x-2 flex items-center">
                          <input
                            type="checkbox"
                            name="active"
                            className="checkbox checkbox-xs"
                          />
                          <span>Option 3</span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button className="btn btn-sm btn-secondary mt-4 mr-4">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>

        {/* Show Less Button */}
        <button
          onClick={() => setShowMore(false)}
          className="btn btn-sm bg-gray-200 text-black px-3 py-1 rounded-md text-sm mt-3 float-right"
        >
          Show Less ▲
        </button>
      </div>
    </div>
  );
}
