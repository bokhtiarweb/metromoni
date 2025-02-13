import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProfileImageSlider() {
  return (
    <div className="w-36 mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={true}
        thumbWidth={30}
      >
        <div>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </div>
        <div>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </div>
        <div>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </div>
        <div>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </div>
      </Carousel>
    </div>
  );
}
