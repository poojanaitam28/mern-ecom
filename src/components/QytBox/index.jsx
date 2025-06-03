import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function QytBox() {
  const [qtyVal, setQtyVal] = useState(1);
  const qtyPlus = () => {
    setQtyVal(qtyVal + 1);
  };
  const qtyMinus = () => {
    if (qtyVal === 1) {
      setQtyVal(1);
    } else setQtyVal(qtyVal - 1);
  };
  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] pl-5 p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
      />
      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
        <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-black !rounded-none hover:!bg-[#f1f1f1]">
          <FaAngleUp onClick={qtyPlus} className="opacity-55 text-[12px]" />
        </Button>
        <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-black !rounded-none hover:!bg-[#f1f1f1]">
          <FaAngleDown onClick={qtyMinus} className="opacity-55 text-[12px]" />
        </Button>
      </div>
    </div>
  );
}

export default QytBox;
