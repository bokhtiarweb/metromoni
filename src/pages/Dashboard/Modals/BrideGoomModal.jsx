import React from "react";
import { FaPersonShelter } from "react-icons/fa6";

export default function BrideGoomModal() {
  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-warning"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Show modal for login
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white rounded-lg max-w-xl">
          <div className="flex justify-between border-b border-dotted border-gray-400">
            <h3 className="font-bold text-lg flex items-center text-red-700">
              Register Free! <br />
              Search from 1000s of Matching Groom
            </h3>
            <span className="text-sm">
              Already a member{" "}
              <a href="#" className="text-blue-500">
                Login
              </a>
            </span>
          </div>
          <form method="dialog" className="flex">
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
            <div className="space-y-2">
              {/* Create profile by */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Profile created by</div>
                <div className="md:w-[50%]">
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
                </div>
              </div>
              {/* Name field */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Name</div>
                <div className="md:w-[50%]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              {/* Gender field */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Gender</div>
                <div className="md:w-[50%] flex items-center gap-4">
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-accent"
                      />
                      <span className="label-text">Male</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-accent"
                      />
                      <span className="label-text">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* Date of birth */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Date of birth</div>
                <div className="md:w-[50%]">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <div className="w-full">
                        <select className="select select-bordered select-xs">
                          <option disabled selected>
                            DD
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select className="select select-bordered select-xs">
                          <option disabled selected>
                            MM
                          </option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select className="select select-bordered select-xs">
                          <option disabled selected>
                            YYYY
                          </option>
                          <option>2007</option>
                          <option>2008</option>
                          <option>2009</option>
                          <option>2010</option>
                          <option>2011</option>
                          <option>2012</option>
                          <option>2013</option>
                          <option>2014</option>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Marital status */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Marital status</div>
                <div className="md:w-[50%]">
                  <select
                    value={"Select"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="Select">
                      Select
                    </option>
                    <option>Widow/Widower</option>
                    <option>Devorced</option>
                    <option>Seperated</option>
                    <option>Married</option>
                  </select>
                </div>
              </div>
              {/* Religion status */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Religion</div>
                <div className="md:w-[50%]">
                  <select
                    value={"Select"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="Select">
                      Select
                    </option>
                    <option>Islam</option>
                    <option>Hinduism</option>
                    <option>Christianity</option>
                    <option>Buddhism</option>
                  </select>
                </div>
              </div>
              {/* Sect */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Sect</div>
                <div className="md:w-[50%]">
                  <select
                    value={"Select"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="Select">
                      Select
                    </option>
                    <option>Sunni</option>
                    <option>Shia</option>
                    <option>Hanafi</option>
                    <option>Ahamaddya</option>
                  </select>
                </div>
              </div>
              {/* Mother Tounge */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Mother Tounge</div>
                <div className="md:w-[50%]">
                  <select
                    value={"Select"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="Select">
                      Select
                    </option>
                    <option>Bangali</option>
                    <option>English</option>
                    <option>Urdu</option>
                    <option>Arbi</option>
                  </select>
                </div>
              </div>
              {/* Country Living */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Country Living</div>
                <div className="md:w-[50%]">
                  <select
                    value={"Select"}
                    onChange={() => {}}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled defaultChecked="Select">
                      Select
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>US</option>
                  </select>
                </div>
              </div>
              {/* Mobile Number */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Mobile No</div>
                <div className="md:w-[50%]">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="w-full">
                        <select className="select select-bordered select-xs">
                          <option disabled selected>
                            DD
                          </option>
                          <option>880 (BD)</option>
                          <option>+91 (India)</option>
                          <option>+1 (US)</option>
                          <option>+61 (Australia)</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <input
                          type="phone"
                          placeholder="Your Name"
                          className="input input-bordered input-sm w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Name field */}
              <div className="flex justify-between w-full">
                <div className="md:w-[50%]">Password</div>
                <div className="md:w-[50%]">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              {/* Submit field */}
              <div className="flex justify-between items-center">
                <div className="w-[50%]">
                  <p>
                    By Clicking register now, you are agree to our{" "}
                    <a className="text-blue-500" href="#">Term & Condition</a> and <a className="text-blue-500" href="#">Privacy Policy</a>
                  </p>
                </div>
                <div>
                    <button type="submit" className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600">Register Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
