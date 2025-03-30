import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaBook,
  FaArrowLeft,
  FaArrowRight,
  FaAngellist,
  FaCookie,
  FaMusic,
} from "react-icons/fa";
import "../../../index.css";
import { FaBowlFood, FaFootball } from "react-icons/fa6";
import PartnerPreference from "../Partners/PartnerPreference";
import ProfileImageSlider from "./ProfileImageSlider";
import FamilyDetailsModal from "../Modals/FamilyDetailsModal";

const images = [
  { id: 1, img: "https://swiperjs.com/demos/images/nature-1.jpg" },
  { id: 2, img: "https://swiperjs.com/demos/images/nature-2.jpg" },
  { id: 3, img: "https://swiperjs.com/demos/images/nature-3.jpg" },
  { id: 4, img: "https://swiperjs.com/demos/images/nature-4.jpg" },
];

export default function BigSlider() {
  const [slider, setSlider] = useState(0);

  // useEffect(() => {
  //   const clearTimer = setInterval(() => {
  //     setSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 1500);

  //   return () => clearInterval(clearTimer);
  // }, []);

  const prevButton = () => {
    setSlider((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextButton = () => {
    setSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {images.map((item, indx) => (
        <div key={item.id} className={`overflow-hidden h-auto w-full relative`}>
          {/* slider effect */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              indx === slider ? "block opacity-100" : "hidden opacity-0"
            } flex sm:flex-col`}
          >
            {/* Header section start here */}
            <div className="sm:flex-wrap md:flex">
              {/* ProfileImage slider */}
              <div className="border border-grey-50 h-fit">
                <ProfileImageSlider></ProfileImageSlider>
              </div>

              {/* ProfileImage slider right start */}
              <div className="pl-4">
                <div className="grid grid-cols-3 pt-4 items-center">
                  <div className="col-span-2">
                    <div className="flex">
                      <img
                        src="/heart.png"
                        alt=""
                        className="w-[60px] h-[60px]"
                      />
                      <div className="ml-4 flex items-center">
                        <p>
                          <strong className="">Jhon Henry (BGD1883935)</strong>
                          <span className="ml-1">
                            matches your partner preference
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Navigation Buttons */}
                  <div className="col-span-1">
                    <div className="flex gap-4 justify-center">
                      <FaArrowLeft
                        onClick={prevButton}
                        className="cursor-pointer"
                      ></FaArrowLeft>
                      <FaArrowRight
                        onClick={nextButton}
                        className="cursor-pointer"
                      ></FaArrowRight>
                    </div>
                  </div>{" "}
                </div>

                {/* Interested div */}
                <div className="grid grid-cols-3 md:mt-4 sm:mt-10 ">
                  <div className="col-span-2">
                    <div className="sm:grid md:flex items-center ml-2">
                      <strong className="md:mt-3">Interested in her?</strong>
                      <div className="mt-4">
                        <button className="px-2 py-[0.4rem] w-[5rem] bg-orange-600 border border-orange-600 hover:bg-orange-500 text-white font-bold text-[1rem] md:ml-2 rounded-md">
                          Yes
                        </button>
                        <button className="px-2 w-[5rem] py-[0.4rem] hover:bg-gray-100 text-gray-500 font-bold text-[1rem] border border-gray-400 ml-2 rounded-md">
                          Skip
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Timer */}
                  <div className="col-span-1">
                    <div className="grid justify-center items-center  md:m-4">
                      <p className="flex text-sm">
                        <span>Time left to contact</span>
                        <span className="w-4 h-4 rounded-full flex items-center justify-center border border-gray-300 mt-1 ml-1">
                          ?
                        </span>
                      </p>
                      <p>Lorem clock</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About person start*/}
              <div className="md:flex border-b-2 border-dotted sm:mt-6 sm:ml-3 md:mt-2 md:ml-3 mb-8 sm:w-full md:w-fit lg:mx-auto lg:-mt-24">
                {/* left div */}
                <div className="overflow-x-auto">
                  <table className="table table-zebra text-sm">
                    <tbody>
                      {/* row 1 */}
                      <tr className="border-0">
                        <td>Age, Height</td>
                        <td>20 yrs, 5 ft 4 in / 162 cm</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="border-0">
                        <td className="bg-gray-100">Education</td>
                        <td className="bg-gray-100">Higher Secondary / Secondary</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <td>Location</td>
                        <td>Bangladesh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* right div */}
                <div className="overflow-x-auto md:ml-10">
                  <table className="table table-zebra text-sm">
                    <tbody>
                      {/* row 1 */}
                      <tr className="border-0">
                        <td>Religion</td>
                        <td>Islam</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td className="bg-gray-100">Sect</td>
                        <td className="bg-gray-100">Sunni (Sect No Bar)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* About person end*/}
            </div>
            {/* Header secton end here */}

            <div className="grid grid-cols-5">
              {/* Left div start */}
              <div className="col-span-1 sm:hidden"></div>
              {/* Right div start */}
              <div className="sm:col-span-5 md:col-span-4">
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fugit adipisci soluta illo quibusdam sint
                          repellendus. Fugit adipisci soluta illo quibusdam sint
                          repellendus.
                        </p>
                        <FaQuoteRight className="text-gray-400"></FaQuoteRight>
                      </div>
                    </div>

                    {/* Besic Details */}
                    <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                      <h3 className="border-b text-lg mb-4 ml-10">
                        Basic Details
                      </h3>
                      <div className="absolute -m-5 ">
                        <FaBook className="text-4xl text-cyan-300"></FaBook>
                      </div>

                      <div className="grid grid-cols-2 border-b-2 border-dotted pb-2">
                        {/* Left basic details */}
                        <div className="overflow-x-auto ml-10">
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr className="border-0">
                                <td>Profile Created for</td>
                                <td>Self</td>
                              </tr>
                              {/* row 2 */}
                              <tr className="border-0">
                                <td className="bg-gray-100">Age</td>
                                <td className="bg-gray-100">18yrs</td>
                              </tr>
                              {/* row 3 */}
                              <tr className="border-0">
                                <td>Gender</td>
                                <td>Female</td>
                              </tr>
                              {/* row 4 */}
                              <tr className="border-0">
                                <td className="bg-gray-100">Mother Tongue</td>
                                <td className="bg-gray-100">Bengali</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Right basic details */}
                        <div className="overflow-x-auto ml-10">
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr className="border-0">
                                <td>Name</td>
                                <td>Jhon Henry</td>
                              </tr>
                              {/* row 2 */}
                              <tr className="border-0">
                                <td className="bg-gray-100">Height</td>
                                <td className="bg-gray-100">5 ft 3 in / 160 cm</td>
                              </tr>
                              {/* row 3 */}
                              <tr className="border-0">
                                <td>Marital Status</td>
                                <td>Unmarried</td>
                              </tr>
                              {/* row 4 */}
                              <tr className="border-0">
                                <td className="bg-gray-100">Physical Status</td>
                                <td className="bg-gray-100">Normal</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr className="flex justify-between border-b border-gray-200">
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
                              <tr className="border-b border-gray-200">
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
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr className="flex justify-between border-b border-gray-200">
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
                              <tr className="border-0">
                                <td>Education Detail</td>
                                <td>Nursing in Diploma</td>
                              </tr>
                              {/* row 2 */}
                              <tr>
                                <td className="bg-gray-100">Occupation</td>
                                <td className="bg-gray-100">Not Working</td>
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
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr className="flex justify-between border-0">
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
                              <tr className="border-0">
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
                      <h3 className="border-b text-lg mb-4 ml-10">
                        Family Details
                      </h3>
                      <div className="absolute -m-5 ">
                        <FaBook className="text-4xl text-cyan-300"></FaBook>
                      </div>

                      <div className="grid grid-cols-2">
                        {/* Left basic details */}
                        <div className="overflow-x-auto ml-10">
                          <table className="table text-sm bg-gray-100">
                            <tbody>
                              {/* row 1 */}
                              <tr className="flex justify-between  border-0">
                                <td>No. of Brother(s)</td>
                                <td>Not Specified</td>
                              </tr>
                              {/* row 2 */}
                              <tr className="flex justify-between border-0 bg-gray-100">
                                <td className="bg-gray-100">No. of Sister(s)</td>
                                <td className="bg-gray-100">Not Specified</td>
                              </tr>
                              {/* row 3 */}
                              <tr className="flex justify-between border-0">
                                <td>Ancestral/Family Origin</td>
                                <td>Not Specified</td>
                              </tr>
                              {/* row 4 */}
                              <tr className="flex justify-between border-0">
                                <td>No. of Brother(s)</td>
                                <td>Not Specified</td>
                              </tr>
                              {/* row 5 */}
                              <tr className="flex justify-between border-0">
                                <td>No. of Sister(s)</td>
                                <td>Not Specified</td>
                              </tr>
                              {/* row 6 */}
                              <tr className="flex justify-between border-0">
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
                            <p>
                              To view the member's Family Details, add yours.
                            </p>
                            <FamilyDetailsModal></FamilyDetailsModal>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About my Family */}
                    <div className="ml-10 mt-12 border-l-4 border-grey-700 relative">
                      <h3 className="border-b text-lg mb-4 ml-10">
                        About my Family
                      </h3>
                      <div className="ml-10 flex">
                        <FaQuoteLeft className="text-gray-400"></FaQuoteLeft>
                        <p className="text-sm mx-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fugit adipisci soluta illo quibusdam sint
                          repellendus. Fugit adipisci soluta illo quibusdam sint
                          repellendus.
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
                              <tr className="border-0">
                                <td>Eating Habits</td>
                                <td>Halal food always</td>
                              </tr>
                              <tr className="border-0">
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
                            className="collapse collapse-arrow bg-base-200 border border-gray-400"
                          >
                            <div className="collapse-title text-xl font-medium bg-gray-300">
                              <h3 className="text-lg ml-10">
                                Interest & Hobbies
                              </h3>
                            </div>
                            <div className="collapse-content bg-gray-100">
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
                                  <p className="mb-4 text-lg font-semibold">
                                    Food
                                  </p>
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
          </div>
          {/* slider effect end */}
        </div>
      ))}
    </div>
  );
}
