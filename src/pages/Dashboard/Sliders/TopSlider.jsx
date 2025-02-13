import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    { id: 1, image: "https://i.ibb.co.com/h1xbRgC/singapore.png" },
    { id: 2, image: "https://i.ibb.co.com/ySwRy0N/chile.png" },
    { id: 3, image: "https://i.ibb.co.com/WsFFb9z/colombia.png" },
    { id: 4, image: "https://i.ibb.co.com/kcQgsRf/canada.png" },
    { id: 5, image: "https://i.ibb.co.com/drZTzd3/japan.png" },
    { id: 7, image: "https://i.ibb.co.com/dQZT9Gn/china.png" },
    { id: 8, image: "https://i.ibb.co.com/mqNmfBm/germany.png" },
    { id: 9, image: "https://i.ibb.co.com/6RzzWnW/france.png" },
    { id: 10, image: "https://i.ibb.co.com/0q7xhBs/united-states.png" },
    { id: 11, image: "https://i.ibb.co.com/N6TVqpj/united-kingdom.png" },
  ];

export default function TopSlider() {
  return (
    <div className="col-span-2 relative">
      <div className="md:w-[80%] mx-auto">
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
              <div className="rounded-full lg:w-[80px]">
                <img
                  src={image.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
