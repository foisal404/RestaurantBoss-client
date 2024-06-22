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
    <div className="z-0 text-center">
      <Carousel showArrows={false} autoPlay showStatus={false}>
        <div className=" max-h-[35rem]">
          <img src={bannerImgVI} className="h-full" />
        </div>
        <div className="max-h-[35rem]">
          <img src={bannerImgI} className="h-full" />
        </div>
        <div className="max-h-[35rem]">
          <img src={bannerImgII} className="h-full" />
        </div>
        <div className="max-h-[35rem]">
          <img src={bannerImgIII} className="h-full" />
        </div>
        <div className="max-h-[35rem]">
          <img src={bannerImgIV} className="h-full" />
        </div>
        <div className="max-h-[35rem]">
          <img src={bannerImgV} className="h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
