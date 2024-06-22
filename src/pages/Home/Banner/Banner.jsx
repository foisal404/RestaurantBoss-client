import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImgFirst from "../../../assets/banner/Banner01.jpg";
import bannerImgSecond from "../../../assets/banner/Banner02.jpg";
import bannerImgThird from "../../../assets/banner/Banner03.jpg";
import bannerImgForth from "../../../assets/banner/Banner04.jpg";

const Banner = () => {
  return (
    <div className="z-0">
      <Carousel showArrows={false} autoPlay showStatus={false}>
        <div>
          <img src={bannerImgFirst} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgSecond} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgThird} className="max-h-[35rem]" />
        </div>
        <div>
          <img src={bannerImgForth} className="max-h-[35rem]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
