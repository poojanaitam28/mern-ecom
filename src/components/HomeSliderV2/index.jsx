import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "@mui/material";

function HomeSliderV2() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center">
              <h1 className="text-xl w-full mb-6">Big Saving Days Sale</h1>
              <h1 className="text-4xl font-semibold w-full ">
                Women Solid Round Green T-Shirt
              </h1>
              <h1 className="flex items-center mt-6 mb-6 text-xl font-semibold w-full gap-3">
                Starting At Only
                <span className="text-primary text-2xl">$59.00</span>
              </h1>
              <div className="w-full">
                <Button className="btnOrg">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center">
              <h1 className="text-xl w-full mb-6">Big Saving Days Sale</h1>
              <h1 className="text-4xl font-semibold w-full ">
                Women Solid Round Green T-Shirt
              </h1>
              <h1 className="flex items-center mt-6 mb-6 text-xl font-semibold w-full gap-3">
                Starting At Only
                <span className="text-primary text-2xl">$59.00</span>
              </h1>
              <div className="w-full">
                <Button className="btnOrg">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSliderV2;
