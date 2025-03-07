import TopSlider from "./Sliders/TopSlider";
import BigSlider from "./Sliders/BigSlider";
import Banner from "./Shared/Banner";
const bg2 = "/daily7-logo.png";

export default function DailyMatches() {
  return (
    <>
    <div className="hidden sm:block">
      {/* Banner */}
      <Banner></Banner>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-2 items-center md:mt-6">
        <div className="col-span-1 sm:w-[50%] md:w-[50%] sm:mb-8 md:mb-8 mx-auto">
          <div
            className={`bg-no-repeat sm:h-[35px]`}
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>
        </div>
        {/* Slider */}
        <TopSlider></TopSlider>
      </div>

      <div className="bg-gray-50 border border-grey-500 mt-8">
        {/* Big Slider */}
        <div>
          <BigSlider></BigSlider>
        </div>
      </div>
    </div>
    <div className="block sm:hidden">
      <h2 className="text-4xl text-red-700 font-bold">Dailymatch for mobile</h2>
    </div>
    </>
  );
}
