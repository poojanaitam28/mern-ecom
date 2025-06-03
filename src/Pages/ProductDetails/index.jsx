import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import { Button, Rating, TextField } from "@mui/material";
import QytBox from "../../components/QytBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import ProductSlider from "../../components/ProductSlider";
import ProductInfo from "../../components/ProductInfo";

function ProductDetails() {
 
  const [isActiveTab, setIsActiveTab] = useState(0);
  return (
    <>
      <div className="py-5 bg-[#f5f0f0]">
        <div className="w-[90%] mx-auto">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              className="link transition text-[15px]"
              underline="hover"
              color="inherit"
              href="/"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition text-[15px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition text-[15px]"
            >
              Apple Stylish Watch for women
            </Link>
            {/* <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography> */}
          </Breadcrumbs>
        </div>
      </div>

      <section className=" bg-white py-5">
        <div className="w-[90%] mx-auto flex  bg-red-00 gap-">
          <div className="productZoomContainer w-[40%] h-[500px] overflow-hidden">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pl-8 mt-8">
            <ProductInfo />
          </div>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="flex items-center gap-8">
            <span
              className={`link text-[18px] cursor-pointer font-[500] transition-all ${
                isActiveTab === 0 ? "text-primary" : ""
              } `}
              onClick={() => setIsActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[18px] cursor-pointer font-[500] transition-all ${
                isActiveTab === 1 ? "text-primary" : ""
              } `}
              onClick={() => setIsActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[18px] cursor-pointer font-[500] transition-all ${
                isActiveTab === 2 ? "text-primary" : ""
              } `}
              onClick={() => setIsActiveTab(2)}
            >
              Reviews
            </span>
          </div>

          {isActiveTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 mt-2 rounded-md">
              <p className="font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus omnis dignissimos nisi rerum distinctio, voluptatem
                recusandae cupiditate, necessitatibus fugit perferendis dolor.
                Veritatis eveniet, explicabo laudantium voluptatem totam
                corrupti vero cum.
              </p>
              <h4 className="font-medium">Lightweight Design</h4>
              <p className="font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus omnis dignissimos nisi rerum distinctio, voluptatem
                recusandae cupiditate, necessitatibus fugit perferendis dolor.
                Veritatis eveniet, explicabo laudantium voluptatem totam
                corrupti vero cum.
              </p>
              <h4 className="font-medium">Lightweight Design</h4>
              <p className="font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus omnis dignissimos nisi rerum distinctio, voluptatem
                recusandae cupiditate, necessitatibus fugit perferendis dolor.
                Veritatis eveniet, explicabo laudantium voluptatem totam
                corrupti vero cum.
              </p>
              <h4 className="font-medium">Lightweight Design</h4>
              <p className="font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus omnis dignissimos nisi rerum distinctio, voluptatem
                recusandae cupiditate, necessitatibus fugit perferendis dolor.
                Veritatis eveniet, explicabo laudantium voluptatem totam
                corrupti vero cum.
              </p>
            </div>
          )}
          {isActiveTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 mt-2 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {isActiveTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 mt-2 rounded-md">
              <div className="w-full productReviewContainer">
                <h2 className="text-lg font-medium">
                  Customer Questions & answer
                </h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[70px] h-[70px] overflow-hidden rounded-full">
                        <img
                          className="w-full"
                          src="https://ctmirror.org/wp-content/uploads/2021/01/dummy-man-570x570-1.png"
                          alt=""
                        />
                      </div>
                      <div className="w-[70%]">
                        <h1 className="text-[16px]">Pooja Naitam</h1>
                        <h1 className="text-[13px] mb-0">2024/12/25</h1>
                        <p className="mb-0 mt-0 font-light text-sm tracking-wide">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Libero beatae consequuntur pariatur sapiente
                          soluta praesentium aliquam ipsum ratione repudiandae
                          asperiores.
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[70px] h-[70px] overflow-hidden rounded-full">
                        <img
                          className="w-full"
                          src="https://ctmirror.org/wp-content/uploads/2021/01/dummy-man-570x570-1.png"
                          alt=""
                        />
                      </div>
                      <div className="w-[70%]">
                        <h1 className="text-[16px]">Pooja Naitam</h1>
                        <h1 className="text-[13px] mb-0">2024/12/25</h1>
                        <p className="mb-0 mt-0 font-light text-sm tracking-wide">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Libero beatae consequuntur pariatur sapiente
                          soluta praesentium aliquam ipsum ratione repudiandae
                          asperiores.
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[70px] h-[70px] overflow-hidden rounded-full">
                        <img
                          className="w-full"
                          src="https://ctmirror.org/wp-content/uploads/2021/01/dummy-man-570x570-1.png"
                          alt=""
                        />
                      </div>
                      <div className="w-[70%]">
                        <h1 className="text-[16px]">Pooja Naitam</h1>
                        <h1 className="text-[13px] mb-0">2024/12/25</h1>
                        <p className="mb-0 mt-0 font-light text-sm tracking-wide">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Libero beatae consequuntur pariatur sapiente
                          soluta praesentium aliquam ipsum ratione repudiandae
                          asperiores.
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] rounded-md">
                  <h2 className="text-[18px] font-medium">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      className="w-full"
                      multiline
                      rows={4}
                      defaultValue="Add a review"
                    />
                    <br />
                    <br />
                    <Rating name="read-only" value={4} />
                    <div className="flex items-center mt-3">
                      <Button className="btnOrg">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-[90%] mx-auto pt-8">
          <h2 className="text-[20px] font-[600]">Related Products</h2>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
