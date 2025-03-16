import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const bg = "/people.jpg";
const trustedImg = "/trustedhome_icon.png";
const genuinImg = "/genuinehome_icon.png";
const appImg = "/new-mobile-screen-bangladeshi.png";
const playStoreImg = "/home-google-play-newicon.png";

const images = [
  {
    id: 1,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/11/02/BGD996971_iuf189_TS_2.jpg",
  },
  {
    id: 2,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/12/27/18/BGD969153_qBQ587_TS_2.jpg",
  },
  {
    id: 3,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/09/11/BGD994792_HYn27_TS_6.jpg",
  },
  {
    id: 4,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/12/26/05/BGD967674_LwN054_TS_1.jpg",
  },
  {
    id: 5,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/06/09/BGD978823_Uym356_TS_1.jpg",
  },
  {
    id: 7,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/11/09/17/BGD918643_zKe81_TS_7.jpg",
  },
  {
    id: 8,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/06/00/BGD978396_xpQ351_TS_1.jpg",
  },
  {
    id: 9,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/10/22/17/BGD898718_DQI498_TS_2.jpg",
  },
  {
    id: 10,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/05/18/BGD978111_dTJ157_TS_1.jpg",
  },
  {
    id: 11,
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/11/09/17/BGD918643_zKe81_TS_7.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    image:
      "https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/AtaurRahmanMintuFarhanaIslam.jpg",
    title:
      "Ataur Rahman Mintu & Farhana Islam: Their Journey on BangladeshiMatrimony",
    story:
      "Ataur Rahman Mintu joined BangladeshiMatrimony in search of a life partner and found success in just 10-15 days. As a gold member...",
  },
  {
    id: 2,
    image:
      "https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/MayeshaKhatunMayeshaKhatun.jpg",
    title:
      "Mst Mayesha Khatun & Sumon Ahmed: A Match Made on BangladeshiMatrimony",
    story:
      "Hasan found his perfect match, Ayesha, through BangladeshiMatrimony. Their journey was filled with love and trust...",
  },
  {
    id: 3,
    image:
      "https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/AkibLily.jpg",
    title: "Akib and Lily: Love Found on Bangladeshi Matrimony",
    story:
      "When Akib Abraham decided to settle down, he didn’t need to look any further; he joined Bangladeshi Matrimony to find...",
  },
  {
    id: 4,
    image:
      "https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/AshaAbdur.jpg",
    title:
      "When Bangladeshi Matrimony brought Asha Sarker & Abdur Rashid together",
    story:
      "Seeing a Bangladeshi Matrimony ad by chance on Facebook led Abdur Rashid to find his soulmate for life. Within 15 days of signing up, he...",
  },

  {
    id: 5,
    image:
      "https://imgs.bangladeshimatrimony.com/cbsimages/hp_new/MdRedwanulIslamMinarSultana.jpg",
    title:
      "Redwanul & Minar's swift journey from Bangladeshi Matrimony to forever!",
    story:
      "Md Redwanul Islam faced challenges finding a life partner until a friend suggested he register on Bangladeshi Matrimony. It was...",
  },
];

