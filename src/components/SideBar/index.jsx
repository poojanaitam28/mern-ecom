import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import "../SideBar/style.css";
import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {  Rating } from "@mui/material";

function SideBar() {
  const [isOpenCatFilter, setIsOpenCatFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  return (
    <aside className="sidebar py-">
      <div className="w-[90%] mx-auto box">
        <h1 className="font-semibold mb-2 mt-2 flex items-center pr-4">
          Shop by Categories
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCatFilter(!isOpenCatFilter)}
          >
            {isOpenCatFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h1>

        <Collapse isOpened={isOpenCatFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwaer"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Tablets"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="w-[90%] mx-auto box">
        <h1 className="font-semibold mb-2 mt-2 flex items-center pr-4">
          Availibility
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h1>

        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (19)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (3)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="w-[90%] mx-auto box">
        <h1 className="font-semibold mb-2 mt-2 flex items-center pr-4">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h1>

        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (19)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label=" Medium (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (3)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (23)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (13)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="w-[90%] mx-auto box">
        <h1 className="font-semibold mb-2 mt-2 flex items-center pr-4">
          Filter By Price
        </h1>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-sm">
             <strong>Rs {100}</strong>
          </span>
          <span className="ml-auto text-sm">
             <strong>Rs {5000}</strong>
          </span>
        </div>
      </div>

       <div className="w-[90%] mx-auto box">
        <h1 className="font-semibold mb-2 mt-2 flex items-center pr-4">
          Filter By Rating
        </h1>
        
        <div className="w-full">
         <Rating name="read-only" value={5} size="small" readOnly />
        </div>
        <div className="w-full">
         <Rating name="read-only" value={4} size="small" readOnly />
        </div>
        <div className="w-full">
         <Rating name="read-only" value={3} size="small" readOnly />
        </div>
        <div className="w-full">
         <Rating name="read-only" value={2} size="small" readOnly />
        </div>
        <div className="w-full">
         <Rating name="read-only" value={1} size="small" readOnly />
        </div>

        
      </div>

    </aside>
  );
}

export default SideBar;
