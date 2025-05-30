import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="py-5">
      <div className="w-[90%] mx-auto">
        <Swiper
          spaceBetween={20}
          navigation={true}
               autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
          modules={[Navigation, Autoplay]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                className="w-full "
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
                alt="banner photo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="item rounded-[20px] overflow-hidden">
            <img
              className="w-full h-1/2 rounded-3xl"
              src="https://images.unsplash.com/photo-1577538928305-3807c3993047?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3BwaW5nJTIwc2FsZSUyMG9mZmVyJTIwYmFubmVyfGVufDB8fDB8fHwy"
              alt="banner photo"
            />
             </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="item rounded-[20px] overflow-hidden">
            <img
              className="w-full h-1/2 rounded-3xl"
              src="https://images.unsplash.com/photo-1593238404535-cda7ae2fe50b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBiYW5uZXJ8ZW58MHx8MHx8fDI%3D"
              alt="banner photo"
            />
             </div>
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
