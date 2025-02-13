import React from "react";
import { Link } from "react-router-dom";
const bg1 = "/strp-tum-u15-bg.png";

export default function Banner() {
  return (
    <>
      <Link to={`/`} target="_blank" className="mt-4 w-full block">
        <div
          className="bg-contain bg-no-repeat min-h-[4rem] w-full relative flex items-center justify-center px-4 sm:px-6"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="absolute h-auto lg:md-[2%] lg:mt-0 md:ml-[4%] md:-mt-4 sm:-mt-[4%] sm:ml-[4%]">
            <p className="text-base sm:text-xs md:text-[14px] lg:text-lg sm:text-[11px]">
              Avail the <strong>Luxury of time</strong> to find your perfect
              partner.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
