import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

function HomeCatSlider() {
  return (
    <div className="">
      <div className="w-[90%] mx-auto mt-4">
        <Swiper
          slidesPerView={7}
          navigation={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
       
          modules={[Navigation ]}
          className="homeCatSlider"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1748451387_1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1748451387_1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1748451387_1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1748451387_1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-md flex flex-col items-center justify-center ">
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1748451387_1.jpg?im=Resize=(368,452)"
                  alt="category"
                  className="hover:scale-105 transition-all w-28 "
                />
                <h3 className="font-semibold">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
         
      
     
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCatSlider;
