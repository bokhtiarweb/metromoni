import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
const cat = "/cat.jpg";

export default function PageContentGrid() {
  return (
    <>
      <div className="mt-4">
        {/* Header section start here */}
        <div className="pt-2">
          <div>
            <div className="mt-2">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* Profile Image-1 */}
                <div className="h-fit text-center border border-gray-200 hover:shadow-lg">
                  {/* User ID */}
                  <div className="flex items-center px-2">
                    <input type="checkbox" className="peer min-h-0 ml-2 mr-2" />
                    <strong className="mr-2 text-lg text-blue-400">
                      BGD1883935
                    </strong>
                  </div>
                  <div className="h-[200px] p-3">
                    <div className="h-[100%] relative group">
                      <img src={cat} alt="" className="h-[100%] object-fill" />
                      {/* Overlay for "2 more photos" text */}
                      <div className="h-5 bg-slate-600 absolute bottom-0 right-0 left-0 justify-center items-center hidden group-hover:block">
                        <p className="text-white text-xs">2 more photos</p>
                      </div>
                    </div>
                  </div>
                  {/* Personal information */}
                  <div className="text-sm border-b-2 border-dotted border-grey-50 pb-2">
                    <p>Jhon Henry</p>
                    <p>20 yrs, 5 ft 4 in / 162 cm</p>
                    <p>Bangladesh</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                    >
                      View full profile...
                    </a>
                  </div>
                  {/* Mail phone no viewprofile start */}
                  <div className="flex items-center justify-center gap-3 py-4">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Interest"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile end */}
                </div>
                {/* Profile Image-2 */}
                <div className="h-fit text-center border border-gray-200 hover:shadow-lg">
                  {/* User ID */}
                  <div className="flex items-center px-2">
                    <input type="checkbox" className="peer min-h-0 ml-2 mr-2" />
                    <strong className="mr-2 text-lg text-blue-400">
                      BGD1883935
                    </strong>
                  </div>
                  <div className="h-[200px] p-3">
                    <img src={cat} alt="" className="h-[100%] object-fill" />
                  </div>
                  {/* Personal information */}
                  <div className="text-sm border-b-2 border-dotted border-grey-50 pb-2">
                    <p>Jhon Henry</p>
                    <p>20 yrs, 5 ft 4 in / 162 cm</p>
                    <p>Bangladesh</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                    >
                      View full profile...
                    </a>
                  </div>
                  {/* Mail phone no viewprofile start */}
                  <div className="flex items-center justify-center gap-3 py-4">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Interest"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile end */}
                </div>
                {/* Profile Image-3 */}
                <div className="h-fit text-center border border-gray-200 hover:shadow-lg">
                  {/* User ID */}
                  <div className="flex items-center px-2">
                    <input type="checkbox" className="peer min-h-0 ml-2 mr-2" />
                    <strong className="mr-2 text-lg text-blue-400">
                      BGD1883935
                    </strong>
                  </div>
                  <div className="h-[200px] p-3">
                    <img src={cat} alt="" className="h-[100%] object-fill" />
                  </div>
                  {/* Personal information */}
                  <div className="text-sm border-b-2 border-dotted border-grey-50 pb-2">
                    <p>Jhon Henry</p>
                    <p>20 yrs, 5 ft 4 in / 162 cm</p>
                    <p>Bangladesh</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                    >
                      View full profile...
                    </a>
                  </div>
                  {/* Mail phone no viewprofile start */}
                  <div className="flex items-center justify-center gap-3 py-4">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Interest"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile end */}
                </div>
                {/* Profile Image-4 */}
                <div className="h-fit text-center border border-gray-200 hover:shadow-lg">
                  {/* User ID */}
                  <div className="flex items-center px-2">
                    <input type="checkbox" className="peer min-h-0 ml-2 mr-2" />
                    <strong className="mr-2 text-lg text-blue-400">
                      BGD1883935
                    </strong>
                  </div>
                  <div className="h-[200px] p-3">
                    <img src={cat} alt="" className="h-[100%] object-fill" />
                  </div>
                  {/* Personal information */}
                  <div className="text-sm border-b-2 border-dotted border-grey-50 pb-2">
                    <p>Jhon Henry</p>
                    <p>20 yrs, 5 ft 4 in / 162 cm</p>
                    <p>Bangladesh</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                    >
                      View full profile...
                    </a>
                  </div>
                  {/* Mail phone no viewprofile start */}
                  <div className="flex items-center justify-center gap-3 py-4">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Interest"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile end */}
                </div>
                {/* Profile Image-5 */}
                <div className="h-fit text-center border border-gray-200 hover:shadow-lg">
                  {/* User ID */}
                  <div className="flex items-center px-2">
                    <input type="checkbox" className="peer min-h-0 ml-2 mr-2" />
                    <strong className="mr-2 text-lg text-blue-400">
                      BGD1883935
                    </strong>
                  </div>
                  <div className="h-[200px] p-3">
                    <img src={cat} alt="" className="h-[100%] object-fill" />
                  </div>
                  {/* Personal information */}
                  <div className="text-sm border-b-2 border-dotted border-grey-50 pb-2">
                    <p>Jhon Henry</p>
                    <p>20 yrs, 5 ft 4 in / 162 cm</p>
                    <p>Bangladesh</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                    >
                      View full profile...
                    </a>
                  </div>
                  {/* Mail phone no viewprofile start */}
                  <div className="flex items-center justify-center gap-3 py-4">
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Shortlist her"
                    >
                      <a href="#" target="_blank">
                        <FaPersonCircleCheck className="text-white"></FaPersonCircleCheck>
                      </a>
                    </div>
                    <div
                      className="w-10 h-10 bg-blue-400 rounded-full border flex justify-center items-center tooltip"
                      data-tip="Send Interest"
                    >
                      <a href="#" target="_blank">
                        <FaEnvelope className="text-white"></FaEnvelope>
                      </a>
                    </div>
                  </div>
                  {/* Mail phone no viewprofile end */}
                </div>
              </div>
            </div>
          </div>

          {/* ProfileImage slider right start */}
        </div>
        {/* Header secton end here */}
      </div>
    </>
  );
}
