import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

function ProductZoom() {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[18%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            navigation={true}
            spaceBetween={0}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[447px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-1 border" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-home_default/brown-bear-printed-sweater.jpg"
                  alt="img"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-1 border" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/122-medium_default/hummingbird-notebook.jpg"
                  alt="img"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "opacity-1 border" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/124-medium_default/hummingbird-notebook.jpg"
                  alt="img"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 3 ? "opacity-1 border" : "opacity-30"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/126-medium_default/hummingbird-notebook.jpg"
                  alt="img"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 4 ? "opacity-1 border" : "opacity-30"
                }`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/127-medium_default/hummingbird-notebook.jpg"
                  alt="img"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[82%]  h-[500px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            navigation={false}
            spaceBetween={0}
          >
            <SwiperSlide>
              <InnerImageZoom
                className="border-2"
                zoomScale={1}
                zoomType="hover"
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                className="border-2"
                zoomScale={1}
                zoomType="hover"
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/122-medium_default/hummingbird-notebook.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                className="border-2"
                zoomScale={1}
                zoomType="hover"
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/124-medium_default/hummingbird-notebook.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                className="border-2"
                zoomScale={1}
                zoomType="hover"
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/126-medium_default/hummingbird-notebook.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                className="border-2"
                zoomScale={1}
                zoomType="hover"
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/127-medium_default/hummingbird-notebook.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductZoom;
