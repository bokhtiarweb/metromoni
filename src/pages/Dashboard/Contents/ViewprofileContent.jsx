import React, { useState } from "react";
import {
  FaAngellist,
  FaAngleDown,
  FaArrowDown,
  FaArrowUp,
  FaBook,
  FaCheck,
  FaCommentMedical,
  FaComments,
  FaCookie,
  FaGraduationCap,
  FaLock,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMusic,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { FaBowlFood, FaFootball, FaPerson } from "react-icons/fa6";
import PartnerPreference from "../Partners/PartnerPreference";
import { BsPersonFillCheck } from "react-icons/bs";
import FamilyDetailsModal from "../Modals/FamilyDetailsModal";
import ShortListModal from "../Modals/ShortListModal";
import ProfileImageSlider from "../Sliders/ProfileImageSlider";

const photo = "/cat.jpg";
export default function ViewprofileContent() {
  const [isShortlist, setIsShortlist] = useState(false);

  return (
    <div className="sm:col-span-5 md:col-span-6 border-r border-gray-300">
      {/* Before profileimage slider */}
      <div className="px-2">
        <div className="flex justify-between">
          <div>
            <strong className="mr-2">BGD1883935</strong>
            <span className="mr-2">|</span>
            <span>
              Profile created for <span>self</span>
            </span>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <FaArrowUp className="text-3xl"></FaArrowUp>
            </a>
            <div>
              <a href="#">
                <img src={photo} alt="" className="w-8 h-8" />
              </a>
              <p>Prev</p>
            </div>
            <a href="#">
              <FaArrowDown className="text-3xl"></FaArrowDown>
            </a>
            <div>
              <a href="#">
                <img src={photo} alt="" className="w-8 h-8" />
              </a>
              <p>next</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="md:flex">
        {/* ProfileImage slider */}
        <div className="border border-grey-50 h-fit">
          <ProfileImageSlider></ProfileImageSlider>
        </div>

        {/* ProfileImage slider right start */}
        <div className="pl-4 sm:mt-0 md:mt-4 w-full">
          <div className="flex justify-between">
            <div>
              <strong className="text-xl text-gray-600">Jhon Henry</strong>
              <div className="flex-col space-y-2 mt-2">
                <p className="flex items-center gap-2">
                  <FaPerson className="text-green-500 text-xl"></FaPerson>
                  <span className="text-gray-400 text-sm">
                    20 yrs, 5 ft 4 in / 162 cm
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <FaGraduationCap className="text-green-500 text-xl"></FaGraduationCap>
                  <span className="text-gray-400 text-sm">
                    Higher Secondary / Secondary
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-500 text-xl"></FaMapMarkerAlt>
                  <span className="text-gray-400 text-sm">
                    Dhaka [Dacca], Dhaka, Bangladesh
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaComments className="text-green-500 text-xl"></FaComments>
                  <span className="text-gray-400 text-sm">Online chat now</span>
                </p>
              </div>
            </div>
            <div className="grid md:mr-4 mt-4">
              <a
                href="#"
                target="_blank"
                className="tooltip"
                data-tip="View Mobile No / Send SMS"
              >
                <FaMobileAlt className="text-2xl text-blue-400"></FaMobileAlt>
              </a>
              <a href="#" className="tooltip" data-tip="Shortlist her">
                <BsPersonFillCheck
                  onClick={() => setIsShortlist(true)}
                  className="text-2xl text-blue-400"
                ></BsPersonFillCheck>
                {isShortlist && (
                  <ShortListModal
                    setIsShortlist={setIsShortlist}
                  ></ShortListModal>
                )}
              </a>
              <a
                href="#"
                target="_blank"
                className="tooltip"
                data-tip="Communication history"
              >
                <FaCommentMedical className="text-2xl text-blue-400"></FaCommentMedical>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Maching Your Preference:</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm"></FaCheck>
                <span className="text-sm text-blue-400">Income</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm"></FaCheck>
                <span className="text-sm text-blue-400">Location</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm"></FaCheck>
                <span className="text-sm text-blue-400">Occupation</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm"></FaCheck>
                <span className="text-sm text-blue-400">Education</span>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <h2>Do you like her ?</h2>
            <div className="flex items-center ml-2 space-x-2">
              <button className="btn btn-sm bg-warning">Yes</button>
              <button className="btn btn-sm bg-gray-300">Skip</button>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm m-1 bg-gray-300"
                >
                  <FaAngleDown></FaAngleDown>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-slate-500"
                >
                  <li>
                    <a>Shortlist</a>
                  </li>
                  <li>
                    <a>Send Mail</a>
                  </li>
                  <li>
                    <a>Block</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div className="">
          {/* Person info start */}
          <div className="pb-10">
            {/* Personal info */}
            <div className="mt-8">
              <div>
                <strong className="mr-10 text-lg text-gray-500">
                  Personal Information
                </strong>
                <strong className="text-lg text-gray-400 cursor-pointer">
                  Partner Preference ↓
                </strong>
              </div>

              {/* quotation */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">
                  A Few Lines About Jhon Henry
                </h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>
                <div className="ml-10 flex">
                  <FaQuoteLeft className="text-gray-400"></FaQuoteLeft>
                  <p className="text-sm mx-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit adipisci soluta illo quibusdam sint repellendus. Fugit
                    adipisci soluta illo quibusdam sint repellendus.
                  </p>
                  <FaQuoteRight className="text-gray-400"></FaQuoteRight>
                </div>
              </div>

              {/* Besic Details */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">Basic Details</h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-dotted pb-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Profile Created for</td>
                          <td>Self</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>Age</td>
                          <td>18yrs</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>Gender</td>
                          <td>Female</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <td>Mother Tongue</td>
                          <td>Bengali</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Right basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Name</td>
                          <td>Jhon Henry</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>Height</td>
                          <td>5 ft 3 in / 160 cm</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>Marital Status</td>
                          <td>Unmarried</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <td>Physical Status</td>
                          <td>Normal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">Contact Details</h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            <div className="flex">
                              <div className="relative inline-block">
                                <span className="text-gray-800">01910213334</span>
                                <div className="absolute inset-0 bg-gray-800 opacity-95"></div>
                              </div>
                              <FaLock className="ml-2 text-green-500"></FaLock>
                            </div>
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>Chat status</td>
                          <td>online</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="overflow-x-auto ml-10">
                  <table className="table text-sm">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <div className="flex items-center gap-2 mt-2">
                          <FaLock className="text-2xl"></FaLock>
                          <p>Upgrade memebership to unlock contact details</p>
                          <button className="btn btn-sm bg-orange-500">
                            Upgrade now
                          </button>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Religious Information */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">
                  Religious Information
                </h3>

                <div className="grid grid-cols-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-between">
                          <td>Religion</td>
                          <td>Islam</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Right basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Sect</td>
                          <td>Sunni (Sect No Bar)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">
                  Professional Information
                </h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-between">
                          <td>Educationi</td>
                          <td>Higher Secondary / Secondary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Right basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Education Detail</td>
                          <td>Nursing in Diploma</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>Occupation</td>
                          <td>Not Working</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">Location</h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-between">
                          <td>Country</td>
                          <td>Bangladesh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Right basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Citizenship</td>
                          <td>Bangladesha</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Family Details */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">Family Details</h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-2">
                  {/* Left basic details */}
                  <div className="overflow-x-auto ml-10">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-between">
                          <td>No. of Brother(s)</td>
                          <td>Not Specified</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="flex justify-between">
                          <td>No. of Sister(s)</td>
                          <td>Not Specified</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="flex justify-between">
                          <td>Ancestral/Family Origin</td>
                          <td>Not Specified</td>
                        </tr>
                        {/* row 4 */}
                        <tr className="flex justify-between">
                          <td>No. of Brother(s)</td>
                          <td>Not Specified</td>
                        </tr>
                        {/* row 5 */}
                        <tr className="flex justify-between">
                          <td>No. of Sister(s)</td>
                          <td>Not Specified</td>
                        </tr>
                        {/* row 6 */}
                        <tr className="flex justify-between">
                          <td>Fathers Occupation</td>
                          <td>Business</td>
                        </tr>
                        {/* row 6 */}
                        <tr className="flex justify-between">
                          <td>Mothers Occupation</td>
                          <td>Housewife</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Right basic details */}
                  <div className="grid items-center ml-10">
                    <div>
                      <p>To view the member's Family Details, add yours.</p>
                      <FamilyDetailsModal></FamilyDetailsModal>
                    </div>
                  </div>
                </div>
              </div>

              {/* About my Family */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">About my Family</h3>
                <div className="ml-10 flex">
                  <FaQuoteLeft className="text-gray-400"></FaQuoteLeft>
                  <p className="text-sm mx-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit adipisci soluta illo quibusdam sint repellendus. Fugit
                    adipisci soluta illo quibusdam sint repellendus.
                  </p>
                  <FaQuoteRight className="text-gray-400"></FaQuoteRight>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                <h3 className="border-b text-lg mb-4 ml-10">Lifestyle</h3>
                <div className="absolute -m-5 ">
                  <FaBook className="text-4xl text-cyan-300"></FaBook>
                </div>

                <div className="grid grid-cols-3">
                  {/* Top */}
                  <div className="overflow-x-auto ml-10 col-span-2">
                    <table className="table text-sm">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Eating Habits</td>
                          <td>Halal food always</td>
                        </tr>
                        <tr>
                          <td>Drinking Habits</td>
                          <td>Non-drinker</td>
                        </tr>
                        <tr>
                          <td>Smoking Habits</td>
                          <td>No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Bottom */}
                  <div className="ml-10 mt-6 col-span-3">
                    <div
                      tabIndex={0}
                      className="collapse collapse-arrow border-gray-300 bg-gray-200 border"
                    >
                      <div className="collapse-title text-xl font-medium">
                        <h3 className="text-lg ml-10">Interest & Hobbies</h3>
                      </div>
                      <div className="collapse-content">
                        <div className="grid grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="border-b">
                              <FaAngellist className="text-3xl mx-auto"></FaAngellist>
                            </div>
                            <p className="mb-4 text-lg font-semibold">
                              Interests
                            </p>
                            <p>Not Specified</p>
                          </div>
                          <div className="text-center">
                            <div className="border-b">
                              <FaCookie className="text-3xl mx-auto"></FaCookie>
                            </div>
                            <p className="mb-4 text-lg font-semibold">
                              Hobbies
                            </p>
                            <p>Cooking</p>
                          </div>
                          <div className="text-center">
                            <div className="border-b">
                              <FaMusic className="text-3xl mx-auto"></FaMusic>
                            </div>
                            <p className="mb-4 text-lg font-semibold">Music</p>
                            <p>Ghazals</p>
                          </div>
                          <div className="text-center">
                            <div className="border-b">
                              <FaFootball className="text-3xl mx-auto"></FaFootball>
                            </div>
                            <p className="mb-4 text-lg font-semibold">Sports</p>
                            <p>Carrom</p>
                          </div>
                          <div className="text-center">
                            <div className="border-b">
                              <FaBowlFood className="text-3xl mx-auto"></FaBowlFood>
                            </div>
                            <p className="mb-4 text-lg font-semibold">Food</p>
                            <p>Bengali</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Person info end */}

          {/* Partner info start */}
          <PartnerPreference></PartnerPreference>
          {/* Partner info end */}
        </div>
      </div>
      {/* Next profile */}
      <div className="py-4">
        <h3 className=" bg-slate-300">Next profile</h3>
      </div>
    </div>
  );
}
