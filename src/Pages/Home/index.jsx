import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";

import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-[#f5f0f0]">
      {/* <HomeSlider /> */}
      <section className="py-6">
        <div className="w-[90%] mx-auto flex bg-red-00 gap-4">
          <div className="part1 w-[75%]">
            <HomeSliderV2 />
          </div>
          <div className="part2 w-[30%] flex flex-col justify-between">
            <BannerBoxV2
              info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
            />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <br></br>

      <section className="bg-white mt-3 py-6">
        <div className="w-[90%] mx-auto  ">
          <div className="flex justify-between items-center">
            <div className="w-1/2  ">
              <h1 className="text-2xl font-semibold">Popular Products</h1>
              <p className="text-base font-light tracking-wide">
                Do not iss the current offer until the end of March
              </p>
            </div>
            <div className="w-1/2">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion " />
                <Tab label="Electronics " />
                <Tab label="Footwear " />
                <Tab label="Groceries " />
                <Tab label="Wellness " />
                <Tab label="Beauty " />
                <Tab label="Bags " />
                <Tab label="Jewellary " />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="py-3 bg-white">
        <div className="w-[90%] mx-auto ">
          <div className="w-full p-5 flex border-2 border-[#ff5252] items-center justify-between rounded-md">
            <div className="flex items-center gap-4">
              <FaShippingFast size={32} />
              <span className="font-bold text-2xl uppercase">
                Free Shipping
              </span>
            </div>

            <div className="text-lg">
              <p>Free Delivery Now On Your First Order and over $200</p>
            </div>

            <p className="font-bold text-2xl">
              -Only $200<sup>*</sup>
            </p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className=" bg-white">
        <div className="w-[90%] mx-auto">
          <h1 className="text-2xl font-semibold">Latest Products</h1>
          <ProductSlider items={5} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className=" bg-white">
        <div className="w-[90%] mx-auto">
          <h1 className="text-2xl font-semibold">Featured Products</h1>
          <ProductSlider items={5} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className=" bg-white">
        <div className="w-[90%] mx-auto bg-red-00">
          <h1 className="text-2xl font-semibold">From the Blog</h1>
          <Swiper
            slidesPerView={3}
            navigation={true}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Home;
