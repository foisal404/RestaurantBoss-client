import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

// import Image
import SlideI from "../../../assets/slide/slide1.jpg";
import SlideII from "../../../assets/slide/slide2.jpg";
import SlideIII from "../../../assets/slide/slide3.jpg";
import SlideIV from "../../../assets/slide/slide4.jpg";

export const Category = () => {
  return (
    <div className="py-10 px-28">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SlideI} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideII} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideIII} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideIV} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
