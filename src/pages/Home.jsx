import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

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
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat w-full bg-fixed`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid items-center h-[100vh]">
        <div className="max-w-screen-lg mx-auto bg-black opacity-80 p-8">
          <h2 className="text-white font-bold text-3xl">
            No.1 Official Matrimony Service Exclusively For Bangladeshis
          </h2>
          <h3 className="text-white text-xl mt-2">
            Find Bangladeshi to marry from all spheres of life, including NRB
            members!
          </h3>
        </div>
      </div>

      {/* Bangladeshi Matrimony */}
      <div className="bg-white py-12">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-center text-3xl">Bangladeshi Matrimony</h2>
          <div className="flex mt-12 gap-6">
            <div className="text-center">
              <img src={trustedImg} alt="" className="mx-auto" />
              <p>
                10+ years of service in helping Bangladeshis cherish the meaning
                of Happy Marriage
              </p>
            </div>
            <div>
              <img src={genuinImg} alt="" className="mx-auto" />
              <p>Lakhs of genuine profiles with 100% verified phone numbers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search  */}
      <div className="bg-[#fef6f6] py-12">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl text-center">
            Begin Your Search for an Ideal Match
          </h2>
          <div className="mt-6">
            <div className="sm:flex-wrap flex justify-center gap-4">
              {/* Brides or groom */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">I'm looking for</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Bride
                    </option>
                    <option>Groom</option>
                  </select>
                </label>
              </div>
              {/* Age from to */}
              <div className="flex gap-4">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Age</span>
                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>
                        18
                      </option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Age</span>
                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>
                        21
                      </option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* Mother tongue */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Mother Tongue</span>
                  </div>
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
              {/* Cast */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Cast</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Sect
                    </option>
                    <option>Sunni</option>
                    <option>Shia</option>
                    <option>Ahamadiyya</option>
                    <option>Hanafi</option>
                  </select>
                </label>
              </div>
              {/* Search */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Search</span>
                </div>
                <button className="btn btn-outline btn-primary">Search</button>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-white py-12">
        <h2 className="text-3xl text-center">Bangladeshi Brides & Grooom</h2>
        <div className="max-w-screen-lg mx-auto mt-12">
          <div className="col-span-2 relative">
            <div className="md:w-[90%] mx-auto">
              {/* Custom Navigation outside Swiper */}
              <button className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1 md:-z-0"></button>
              <button className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1 md:-z-0"></button>

              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                modules={[Navigation]}
                className="mySwiper top_swipper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="sm:w-[6rem] sm:h-[6rem] md:w-[6rem] md:h-[6rem] lg:w-[9rem] lg:h-[9rem]">
                      <img
                        src={image.image}
                        alt={`Slide ${index + 1}`}
                        className="w-[100%] h-[100%] rounded-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl text-center">Be a Prospective Match</h2>
            <Link to={`/register`}>
              <button className="btn btn-sm btn-success text-white mt-4">
                Register Free
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Matrimony App */}
      <div className="bg-white py-12">
        <div className="max-w-screen-lg mx-auto flex justify-around">
          <div className="grid items-center">
            <div className="space-y-4">
              <h2 className="text-3xl">Bangladeshi Matrimony App</h2>
              <div>
                <p>Over 1 lakh+ installs</p>
                <p>Always stay up to date with faster & easier matchmaking</p>
                <p>Get 24/7 support and world class user experience</p>
              </div>
              <img src={playStoreImg} alt="" />
            </div>
          </div>
          <div>
            <img src={appImg} alt="" />
          </div>
        </div>
      </div>

      {/* Bangladesh No.1 Matrimony slider */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold text-blue-700">
          Bangladeshi Matrimony the No.1 choice for finding your life partner
        </h2>

        <div className="max-w-4xl mx-auto mt-8 testimonial_slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            className="rounded-lg shadow-md"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 flex flex-col md:flex-row rounded-lg shadow-lg">
                  {/* Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-48 h-48 rounded-lg object-cover"
                  />

                  {/* Text Content */}
                  <div className="ml-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 mt-2">{testimonial.story}</p>
                    <a href="#" className="text-blue-500 font-semibold mt-2">
                      Read more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Register */}
        <div className="text-center mt-10">
          <p className="text-lg">Now it's your turn to be happily married</p>
          <Link to={`/register`}>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Register Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
