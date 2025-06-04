import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiChat2 } from "react-icons/ci";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io5";
import { TbArrowsExchange2 } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../App";
import { RxCross2 } from "react-icons/rx";

import Drawer from "@mui/material/Drawer";

function Footer() {
  const context = useContext(MyContext);
  return (
    <>
      <footer>
        <div className="py-8 bg-white">
          <div className="w-[90%] mx-auto p-14 border-slate-300 border-t border-b">
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center items-center group">
                <FaTruck className="text-5xl group-hover:text-[#ff5252] transition-all duration-300 cursor-pointer group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p className="font-">For all Orders Over $100</p>
              </div>
              <div className="flex flex-col justify-center items-center group">
                <TbArrowsExchange2 className="text-5xl group-hover:text-[#ff5252] transition-all duration-300 cursor-pointer group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold"> 30 Days Returns</h3>
                <p className="font-">For an Exchange Product</p>
              </div>
              <div className="flex flex-col justify-center items-center group">
                <MdPayment className="text-5xl group-hover:text-[#ff5252] transition-all duration-300 cursor-pointer group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold"> Secured Payment</h3>
                <p className="font-">Payment Cards Accepted</p>
              </div>
              <div className="flex flex-col justify-center items-center group">
                <FaGift className="text-5xl group-hover:text-[#ff5252] transition-all duration-300 cursor-pointer group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold">Special Gifts</h3>
                <p className="font-">Our First Product Order</p>
              </div>
              <div className="flex flex-col justify-center items-center group">
                <BiSupport className="text-5xl group-hover:text-[#ff5252] transition-all duration-300 cursor-pointer group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold">Support 24/7</h3>
                <p className="font-">Contact us Anytime</p>
              </div>
            </div>
          </div>

          <div className="footer w-[90%] mx-auto flex py-8 ">
            <div className="part1 w-[25%] border-r border-slate-300">
              <h2 className="text-xl font-bold">Contact us</h2>
              <p className="font-light mt-4 mb-3">
                LassyShop - Mega Super Mart Sore
                <br /> 507 Union Trade Center,
                <br /> France
              </p>
              <Link to="/" className="">
                sales@company.com
              </Link>
              <span className="block w-full mt-3 text-[#ff5252] font-bold text-lg">
                (+91) 98753 63543
              </span>
              <div className="flex items-center gap-3 mt-3">
                <CiChat2 className="text-4xl text-[#ff5252]" />
                <span className="font-semibold leading-5">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[45%] flex  bg-red-00">
              <div className="part2_col1 flex flex-col w-1/2 items-center  bg-red-00">
                <h2 className="text-xl font-bold mb-3">Products </h2>
                <ul>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      contact us
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 flex flex-col w-1/2   bg-red-00 ">
                <h2 className="text-xl font-bold mb-3">Our Company </h2>
                <ul>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Terms and Condition
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      About us
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none w-full mb-2">
                    <Link className="link hover:underline" to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[30%] flex flex-col bg-red-00  ">
              <h2 className="text-xl font-bold mb-2 ">
                Subscribe to Newsletter{" "}
              </h2>
              <p className="font-light mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti.
              </p>
              <form className="">
                <input
                  className="w-full border outline-none h-[45px] mb-4 mt-2 p-2 rounded-sm"
                  type="text"
                  placeholder="Enter your email"
                />
                <Button className="!bg-[#ff5252] !text-white !mb-4 !p-2">
                  SUBSCRIBE
                </Button>
              </form>
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontWeight: 300,
                    wordSpacing: 1.3,
                    lineHeight: 1.3,
                    fontFamily: "Fraunces",
                  },
                }}
                control={
                  <Checkbox
                    sx={{
                      color: "orange",
                      "&.Mui-checked": {
                        color: "#ff5252",
                      },
                    }}
                  />
                }
                label="I agree to the terms and Conditions and privacy policy"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.8)] bg-white py-6">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(0,0,0,0.1)] flex justify-center items-center group transition-all hover:bg-[#ff5252]"
              >
                <IoLogoPinterest className="text-2xl group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(0,0,0,0.1)] flex justify-center items-center group transition-all hover:bg-[#ff5252]"
              >
                <FaInstagram className="text-2xl group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(0,0,0,0.1)] flex justify-center items-center group transition-all hover:bg-[#ff5252]"
              >
                <FaFacebookF className="text-2xl group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(0,0,0,0.1)] flex justify-center items-center group transition-all hover:bg-[#ff5252]"
              >
                <FaGithub className="text-2xl group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p>Copyright 2024. All rights reserved</p>

          <div className="flex items-center gap-1">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/carte_bleue.png"
              alt=""
            />
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/visa.png"
              alt=""
            />
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/master_card.png"
              alt=""
            />
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/american_express.png"
              alt=""
            />
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/paypal.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Drawer
        anchor={"right"}
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        className=" cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 border-b border-[rgba(0,0,0,0.1)]">
          <h4>Shopping Cart (1)</h4>
          <RxCross2
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>

        <div className="scroll w-full max-h-[410px] overflow-y-scroll overflow-x-hidden py-3 px-4">
          <div className="cartItem w-full flex items-center gap-4 border p-2 rounded-md mb-3">
            <div className="img w-[30%] overflow-hidden h-[100px] rounded-md ">
              <Link to="/product/1" className="block group">
                <img
                  className="w-full group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1657903566145-23efc479fa52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBkcmVzc3xlbnwwfDF8MHx8fDI%3D"
                  alt=""
                />
              </Link>
            </div>
            <div className="info w-[70%] pr-5 relative">
              <h4 className="text-[14px] font-[500]">
                <Link to="/product/1" className="link transition-all">
                  A-Line Kurti With Sharara & Dupatta
                </Link>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>
              <MdOutlineDeleteOutline className="absolute bottom-[2px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border p-2 rounded-md mb-3">
            <div className="img w-[30%] overflow-hidden h-[100px] rounded-md ">
              <Link to="/product/1" className="block group">
                <img
                  className="w-full group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1657903566145-23efc479fa52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBkcmVzc3xlbnwwfDF8MHx8fDI%3D"
                  alt=""
                />
              </Link>
            </div>
            <div className="info w-[70%] pr-5 relative">
              <h4 className="text-[14px] font-[500]">
                <Link to="/product/1" className="link transition-all">
                  A-Line Kurti With Sharara & Dupatta
                </Link>
              </h4>
              <p className="flex items-center gap-5">
                <span>
                  Qty : <span>2</span>
                </span>
                <span className="text-primary font-bold">Price : $25</span>
              </p>
              <MdOutlineDeleteOutline className="absolute bottom-[2px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
        </div>

        <div className="bottomSec absolute bottom-5  w-full">
          <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center  flex-col gap-2">
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-medium">1 item</span>
              <span className="text-primary font-bold">$86.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-medium"> Shipping</span>
              <span className="text-primary font-bold">$7.00</span>
            </div>
          </div>

          <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center  flex-col gap-2">
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-medium">1 item</span>
              <span className="text-primary font-bold">$86.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-medium"> Shipping</span>
              <span className="text-primary font-bold">$7.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-medium"> Shipping</span>
              <span className="text-primary font-bold">$7.00</span>
            </div>
            <div className="flex items-center justify-between w-full gap-5">
              <Link to="/cart" className="w-[50%] d-block">
                <Button className="btnLg btnOrg w-full">View Cart</Button>
              </Link>
              <Link to="/checkout" className="w-[50%] d-block">
                <Button className="btnLg btnOrg w-full">Checkout </Button>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Footer;
