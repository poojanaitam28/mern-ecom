import React, { useState } from "react";
import { Button, Rating, TextField } from "@mui/material";
import QytBox from "../../components/QytBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";

function ProductInfo() {
     const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <div>
      <h1 className="text-[24px] font-[600] mb-2">
        Nike Air Max Invigor 'Black' 749680
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[14px]">
          {" "}
          Brand{" "}
          <span className="font-[500] text-black opacity-70 ">
            {" "}
            Weeds Capital
          </span>
        </span>

        <Rating name="read-only" value={4} readOnly />
        <span className="text-[14px] cursor-pointer">Review (5)</span>
      </div>
      <div className="flex gap-4 mt-3">
        <span className="oldPrice line-through text-[20px]">Rs. 500</span>
        <span className="newPrice text-[#ff5252] text-[20px] font-semibold">
          Rs. 400
        </span>
        <span className="text-[15px] flex gap-2 items-center">
          Availabe in Stock :{" "}
          <span className="text-green-600  font-semibold">147 Items</span>
        </span>
      </div>
      <br />
      <p className="font-light text-base leading-5 pr-11 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt
        voluptates vel distinctio error facere, maxime dolores excepturi eius
        ducimus iure rerum vero dicta! Numquam, minus. Corrupti quaerat nisi
        aliquam!
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[17px]">Size :</span>
        <div className="flex items-center gap-3 actions">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>

      <p className="text-[15px] tracking-wide mt-4 mb-4">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center gap-4">
        <div className="qtyBoxWrapper w-[75px]">
          <QytBox />
        </div>
        <Button className="btnOrg flex gap-2">
          <MdOutlineShoppingCart size={19} /> Add to cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[400]">
          <LuHeart />
          Add to Wishlist
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[400]">
          <IoIosGitCompare />
          Add to Comapre
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
