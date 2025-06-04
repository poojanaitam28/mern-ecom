import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function CartItem(props) {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    } else {
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    } else {
    }
  };

  return (
    <div className="cartItem w-full p-2 flex items-center gap-4 border-b border-[(rgba(0,0,0,0.1)]">
      <div className="img w-[15%] overflow-hidden rounded-md">
        <Link to="/product/1" className="group">
          <img
            className="w-full group-hover:scale-105 transition-all"
            src="https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBkcmVzc3xlbnwwfDF8MHx8fDI%3D"
            alt=""
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <RxCross2 className="cursor-pointer absolute top-0 right-3 text-[22px] link transition-all" />
        <span className="text-[14px] text-slate-700">Sagria</span>
        <h3 className="text-[16px] font-semibold">
          <Link to="/" className="link">
            A-Line Kurti With Sharara & Dupatta
          </Link>
        </h3>

        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[14px] gap-1 font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <FaCaretDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("Xl")}>XL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[14px] gap-1 font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <FaCaretDown />
            </span>
            <Menu
              id="qty-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleCloseQty("1")}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty("2")}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty("3")}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty("4")}>4</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-1">
          <span className="newPrice text-[#ff5252] text-[20px] font-semibold">
            Rs. 400
          </span>
          <span className="oldPrice line-through text-[20px] font-[500]">
            Rs. 500
          </span>

          <span className="newPrice text-[#ff5252] text-[20px] font-semibold">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
