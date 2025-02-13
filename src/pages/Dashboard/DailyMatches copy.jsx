import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { FaBook, FaQuestion, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import FamilyDetailsModal from "./FamilyDetailsModal";
import TopSlider from "./Sliders/TopSlider";
import BigSlider from "./Sliders/BigSlider";
const bg1 = "/strp-tum-u15-bg.png";
const bg2 = "/daily7-logo.png";
const cat = "/cat.jpg";

export default function DailyMatches() {
  return (
    <div>
      <Link to={`/`} target="_blank" className="mt-4 w-full block">
        <div
          className="bg-contain bg-no-repeat min-h-[4rem] w-full relative flex items-center justify-center px-4 sm:px-6"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="absolute h-auto lg:md-[2%] lg:mt-0 md:ml-[4%] md:-mt-4 sm:-mt-[4%] sm:ml-[4%]">
            <p className="text-base sm:text-lg md:text-[14px] lg:text-lg sm:text-[11px]">
              Avail the <strong>Luxury of time</strong> to find your perfect
              partner.
            </p>
          </div>
        </div>
      </Link>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-2 items-center md:mt-6">
        <div className="col-span-1 sm:w-[50%] sm:mb-8 md:mb-0 md:w-full mx-auto">
          <div
            className={`bg-no-repeat sm:h-[35px]`}
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>
        </div>
        {/* Slider */}
        <TopSlider></TopSlider>
      </div>

      <div className="bg-gray-50 border border-grey-500 p-4 mt-8">
        {/* Big Slider */}
        <div className="p-2">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper bigSwipper"
          >
            <SwiperSlide>
              <div>
                <div className="flex">
                  <div className="p-6 border border-grey-50">
                    <img src={cat} alt="" className="w-[170px] h-[150px]" />
                  </div>
                  <div className="w-full border border-blue-500">
                    <div className="flex items-center">
                      <div>
                        <div className="flex">
                          <img
                            src="/heart.png"
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                          <div className="ml-4">
                            <p>
                              <strong className="">
                                Jhon Henry (BGD1883935)
                              </strong>
                              <span className="ml-1">
                                matches your partner preference
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interested div */}
                    <div className="mt-6 flex items-center shadow-md pb-6">
                      <strong className="mr-4">Interested in her?</strong>
                      <div className="">
                        <button className="px-2 py-[0.4rem] w-[5rem] bg-orange-600 border border-orange-600 hover:bg-orange-500 text-white font-bold text-[1rem] ml-2 rounded-md">
                          Yes
                        </button>
                        <button className="px-2 w-[5rem] py-[0.4rem] hover:bg-gray-100 text-gray-500 font-bold text-[1rem] border border-gray-400 ml-2 rounded-md">
                          Skip
                        </button>
                      </div>
                      {/* Timer */}
                      <div className="absolute right-6">
                        <p className="flex text-sm">
                          Time left to contact{" "}
                          <FaQuestion className="mt-1"></FaQuestion>{" "}
                        </p>
                        <span>clock Lorem, ipsum</span>
                      </div>
                    </div>

                    <div className="mt-10 pb-10">
                      {/* About person*/}
                      <div className="grid grid-cols-2 border-b-2 border-dotted">
                        {/* left div */}
                        <div className="overflow-x-auto">
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr>
                                <td>Age, Height</td>
                                <td>20 yrs, 5 ft 4 in / 162 cm</td>
                              </tr>
                              {/* row 2 */}
                              <tr>
                                <td>Education</td>
                                <td>Higher Secondary / Secondary</td>
                              </tr>
                              {/* row 3 */}
                              <tr>
                                <td>Location</td>
                                <td>Bangladesh</td>
                              </tr>
                              {/* row 4 */}
                              <tr>
                                <td>Mother Tongue</td>
                                <td>Bengali</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* right div */}
                        <div className="overflow-x-auto ml-10">
                          <table className="table table-zebra text-sm">
                            <tbody>
                              {/* row 1 */}
                              <tr>
                                <td>Religion</td>
                                <td>Islam</td>
                              </tr>
                              {/* row 2 */}
                              <tr>
                                <td>Sect</td>
                                <td>Sunni (Sect No Bar)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

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
                              repellendus. Fugit adipisci soluta illo quibusdam
                              sint repellendus.
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
                          <h3 className="border-b text-lg mb-4 ml-10">
                            Religious Information
                          </h3>

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
                          <h3 className="border-b text-lg mb-4 ml-10">
                            Location
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
                          <h3 className="border-b text-lg mb-4 ml-10">
                            Family Details
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
                                <p>
                                  To view the member's Family Details, add
                                  yours.
                                </p>
                                <FamilyDetailsModal></FamilyDetailsModal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
          <BigSlider></BigSlider>
        </div>
      </div>
    </div>
  );
}
