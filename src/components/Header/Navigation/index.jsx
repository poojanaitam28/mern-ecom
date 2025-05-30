import { Button } from "@mui/material";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "./style.css";

function Navigation() {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="w-[90%] mx-auto py-2">
        <div className="flex ">
          <div className="w-[20%] bg-red-00">
            <Button
              onClick={openCategoryPanel}
              className=" gap-4  !text-black tracking-wide"
            >
              <HiMenuAlt1 size={19} />
              Shop by Category <FaAngleDown size={17} />
            </Button>
          </div>

          <div className="w-[60%] bg-red-00">
            <ul className="nav flex gap-7">
              <li className="relative">
                <Link to="/">Home</Link>

                <div
                  className="submenu absolute top-[120%] left-[0%] min-w-[300px] bg-white shadow-md 
                opacity-0 transition-all"
                >
                  <ul>
                    <li>
                      <Link to="/">
                        <Button>Men</Button>
                      </Link>

                      <div
                        className="submenu absolute top-[0%] left-[100%] min-w-[300px] bg-white shadow-md 
                opacity-0 transition-all"
                      >
                        <ul>
                          <li className="relative">
                            <Link to="/">
                              <Button>T-shirt</Button>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <Button>Jeans</Button>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <Button>Trouser</Button>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <Button>Tops</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Women</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Kids</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Girls</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
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
            <p className="font-light flex justify-center items-center gap-3">
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