export default function Home() {
  const modalRef = useRef(null);
  const [showForgotPass, setShowForgotPass] = useState(true);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      setShowForgotPass(true);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen px-4 sm:px-8">
        <div className="max-w-screen-lg bg-black bg-opacity-80 p-6 sm:p-8 text-center sm:text-left">
          <h2 className="text-white font-bold text-2xl sm:text-3xl">
            No.1 Official Matrimony Service Exclusively For Bangladeshis
          </h2>
          <h3 className="text-white text-lg sm:text-xl mt-2">
            Find Bangladeshi to marry from all spheres of life, including NRB
            members!
          </h3>
          <div className="block sm:hidden mt-4">
            {/* Open the modal */}
            <button
              className="btn btn-sm btn-success text-semibold text-white mr-2"
              onClick={openModal}
            >
              Log In
            </button>
            <Link to={`/register`}>
              <button className="btn btn-sm btn-success text-semibold text-white">
                Register
              </button>
            </Link>

            {/* Modal */}
            <dialog
              ref={modalRef}
              className="modal"
              onClick={(e) => e.target === modalRef.current && closeModal()}
            >
              <div className="modal-box">
                {showForgotPass ? (
                  <>
                    <h3 className="font-bold text-lg">Log In</h3>
                    <div className="mt-4">
                      <form>
                        <input
                          type="text"
                          placeholder="Matrimony ID / Email"
                          className="input input-bordered w-full"
                        />
                        <div className="mt-4 relative">
                          <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                          />
                          <span className="absolute right-3 top-3">
                            <FaEye className="text-xl" />
                          </span>
                        </div>

                        {/* Checkbox & Forgot Password */}
                        <div className="mt-4 flex justify-between">
                          <label className="cursor-pointer flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-success mr-2"
                            />
                            <span className="label-text">
                              Keep me logged in
                            </span>
                          </label>
                          <a
                            onClick={() => setShowForgotPass(false)}
                            className="text-blue-500 cursor-pointer"
                          >
                            Forgot password?
                          </a>
                        </div>

                        <div className="mt-4 text-end">
                          <button
                            type="button"
                            className="btn btn-outline btn-sm btn-accent mr-4"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button className="btn btn-sm btn-success text-semibold text-white">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-bold text-lg">Forgot Password?</h3>
                    <div className="mt-4">
                      <form>
                        <input
                          type="text"
                          placeholder="Matrimony ID / Email"
                          className="input input-bordered w-full"
                        />
                        <p className="mt-4">
                          Please enter your Matrimony ID/Email ID/Mobile Number.
                          We'll send a mail & SMS with a link to reset your
                          password. This link will be valid only for 2 hours.
                        </p>
                        <div className="mt-4 text-end">
                          <button
                            type="button"
                            className="btn btn-outline btn-sm btn-accent mr-4"
                            onClick={() => setShowForgotPass(true)}
                          >
                            Cancel
                          </button>
                          <button className="btn btn-sm btn-success text-semibold text-white">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </dialog>
          </div>
        </div>
      </div>

      {/* Bangladeshi Matrimony Section */}
      <div className="bg-white py-12 px-4 sm:px-0">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl">Bangladeshi Matrimony</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div>
              <img src={trustedImg} alt="" className="mx-auto w-32 sm:w-auto" />
              <p className="mt-2">
                10+ years of service in helping Bangladeshis cherish the meaning
                of Happy Marriage
              </p>
            </div>
            <div>
              <img src={genuinImg} alt="" className="mx-auto w-32 sm:w-auto" />
              <p className="mt-2">
                Lakhs of genuine profiles with 100% verified phone numbers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-[#fef6f6] py-12 px-4 sm:px-0">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl">
            Begin Your Search for an Ideal Match
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* Form Controls */}
            <div className="w-full sm:w-auto">
              <label className="form-control">
                <span className="label-text">I'm looking for</span>
                <select className="select select-bordered">
                  <option disabled selected>
                    Bride
                  </option>
                  <option>Groom</option>
                </select>
              </label>
            </div>
            <div className="w-full flex justify-center sm:w-auto sm:flex-row gap-4">
              <label className="form-control">
                <span className="label-text">Age</span>
                <select className="select select-bordered">
                  <option disabled selected>
                    18
                  </option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                </select>
              </label>
              <label className="form-control">
                <span className="label-text">To</span>
                <select className="select select-bordered">
                  <option disabled selected>
                    21
                  </option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                </select>
              </label>
            </div>
            <div className="w-full sm:w-auto">
              <label className="form-control">
                <span className="label-text">Mother Tongue</span>
                <select className="select select-bordered">
                  <option disabled selected>
                    Bengali
                  </option>
                  <option>Urdu</option>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </label>
            </div>
            <button className="btn btn-primary w-full sm:w-auto">Search</button>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-white py-12 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl text-center">
          Bangladeshi Brides & Grooms
        </h2>
        <div className="max-w-screen-lg mx-auto mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                  <img
                    src={image.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Matrimony App Section */}
      <div className="bg-white py-12 px-4 sm:px-0">
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl">Bangladeshi Matrimony App</h2>
            <p className="mt-2">Over 1 lakh+ installs</p>
            <p>Always stay up to date with faster & easier matchmaking</p>
            <p>Get 24/7 support and world-class user experience</p>
            <img
              src={playStoreImg}
              alt=""
              className="mx-auto sm:mx-0 mt-4 w-32 sm:w-auto"
            />
          </div>
          <img src={appImg} alt="" className="w-48 sm:w-auto" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-100 px-4 sm:px-0">
        <h2 className="text-center text-2xl font-semibold text-blue-700">
          Bangladeshi Matrimony - The No.1 choice for finding your life partner
        </h2>
        <div className="max-w-4xl mx-auto mt-8">
          <Swiper slidesPerView={1} navigation loop modules={[Navigation]}>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 flex flex-col items-center sm:flex-row rounded-lg shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 sm:w-48 rounded-lg"
                  />
                  <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.story}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
