import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import banner4 from "../../assets/banner4.webp";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

function AdsBannerSlider(props) {
  return (
    <div>
      <div className="py-10">
        <Swiper
          slidesPerView={props.items}
          navigation={true}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <BannerBox img={banner1} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner2} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner3} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner4} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner1} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner2} link="/" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={banner3} link="/" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AdsBannerSlider;
