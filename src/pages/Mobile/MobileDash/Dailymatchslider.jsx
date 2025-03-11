import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";

const images = [
  "https://global.matrimonycdn.com/membersphoto/common/2021/01/11/02/BGD996971_iuf189_TS_2.jpg",
  "https://global.matrimonycdn.com/membersphoto/common/2020/12/27/18/BGD969153_qBQ587_TS_2.jpg",
  "https://global.matrimonycdn.com/membersphoto/common/2021/01/09/11/BGD994792_HYn27_TS_6.jpg",
];

export default function Dailymatchslider() {
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
    <div className="relative w-full max-w-sm mx-auto overflow-hidden">
      <div className="py-2 flex items-center gap-2 text-[14px]">
        <FaArrowLeft></FaArrowLeft>
        <span>Daily match 2/7</span>
      </div>
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-none w-full h-[500px] snap-center"
          >
            <div className="bg-black px-2 opacity-6 absolute left-0 bottom-0">
              <p className="text-white">Faizana Islam (BGD3557632)</p>
              <p className="text-white">
                18yrs, 5 ft 2 in / 157 cm, Sunni, Unmarried, Dhaka, Bangladesh
              </p>
              <div className="bg-white p-2 flex justify-around">
                <span className="">Interest in her? </span>
                <div className="flex gap-2">
                  <button className="btn btn-sm bg-slate-400 text-white">No</button>
                  <button className="btn btn-sm bg-green-500 text-white">Yes</button>
                </div>
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
  );
}
