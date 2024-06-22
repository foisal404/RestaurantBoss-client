import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImgI from "../../../assets/banner/Banner01.jpg";
import bannerImgII from "../../../assets/banner/Banner02.jpg";
import bannerImgIII from "../../../assets/banner/Banner03.jpg";
import bannerImgIV from "../../../assets/banner/Banner04.jpg";
import bannerImgV from "../../../assets/banner/Banner05.jpg";
import bannerImgVI from "../../../assets/banner/Banner06.jpg";

const Banner = () => {
  return (
    <div className="z-0">
      <Carousel showArrows={false} autoPlay showStatus={false}>
        <div>
          <img src={bannerImgVI} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgI} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgII} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgIII} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgIV} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgV} className="max-h-[35rem]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
