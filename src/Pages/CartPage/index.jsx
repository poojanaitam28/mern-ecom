import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartItem from "./CartItem";

function CartPage() {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2</span>
                products in your cart
              </p>
            </div>

            <CartItem size="S" qty="1" />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <br />
            <p className="flex items-center justify-between mb-2">
              <span className="text-[15px] font-[500]">Subtotal</span>
              <span className="text-[15px] font-[500] text-primary">
                94,000
              </span>
            </p>

            <p className="flex items-center justify-between mb-2">
              <span className="text-[15px] font-[500]">Shipping</span>
              <span className="text-[15px] font-[500] ">Free</span>
            </p>

            <p className="flex items-center justify-between mb-2">
              <span className="text-[15px] font-[500]">Coupon</span>
              <span className="text-[15px] font-[500] ">Free</span>
            </p>
            <hr />
            <br />
            <Button className="btnOrg btnLg w-full flex gap-2">Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
