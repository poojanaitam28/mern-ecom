import { Button } from "@mui/material";
import React from "react";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

function BlogItem() {
  return (
    <div className="w-full bg-red-00 mt-4 flex justify-between">
      <div className="group ">
        <div className="w-full overflow-hidden rounded-md cursor-pointer relative">
          <img
            className="w-full transition-all group-hover:scale-105"
            src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHwwfDB8fHwy"
            alt="blog image"
          />
          <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] gap-2 bg-[#ff5252] p-1 rounded-md">
            <IoIosTimer size={21} />5 APRIL, 2023
          </span>
        </div>
        <div className="py-2 bg-[#f9f6f6] bg-opacity-70">
          <h2 className="text-lg font-semibold mb-1">Digital Marketing Blog</h2>
          <p className="text-base leading-5 font-light mt-1 mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum.
            hgdcudygcdccd hgc gdugc y...
          </p>
          <Link to="/" className="link hover:underline flex items-center ">
            Read More
            <IoChevronForward />
          </Link>
        </div>
      </div>
    
    </div>
  );
}

export default BlogItem;
