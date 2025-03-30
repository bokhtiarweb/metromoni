import TopSlider from "./Sliders/TopSlider";
import BigSlider from "./Sliders/BigSlider";
import Banner from "./Shared/Banner";
import Dailymatchslider from "../Mobile/MobileDash/Dailymatchslider";
const bg2 = "/daily7-logo.png";

export default function DailyMatches() {
  return (
    <>
      <div className="hidden sm:block">
        {/* Banner */}
        <Banner></Banner>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center md:mt-6">
          {/* Left Section (Image) */}
          <div className="col-span-1 flex justify-center sm:mb-8 md:mb-8">
          <div className="text-left">
            <img src={bg2} alt="Daily match image" />
            <p>Matches for 29th March</p>
          </div>
          </div>
          {/* Slider */}
          <div className="col-span-2">
            <TopSlider />
          </div>
        </div>

        <div className="bg-gray-50 border border-grey-500 mt-8">
          {/* Big Slider */}
          <div>
            <BigSlider></BigSlider>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Dailymatchslider></Dailymatchslider>
      </div>
    </>
  );
}
