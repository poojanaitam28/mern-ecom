import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

import { Button, Rating } from "@mui/material";

import { useContext } from "react";
import { MyContext } from "../../App"; 


function PrdouctItem() {
  const context = useContext(MyContext);

  return (
    <div className="rounded-2xl overflow-hidden mb-4 mt-4 shadow-lg">
      <div className="group w-full rounded-2xl overflow-hidden relative">
        <div>
          <img
            src="https://www.jiomart.com/images/product/original/rvyei2suzy/shubhisha-fashion-women-s-green-straight-printed-kurta-with-palazzo-product-images-rvyei2suzy-0-202402270742.jpg?im=Resize=(330,410)"
            alt=""
          />
          <img
            src="https://www.jiomart.com/images/product/original/rvyei2suzy/shubhisha-fashion-women-s-green-straight-printed-kurta-with-palazzo-product-images-rvyei2suzy-3-202402270742.jpg?im=Resize=(600,750)"
            alt=""
            className="w-full transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
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
      <div className="info p-3">
        <h1 className=" text-slate-600 font-light">
          <Link to="/">Biba</Link>
        </h1>
        <h3 className="link text-slate-800 leading-5 mb-2">
          {" "}
          <Link to="/">Shubhisha Fashion Women Green Straight Printed</Link>
        </h3>
        <Rating name="read-only" value={3} readOnly />
        <div className="flex gap-4">
          <span className="oldPrice line-through">Rs. 500</span>
          <span className="newPrice text-[#ff5252] font-semibold">Rs. 400</span>
        </div>
      </div>
    </div>
  );
}

export default PrdouctItem;
