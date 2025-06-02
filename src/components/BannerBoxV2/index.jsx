import React from "react";
import { Link } from "react-router-dom";

function BannerBoxV2(props) {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        className="w-full h-[238px] transition-all duration-200 group-hover:scale-105"
        src={props.image}
        alt=""
      />
      <div
        className={`info absolute top-0 p-2 ${
          props.info === "left" ? "left-0" : "right-0"
        } w-[50%] h-[100%] z-50 flex items-center justify-center flex-col`}
      >
        <h2 className="text-xl font-semibold mb-2">Samsung Gear VR Camera</h2>
        <span className="text-xl text-primary font-semibold w-full mb-1">
          $129.00
        </span>
        <div className="w-full">
          <Link className="link underline" to="/">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerBoxV2;
