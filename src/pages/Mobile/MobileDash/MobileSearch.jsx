import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function MobileSearch() {
  const [searchId, setSearchId] = useState("");

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 min-h-screen max-w-md mx-auto">
      {/* Search by ID */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Search by ID</label>
        <div className="flex items-center border rounded-lg px-2 py-1 mt-1">
          <input
            type="text"
            placeholder="BGD"
            className="bg-white w-full outline-none p-2"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <FaSearch className="text-gray-500" />
        </div>
      </div>

      {/* OR Divider */}
      <div className="flex items-center justify-center my-2">
        <span className="text-xs bg-gray-100 px-4 py-1 rounded-full">OR</span>
      </div>

      {/* Keyword Search */}
      <div className="mb-4">
        <label className="text-sm font-semibold flex justify-between">
          Keyword Search{" "}
          <span className="text-blue-500 cursor-pointer">EDIT</span>
        </label>
        <p className="text-xs text-gray-500">
          18 yrs - 21 yrs . 4ft 4in - 5ft 4in . Marital Status: Unmarried. Don't
          show: Already Viewed, Already Contacted, Shortlisted, Ignored.
        </p>
        <div className="flex items-center border rounded-lg px-2 py-1 mt-2">
          <input
            type="text"
            placeholder="Eg: Dhaka, Doctor, Bengali"
            className="bg-white w-full outline-none p-2"
          />
          <button className="text-white bg-green-500 px-3 py-1 rounded-lg">
            GO
          </button>
        </div>
      </div>

      {/* OR Divider */}
      <div className="flex items-center justify-center my-2">
        <span className="text-xs bg-gray-100 px-4 py-1 rounded-full">OR</span>
      </div>

      {/* Regular Search */}
      <div className="mb-4">
        <label className="text-sm font-semibold">Regular Search</label>
        <p className="bg-white text-xs text-gray-500">
          Use filters to fine-tune your partner search.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-2 text-sm">
        <Filter label="Age" value="18 yrs - 21 yrs">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>18 yrs - 21 yrs</option>
            <option>18 yrs - 25 yrs</option>
            <option>18 yrs - 230 yrs</option>
            <option>18 yrs - 32 yrs</option>
          </select>
        </Filter>
        <Filter label="Height" value="4ft 4in - 5ft 4in">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>4ft 4in - 5ft 4in</option>
            <option>4ft 6in - 5ft 4in</option>
            <option>5ft 1in - 5ft 4in</option>
            <option>5ft 2in - 5ft 4in</option>
          </select>
        </Filter>
        <Filter label="Marital Status" value="Unmarried">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>Unmarried</option>
            <option>Widow/Widower</option>
            <option>Devorced</option>
            <option>Separated</option>
            <option>Married</option>
          </select>
        </Filter>
        <Filter label="Religion" value="Any">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>Any</option>
            <option>Islam</option>
            <option>Buddhism</option>
            <option>Chrisianity</option>
            <option>Hinduism</option>
          </select>
        </Filter>
        <Filter label="Sect" value="Any">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>Any</option>
            <option>Ahmadiyya</option>
            <option>Hanafi</option>
            <option>Shia</option>
            <option>Sunni</option>
          </select>
        </Filter>
        <Filter label="Mother Tongue" value="Bengali">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>Any</option>
            <option>Hindi</option>
            <option>Urdu</option>
            <option>English</option>
            <option>Arabic</option>
          </select>
        </Filter>
        <Filter label="Country" value="Any">
          <select defaultValue="Pick a color" className="select bg-white">
            <option disabled={true}>Any</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
            <option>Pakistan</option>
          </select>
        </Filter>
        <Filter label="Education" value="Bachelors, Diploma, Secondary">
          <div>
            <input
              id="drawer-education"
              type="checkbox"
              className="drawer-toggle bg-white"
            />
            <div className="drawer-content mx-auto">
              {/* Page content here */}
              <label
                htmlFor="drawer-education"
                className="btn btn-sm btn-primary drawer-button"
              >
                <FaArrowRight />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="drawer-education"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className="p-4 flex justify-end">
                  <label
                    htmlFor="drawer-education"
                    className="btn btn-primary drawer-button"
                    onClick={closeDrawer}
                  >
                    <IoMdClose />
                  </label>
                </div>
                {/* Sidebar Content */}
                <div className="menu w-full h-fit mt-4 z-50">
                  <label
                    htmlFor="drawer-education"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="space-y-2">
                    <label className="fieldset-label flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      Any
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Ph.D
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Masters
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Bachelors
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Civil Service
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Diploma
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Filter>
        <Filter label="Occupation" value="Any">
          <div>
            <input
              id="drawer-occupaton"
              type="checkbox"
              className="drawer-toggle bg-white"
            />
            <div className="drawer-content mx-auto">
              {/* Page content here */}
              <label
                htmlFor="drawer-occupaton"
                className="bg-white btn btn-sm btn-primary drawer-button"
              >
                <FaArrowRight />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="drawer-occupaton"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className="p-4 flex justify-end">
                  <label
                    htmlFor="drawer-occupaton"
                    className="btn btn-primary drawer-button"
                    onClick={closeDrawer}
                  >
                    <IoMdClose />
                  </label>
                </div>
                {/* Sidebar Content */}
                <div className="menu w-full h-fit mt-4 z-50">
                  <label
                    htmlFor="drawer-occupaton"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="space-y-2">
                    <label className="fieldset-label flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      Any
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Officer
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Supervisor
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Manager
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Executive
                    </label>
                    <label className="fieldset-label flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      Secretary
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Filter>
        <Filter label="Annual Income" value="Any">
          <select defaultValue="Pick a color" className="bg-white select">
            <option disabled={true}>Any</option>
            <option>Less than $25 K</option>
            <option>$25 K</option>
            <option>$30 K</option>
            <option>$35 K</option>
          </select>
        </Filter>
      </div>

      {/* Show Profiles */}
      <div className="mt-4">
        <label className="text-sm font-semibold">Show Profiles</label>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="text-sm">With Photo</span>
        </div>
      </div>

      {/* Don't Show Profiles */}
      <div className="mt-4">
        <label className="text-sm font-semibold">Don't Show Profiles</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Checkbox label="Already Viewed" />
          <Checkbox label="Already Contacted" />
          <Checkbox label="Shortlisted" />
          <Checkbox label="Ignored" />
        </div>
      </div>

      {/* Order By */}
      <div className="mt-4">
        <label className="text-sm font-semibold">Order By</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Radio label="Relevance" defaultChecked />
          <Radio label="Recently Active" />
          <Radio label="Oldest Profiles First" />
          <Radio label="Newest Profiles First" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-6">
        <button className="btn btn-sm text-[10px] btn-outline">SAVE SEARCH</button>
        <button className="btn btn-sm text-[10px] btn-outline">MY SAVED SEARCH</button>
        <button className="btn btn-sm text-[10px] btn-success">SEARCH NOW</button>
      </div>
    </div>
  );
}

// Reusable Filter Component
function Filter({ label, value, children }) {
  return (
    <div className="flex justify-between items-center border-b pb-1">
      <div className="flex items-center gap-2">
        <span>{label}</span>
        <span className="text-gray-500 text-xs">{value}</span>
      </div>
      {children}
    </div>
  );
}

// Reusable Checkbox Component
function Checkbox({ label }) {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="checkbox checkbox-sm" />
      <span className="text-sm">{label}</span>
    </label>
  );
}

// Reusable Radio Button Component
function Radio({ label, defaultChecked }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="order"
        className="radio radio-sm"
        defaultChecked={defaultChecked}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
