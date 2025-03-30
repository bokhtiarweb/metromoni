import React, { useRef } from "react";
import { FaArrowLeft, FaCheckCircle, FaLock, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const cat = "/cat.jpg"

const images = [
  "https://global.matrimonycdn.com/membersphoto/common/2021/01/11/02/BGD996971_iuf189_TS_2.jpg",
  "https://global.matrimonycdn.com/membersphoto/common/2020/12/27/18/BGD969153_qBQ587_TS_2.jpg",
  "https://global.matrimonycdn.com/membersphoto/common/2021/01/09/11/BGD994792_HYn27_TS_6.jpg",
];

export default function MobileViewProfile() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative w-full max-w-sm mx-auto overflow-hidden">
        <div className="py-2 flex items-center gap-2 text-[14px]">
          <FaArrowLeft></FaArrowLeft>
          <span>BGD452298</span>
        </div>
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {images.map((img, index) => (
            <div key={index} className="flex-none w-full h-[500px] snap-center">
              <div className="bg-black px-2 opacity-6 absolute left-0 bottom-0 right-0">
                <p className="text-white">Faizana Islam (BGD3557632)</p>
                <p className="text-white">
                  18yrs, 5 ft 2 in / 157 cm, Sunni, Unmarried, Dhaka
                </p>
                <div className="bg-white p-2 mt-2">
                  <button className="btn btn-sm bg-slate-400 text-white">
                    Chat now
                  </button>
                </div>
              </div>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={scrollLeft}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
      {/* Mobile view personal rofile content start */}
      <div className="mt-8 px-4 sm:px-0">
        {" "}
        {/* Padding for small screens */}
        <div>
          <strong className="mr-10 text-lg text-gray-500">
            Personal Information
          </strong>
        </div>
        {/* Quotation */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4">
            A Few Lines About Jhon Henry
          </h3>
          <div className="ml-4 flex flex-col">
            <FaQuoteLeft className="text-gray-400" />
            <p className="text-sm mx-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              adipisci soluta illo quibusdam sint repellendus.
            </p>
            <FaQuoteRight className="text-gray-400" />
          </div>
        </div>
        {/* Basic Details */}
        <div className="ml-0 mt-6 sm:mt-12 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4">Basic Details</h3>
          <div className="grid grid-cols-1 border-b-2 border-dotted pb-2">
            {/* Left basic details */}
            <div className="overflow-x-auto ml-4">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>18yrs</td>
                  </tr>
                  <tr>
                    <td>Body Type</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>5 ft 3 in / 160 cm</td>
                  </tr>
                  <tr>
                    <td>Languages Known</td>
                    <td>Bangli, English, Hindi</td>
                  </tr>
                  <tr>
                    <td>Marital Status</td>
                    <td>Unmarried</td>
                  </tr>
                  <tr>
                    <td>Mother Tongue</td>
                    <td>Bengali</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>Jhon Henry</td>
                  </tr>
                  <tr>
                    <td>Physical Status</td>
                    <td>Normal</td>
                  </tr>
                  <tr>
                    <td>Profile Created for</td>
                    <td>Self</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>600 Kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Contact Details */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Contact Number</td>
                    <td>
                      <div className="flex items-center">
                        <span className="text-gray-800">01910213334</span>
                        <FaLock className="ml-2 text-green-500" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Chat Status</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Send Mail</td>
                    <td>
                      <div className="flex items-center">
                        <span className="text-gray-800">Locked</span>
                        <FaLock className="ml-2 text-green-500" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="overflow-x-auto ml-4">
            <div className="text-center mt-2">
              <button className="btn btn-sm bg-orange-500">Upgrade now</button>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">Location</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>City</td>
                    <td>Dhaka [Dacca]</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>Bangladesh</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>Dhaka</td>
                  </tr>
                  <tr>
                    <td>Citizenship</td>
                    <td>Bangladesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Religionus Infomation */}
        <div className="ml-0 mt-6 sm:mt-12 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">
            Religionus Infomation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Religion</td>
                    <td>Islam</td>
                  </tr>
                  <tr>
                    <td>Sect</td>
                    <td>Sunni (Sect No Bar)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Religionus Infomation */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">
            Professional Infomation{" "}
            <a className="text-[14px] text-green-700" href="#">
              Request
            </a>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Education</td>
                    <td>Higher Secondary / Secondary</td>
                  </tr>
                  <tr>
                    <td>Education Detail</td>
                    <td>Not Specified</td>
                  </tr>
                  <tr>
                    <td>Empolyed In</td>
                    <td>Not Working</td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>Student</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Religionus Infomation */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">
            Family Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>NO.of Brothers</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Family Origin</td>
                    <td>Not Specified</td>
                  </tr>
                  <tr>
                    <td>Empolyed In</td>
                    <td>Not Working</td>
                  </tr>
                  <tr>
                    <td>Father`s Occupation</td>
                    <td>Job holder</td>
                  </tr>
                  <tr>
                    <td>Mother`s Occupation</td>
                    <td>Housewife</td>
                  </tr>
                  <tr>
                    <td>NO.of sibilings</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>NO.of Sisters</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Sisters Married</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Hobbies & Interestes */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">
            Hobbies & Interestes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="overflow-x-auto ml-4 sm:ml-10">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Hobbies</td>
                    <td>
                      <a className="text-[14px] text-green-600" href="#">
                        Request
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Interestes</td>
                    <td>
                      <a className="text-[14px] text-green-600" href="#">
                        Request
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Hobbies & Interestes */}
        <div className="ml-0 mt-6 border-l-4 border-gray-700 relative">
          <h3 className="border-b text-lg mb-4 ml-4 sm:ml-10">Habbits</h3>
          <div className="grid grid-cols-1">
            <div className="overflow-x-auto ml-4">
              <table className="table table-zebra text-sm w-full">
                <tbody>
                  <tr>
                    <td>Drinking</td>
                    <td>Non-drinker</td>
                  </tr>
                  <tr>
                    <td>Eating</td>
                    <td>Halal food always</td>
                  </tr>
                  <tr>
                    <td>Eating</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view personal profile content end */}

      {/* Mobile view partner profile content start */}
      <div className="mt-8 px-4 sm:px-0">
        <div>
          <h3 className="text-xl font-semibold">Partner Preference</h3>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg w-full">
          {/* Left: User Placeholder */}
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden">
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
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={cat}
              alt="Partner"
              className="w-full h-full object-cover"
            />
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
      {/* Mobile view partner profile content end */}
    </div>
  );
}
