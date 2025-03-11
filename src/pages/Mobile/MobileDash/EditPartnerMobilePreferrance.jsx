import React from "react";

export default function EditPartnerMobilePreferrance() {
  return (
    <div className="mt-12">
      <h2 className="text-gray-400 text-2xl">Partner Preference</h2>

      <div className="mb-4">
        <label className="form-control">
          <span className="label-text">Few words about me</span>
          <textarea
            placeholder="Bio"
            className="textarea textarea-xs"
            value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus voluptatibus aperiam debitis consequatur`}
          ></textarea>
        </label>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Marital Status */}
          <label className="form-control">
            <span className="label-text">Marital Status</span>
            <div className="flex flex-wrap gap-4">
              {[
                "Unmarried",
                "Married",
                "Widow/Widower",
                "Divorced",
                "Separated",
              ].map((status) => (
                <label
                  key={status}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-accent"
                  />
                  <span className="label-text">{status}</span>
                </label>
              ))}
            </div>
          </label>

          {/* Age */}
          <label className="form-control">
            <span className="label-text">Age</span>
            <div className="flex flex-wrap gap-4">
              <select className="select select-bordered w-full">
                <option>18</option>
                <option>19</option>
                <option>20</option>
              </select>
              <div className="divider w-full">To</div>
              <select className="select select-bordered w-full">
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </select>
            </div>
          </label>

          {/* Height */}
          <label className="form-control">
            <span className="label-text">Height</span>
            <div className="flex flex-wrap gap-4">
              <select className="select select-bordered w-full">
                <option>121 cm</option>
                <option>124 cm</option>
              </select>
              <div className="divider w-full">To</div>
              <select className="select select-bordered w-full">
                <option>162 cm</option>
                <option>165 cm</option>
              </select>
            </div>
          </label>

          {/* Physically Status */}
          <label className="form-control">
            <span className="label-text">Physically Status*</span>
            <div className="flex flex-wrap gap-4">
              {["Doesn't Matter", "Normal", "Physically challenged"].map(
                (status) => (
                  <label
                    key={status}
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">{status}</span>
                  </label>
                )
              )}
            </div>
          </label>

          {/* Other Select Fields */}
          {[
            "Mother Tongue",
            "Religion",
            "Sect",
            "Education",
            "Occupation",
            "Citizenship",
            "Country living in",
            "Annual Income",
          ].map((field) => (
            <label key={field} className="form-control">
              <span className="label-text">{field} *</span>
              <select className="select select-bordered w-full">
                <option>Select {field}</option>
              </select>
            </label>
          ))}

          {/* Food Habit */}
          <label className="form-control">
            <span className="label-text">Food Habit</span>
            <div className="flex flex-wrap gap-4">
              {[
                "Vegetarian",
                "Non Vegetarian",
                "Halal always",
                "Halal when I can",
                "No Restrictions",
                "Doesn't matter",
              ].map((habit) => (
                <label
                  key={habit}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-accent"
                  />
                  <span className="label-text">{habit}</span>
                </label>
              ))}
            </div>
          </label>

          {/* Smoking & Drinking */}
          {["Smoking", "Drinking Habit"].map((field) => (
            <label key={field} className="form-control">
              <span className="label-text">{field}</span>
              <div className="flex flex-wrap gap-4">
                {["Yes", "No", "Doesn't matter"].map((option) => (
                  <label
                    key={option}
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">{option}</span>
                  </label>
                ))}
              </div>
            </label>
          ))}

          {/* About Me */}
          <label className="form-control">
            <span className="label-text">About Me</span>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-sm w-full"
            ></textarea>
          </label>

          {/* Submit Button */}
          <label className="form-control">
            <button className="btn btn-warning w-full">Save</button>
          </label>
        </div>
      </div>
    </div>
  );
}
