import { Button } from "@mui/material";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

function Navigation() {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="w-[90%] mx-auto py-2">
        <div className="flex ">
          <div className="w-[20%]">
            <Button
              onClick={openCategoryPanel}
              className="w-full gap-3 !text-black"
            >
              <HiMenuAlt1 />
              Shop by Category <FaAngleDown />
            </Button>
          </div>

          <div className="w-[60%]">
            <ul className="flex items-center gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Furnitures</Link>
              </li>
              <li>
                <Link to="/">Fashion</Link>
              </li>
              <li>
                <Link to="/">Wellness</Link>
              </li>
              <li>
                <Link to="/">Travel</Link>
              </li>
            </ul>
          </div>

          <div className="w-[20%] bg-red-00">
            <p className="font-light flex justify-center items-center gap-2">
              <GoRocket />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}  
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
}

export default Navigation;
