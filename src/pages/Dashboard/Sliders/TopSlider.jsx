import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

export default function TopSlider() {
  return (
    <div className="relative">
      <div className="w-[80%] mx-auto">
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
              <div className="w-[5rem] h-[5rem]">
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
  );
}
