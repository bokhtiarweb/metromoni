import React from "react";
const cat = "/cat.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function PartnerPreference() {
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold">Partner Preference</h3>
      </div>

      <div className="flex items-center justify-between p-4 rounded-lg w-full">
        {/* Left: User Placeholder */}
        <div className="flex items-center">
          <div className="sm:w-16 sm:h-16 md:w-32 md:h-32 rounded-full overflow-hidden">
            <img
              src={cat}
              alt="Partner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Center: Match Score */}
        <div className="text-center">
          <span className="text-gray-700">
            <div className="divider divider-secondary">
              You match <span className="text-green-600 font-bold">9/10</span>{" "}
              of her Preferences
            </div>
          </span>
        </div>
        {/* Right: Partner Image */}
        <div className="sm:w-16 sm:h-16  md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-300">
          <img src={cat} alt="Partner" className="w-full h-full object-cover" />
        </div>
      </div>

      <div>
        <p className="text-gray-400">
          Your partner preferences match this member's basic details and her
          partner preferences match your basic details.
        </p>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Marital Status - Unmarried</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Age - 21 to 26 Yrs</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Height - 5 ft 8 in to 6 ft 2 in</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Mother Tongue - Bengali</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Physical Status - Normal</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Eating Habits - Halal food always</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Drinking Habits - Doesn't matter</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Smoking Habits - Doesn't matter</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Religion - Islam</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Sect - Sunni</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Education - Any</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Occupation - Any</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Citizenship - Any</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
              <tr>
                <td>Resident Status - Any</td>
                <td></td>
                <td>
                  <FaCheckCircle className="text-2xl text-success"></FaCheckCircle>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
