import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProfileImageSlider from "../../pages/Dashboard/Sliders/ProfileImageSlider";

export default function SectionHeader() {
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
    <>
      <div className="flex">
        {/* ProfileImage slider */}
        <div className="border border-grey-50 h-fit">
          <ProfileImageSlider></ProfileImageSlider>
        </div>

        {/* ProfileImae slider right start */}
        <div className="pl-4">
          <div className="grid grid-cols-3 pt-4 items-center">
            <div className="col-span-2">
              <div className="flex">
                <img src="/heart.png" alt="" className="w-[60px] h-[60px]" />
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
      </div>

      {/* About person*/}
      <div className="md:flex md:mx-auto border-b-2 border-dotted md:-mt-16 mb-8">
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
        <div className="overflow-x-auto md:ml-10">
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
    </>
  );
}
