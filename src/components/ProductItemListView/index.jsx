import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Button, Rating } from "@mui/material";
import { useContext } from "react";
import { MyContext } from "../../App";

function PrdouctItem() {
  const context = useContext(MyContext);
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg flex items-center">
      <div className="group w-[25%] rounded-2xl overflow-hidden relative bg-red-00 ">
        <div className=" ">
          <img
            src="https://www.jiomart.com/images/product/original/rvyei2suzy/shubhisha-fashion-women-s-green-straight-printed-kurta-with-palazzo-product-images-rvyei2suzy-0-202402270742.jpg?im=Resize=(330,410)"
            alt=""
            className="h-[300px] w-full "
          />
          <img
            src="https://www.jiomart.com/images/product/original/rvyei2suzy/shubhisha-fashion-women-s-green-straight-printed-kurta-with-palazzo-product-images-rvyei2suzy-3-202402270742.jpg?im=Resize=(600,750)"
            alt=""
            className="h-[300px] w-full transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
          />
        </div>
        <span className="discount absolute top-3 left-3 text-white p-1 rounded-md bg-[#ff5252] ">
          10%
        </span>

        <div className="actions absolute -top-36 right-3 z-50 flex flex-col gap-2 items-center justify-center transition-all duration-300 group-hover:top-2  opacity-0 group-hover:opacity-100">
          <Button
            className="hover:!bg-[#ff5252] hover:text-white transition-all text-black !bg-white !w-[35px] !h-[35px] !min-w-[35px] group !rounded-full"
            onClick={() => context.setOpenProdDetailModal(true)}
          >
            <MdZoomOutMap className="!text-black text-[18px] group-hover:text-white hover:!text-white" />
          </Button>
          <Button className="hover:!bg-[#ff5252] hover:text-white transition-all text-black !bg-white !w-[35px] !h-[35px] !min-w-[35px] group !rounded-full">
            <CiHeart className="!text-black text-[18px] group-hover:text-white hover:!text-white" />
          </Button>
          <Button className="hover:!bg-[#ff5252] hover:text-white transition-all text-black !bg-white !w-[35px] h-[35px] !min-w-[35px] group !rounded-full">
            <IoIosGitCompare className="!text-black text-[18px] group-hover:text-white hover:!text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 w-[75%]">
        <h1 className=" text-slate-600 font-light text-xl mb-2">
          <Link to="/">Biba</Link>
        </h1>
        <h3 className="link text-slate-800 leading-6 mb-3 text-2xl ">
          {" "}
          <Link to="/">Shubhisha Fashion Women Green Straight Printed</Link>
        </h3>
        <Rating name="read-only" value={3} readOnly />
        <div className="flex gap-4 text-xl">
          <span className="oldPrice line-through">Rs. 500</span>
          <span className="newPrice text-[#ff5252] font-semibold">Rs. 400</span>
        </div>
        <p className="text-base leading-5 font-light mt-2 mb-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa
          placeat vel eum ad cupiditate fugit ea excepturi nobis quae?
        </p>
        <div>
          <Button className="btnOrg !mt-3 gap-3">
            <FiShoppingCart size={19} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PrdouctItem;
