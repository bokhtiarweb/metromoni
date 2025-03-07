import React from "react";
import Banner from "./Shared/Banner";
import {
  FaAngellist,
  FaBook,
  FaCookie,
  FaGraduationCap,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaMusic,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import {
  FaMobileScreen,
  FaBowlFood,
  FaPerson,
  FaFootball,
  FaPencil,
} from "react-icons/fa6";
const prifileImg = "/cat.jpg";

export default function EditPartnerPreference() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[75%] mt-8 border border-black">
        <div className="text-sm text-gray-400">
          <span>BGD3553911</span>
          <span className="px-2">|</span>
          <span>Profile created for self</span>
        </div>
        <div className="grid grid-cols-3 mt-2">
          <div className="col-span-1 p-2 border-4 relative">
            <img src={prifileImg} alt="" className="mx-auto w-52 h-56" />
            <input
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs absolute bottom-0 left-0"
            />
          </div>
          {/* Personal info */}
          <div className="col-span-2 p-4">
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
              </div>
            </div>
            <div className="py-6 mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <FaMobileScreen className="text-green-500 text-xl"></FaMobileScreen>
                <span className="text-sm">Mobile No: 01237493291</span>
              </div>
              <button className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white">
                Edit My Profile
              </button>
            </div>
          </div>
        </div>

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
                      Fugit adipisci soluta illo quibusdam sint repellendus.
                      Fugit adipisci soluta illo quibusdam sint repellendus.
                    </p>
                    <FaQuoteRight className="text-gray-400"></FaQuoteRight>
                  </div>
                </div>

                {/* Besic Details */}
                <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Basic Details</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -m-5 ">
                    <FaBook className="text-4xl text-cyan-300"></FaBook>
                  </div>

                  <div className="grid grid-cols-2 border-b-2 border-dotted pb-2">
                    {/* Left basic details */}
                    <div className="overflow-x-auto ml-10">
                      <table className="table table-zebra text-sm">
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
                      <table className="table table-zebra text-sm">
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

                {/* Religious Information */}
                <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Religious Information</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    {/* Left basic details */}
                    <div className="overflow-x-auto ml-10">
                      <table className="table table-zebra text-sm">
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
                      <table className="table table-zebra text-sm">
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
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Professional Information</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -m-5 ">
                    <FaBook className="text-4xl text-cyan-300"></FaBook>
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Left basic details */}
                    <div className="overflow-x-auto ml-10">
                      <table className="table table-zebra text-sm">
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
                      <table className="table table-zebra text-sm">
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
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Location</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -m-5 ">
                    <FaBook className="text-4xl text-cyan-300"></FaBook>
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Left basic details */}
                    <div className="overflow-x-auto ml-10">
                      <table className="table table-zebra text-sm">
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
                      <table className="table table-zebra text-sm">
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
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Family Details</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -m-5 ">
                    <FaBook className="text-4xl text-cyan-300"></FaBook>
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Left basic details */}
                    <div className="overflow-x-auto ml-10">
                      <table className="table table-zebra text-sm">
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
                  </div>
                </div>

                {/* Lifestyle */}
                <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                  <div className="border-b mb-4 ml-10 flex justify-between">
                    <h3 className="text-lg">Lifestyle</h3>
                    <div className="">
                      <a
                        href="/profiledetail/editprofile"
                        className="flex items-center gap-2 mr-4"
                      >
                        <FaPencil></FaPencil>
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -m-5 ">
                    <FaBook className="text-4xl text-cyan-300"></FaBook>
                  </div>

                  <div className="grid grid-cols-3">
                    {/* Top */}
                    <div className="overflow-x-auto ml-10 col-span-2">
                      <table className="table table-zebra text-sm">
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
                        className="collapse collapse-arrow border-base-300 bg-base-200 border"
                      >
                        <div className="collapse-title text-xl font-medium">
                          <div className="border-b mb-4 ml-10 flex justify-between">
                            <h3 className="text-lg">Interest & Hobbies</h3>
                            <div className="">
                              <a
                                href="/profiledetail/editprofile"
                                className="flex items-center gap-2 mr-4"
                              >
                                <FaPencil className="text-lg"></FaPencil>
                                <span className="text-sm">Edit</span>
                              </a>
                            </div>
                          </div>
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
                              <p className="mb-4 text-lg font-semibold">
                                Music
                              </p>
                              <p>Ghazals</p>
                            </div>
                            <div className="text-center">
                              <div className="border-b">
                                <FaFootball className="text-3xl mx-auto"></FaFootball>
                              </div>
                              <p className="mb-4 text-lg font-semibold">
                                Sports
                              </p>
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
            <div>
              <h2 className="text-gray-400 text-2xl">Partner Preference</h2>
              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* marital status */}
                  <label className="form-control ml-4">
                    <span className="label-text">Marital Status</span>
                    <div className="flex-wrap gap-4">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Unmarried</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">Married</span>
                      </label>

                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Widow/Widower</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Divorced</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Separated</span>
                      </label>
                    </div>
                  </label>
                  {/* Age */}
                  <label className="form-control">
                    <span className="label-text">Age</span>
                    <div className="flex gap-4">
                      <select className="select select-bordered">
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                      </select>
                      <div className="divider">OR</div>
                      <select className="select select-bordered">
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                      </select>
                    </div>
                  </label>
                  {/* Height */}
                  <label className="form-control">
                    <span className="label-text">Height</span>
                    <div className="flex gap-4">
                      <select className="select select-bordered">
                        <option>121 cm</option>
                        <option>124 cm</option>
                        <option>127 cm</option>
                        <option>132</option>
                        <option>135 cm</option>
                      </select>
                      <div className="divider">To</div>
                      <select className="select select-bordered">
                        <option>162 cm</option>
                        <option>165 cm</option>
                        <option>170 cm</option>
                        <option>172 cm</option>
                        <option>175 cm</option>
                        <option>180 cm</option>
                      </select>
                    </div>
                  </label>
                  {/* Physically status */}
                  <label className="form-control">
                    <span className="label-text">Physically Status*</span>
                    <div className="flex gap-4">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Doesn`t Matter</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Normal</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">
                          Physically challenged
                        </span>
                      </label>
                    </div>
                  </label>
                  {/* Mother Tongue */}
                  <label className="form-control">
                    <span className="label-text">Mother Tongue *</span>
                    <select className="select select-bordered">
                      <option>Bangla</option>
                      <option>English</option>
                      <option>Urdu</option>
                      <option>Hindi</option>
                    </select>
                  </label>
                  {/* Religion */}
                  <label className="form-control">
                    <span className="label-text">Religion *</span>
                    <select className="select select-bordered">
                      <option>Islam</option>
                      <option>Hinduism</option>
                      <option>Christianity</option>
                      <option>Buddhism</option>
                    </select>
                  </label>
                  {/* Sect */}
                  <label className="form-control">
                    <span className="label-text">Sect *</span>
                    <select className="select select-bordered">
                      <option>Sunni</option>
                      <option>Shia</option>
                      <option>Ahamadiyya</option>
                      <option>Hanafi</option>
                    </select>
                  </label>
                  {/* Education */}
                  <label className="form-control">
                    <span className="label-text">Education</span>
                    <select className="select select-bordered">
                      <option>Bangla</option>
                      <option>English</option>
                      <option>Urdu</option>
                      <option>Hindi</option>
                    </select>
                  </label>
                  {/* Ocupation */}
                  <label className="form-control">
                    <span className="label-text">Occupaton</span>
                    <select className="select select-bordered">
                      <option>Manager</option>
                      <option>Supervisor</option>
                      <option>Officer</option>
                      <option>Executive</option>
                    </select>
                  </label>
                  {/* Citizenship */}
                  <label className="form-control">
                    <span className="label-text">Citizenship </span>
                    <select className="select select-bordered">
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>USA</option>
                    </select>
                  </label>
                  {/* Country living in */}
                  <label className="form-control">
                    <span className="label-text">Country living in </span>
                    <select className="select select-bordered">
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>USA</option>
                    </select>
                  </label>
                  {/* Food habit */}
                  <label className="form-control">
                    <span className="label-text">Food Habit</span>
                    <div className="flex-wrap gap-4">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Vegetarian</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Non Vegetarian</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Halal food always</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">
                          Halal food when I can
                        </span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">No Restrictions</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Doesn`t matter</span>
                      </label>
                    </div>
                  </label>
                  {/* Smoking */}
                  <label className="form-control">
                    <span className="label-text">Smoking</span>
                    <div className="flex gap-4">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Yes</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">No</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Doesn`t matter</span>
                      </label>
                    </div>
                  </label>
                  {/* Drinking Habit */}
                  <label className="form-control">
                    <span className="label-text">Drinking Habit</span>
                    <div className="flex-wrap gap-4">
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Non Drinker</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">
                          Light / Social Drinker
                        </span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Regular Drinker</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                        />
                        <span className="label-text">Doesn`t matter</span>
                      </label>
                    </div>
                  </label>
                  {/* Country living in */}
                  <label className="form-control">
                    <span className="label-text">Annual Income</span>
                    <select className="select select-bordered">
                      <option>Less than RS. 5000</option>
                      <option>RS. 50 thousand</option>
                      <option>RS. 1 Lakh</option>
                      <option>RS. 2 Lakh</option>
                      <option>RS. 3 Lakh</option>
                    </select>
                  </label>
                  {/* About Me */}
                  <label className="form-control">
                    <span className="label-text">About Me</span>
                    <textarea
                      placeholder="Bio"
                      className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                    ></textarea>
                  </label>
                  <label className="form-control">
                    <button className="btn btn-warning">Save</button>
                  </label>
                </div>
              </div>
            </div>
            {/* Partner info end */}
          </div>
        </div>
      </div>
    </div>
  );
}
