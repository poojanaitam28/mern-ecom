import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import PrdouctItem from "../ProductItem";

function ProductSlider(props) {
  return (
    <div>
      <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <PrdouctItem />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
