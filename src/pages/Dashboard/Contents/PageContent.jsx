import React from "react";
import ProfileImageSlider from "../Sliders/ProfileImageSlider";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";

export default function PageContent() {
  return (
    <>
      <div className="mt-4">
        {/* Header section start here */}
        <div className="pt-2 border border-gray-200 hover:shadow-lg">
          <div>
            {/* Before profileimage slider */}
            <div className="px-2">
              <div className="flex sm:flex-wrap lg:justify-between sm:space-y-4 lg:space-y-0">
                <div>
                  <strong className="mr-2">BGD1883935</strong>
                  <span className="mr-2">|</span>
                  <span>
                    Profile created for <span>self</span>
                  </span>
                </div>
                <div>
                  <span className="mr-2">Marked as viwed</span>
                  <span className="mr-2">|</span>
                  <span>View simillar profiles</span>
                </div>
              </div>
            </div>

            <div className="sm:flex-wrap flex justify-between mt-4">
              {/* ProfileImage slider */}
              <div>
                <div className="border border-grey-50 mx-auto h-fit">
                  <ProfileImageSlider></ProfileImageSlider>
                </div>
              </div>
              <div>
                <div className="flex sm:flex-wrap sm:justify-center lg:justify-between border-b px-2">
                  <div className="sm:flex lg:grid justify-between items-center sm:mt-2">
                    <h3 className="font-bold">Jhon Henry</h3>
                    <div className="flex items-center sm:gap-2 lg:gap-3 mt-2 sm:ml-4 lg:ml-0">
                      <span>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                      </span>
                      <span className="text-sm">
                        Barguna, Barisal, Bangladesh
                      </span>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile */}
                  <div className="flex sm:gap-4 sm:mt-4 lg:gap-2 items-center">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Mail"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Request Phone No"
                    >
                      <a href="#" target="_blank">
                        <FaMobileAlt className="text-white"></FaMobileAlt>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div>
                      <a href="#" className="flex mr-2">
                        <div className="flex items-center">
                          <FaWatchmanMonitoring className="text-green-500"></FaWatchmanMonitoring>
                        </div>
                        <div className="grid text-xs ml-1">
                          <span>Last online</span> <span>1hrs ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* About person*/}
                <div className="grid grid-cols-3 border-b-2 border-dotted mb-2 mt-4 px-2 gap-4">
                  <div className="col-span-2">
                  <div className="overflow-x-auto">
                    <table className="table table-zebra text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr className="flex py-1">
                          <td className="py-0 pl-0 text-gray-400">Age, Height</td>
                          <td className="py-0 pl-0 text-gray-700">20 yrs, 5 ft 4 in / 162 cm</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="flex py-1">
                          <td className="py-0 pl-0 text-gray-400">Religion</td>
                          <td className="py-0 text-gray-700">Islam</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="flex py-1">
                          <td className="py-0 pl-0 text-gray-400">Sect</td>
                          <td className="py-0 text-gray-700">Sunni (Caste No Bar)</td>
                        </tr>
                        {/* row 4 */}
                        <tr className="flex py-1">
                          <td className="py-0 pl-0 text-gray-400">Education</td>
                          <td className="py-0 text-gray-700">Higher Secondary / Secondary</td>
                        </tr>
                        {/* row 5 */}
                        <tr className="flex py-1">
                          <td className="py-0 pl-0 text-gray-400">Occupation</td>
                          <td className="py-0 text-gray-700">Education</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
                  {/* Interested div */}
                  <div className="mr-2">
                    <div className="grid justify-start">
                      <strong className="md:mt-3">Interested in her?</strong>
                      <div className="mt-4 sm:flex-col">
                        <button className="btn btn-sm bg-orange-600 border border-orange-600 hover:bg-orange-500 text-white font-bold text-[1rem] md:ml-2 rounded-md">
                          Yes
                        </button>
                        <button className="btn btn-sm hover:bg-gray-100 text-gray-500 font-bold text-[1rem] border border-gray-400 sm:mt-2 md:mt-0 md:ml-2 lg:ml-2 rounded-md">
                          Skip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex text-sm pt-2 pb-4 px-2">
                  <span className="text-gray-400 mr-6">About her</span>
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.... <a className="text-blue-500 hover:underline" href={`/profiledetail/viewprofile`} target="_blank">View profile</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header secton end here */}
      </div>
    </>
  );
}
