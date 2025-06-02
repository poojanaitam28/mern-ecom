import { Button } from "@mui/material";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

function CategoryCollapse() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [subInnerMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (subInnerMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };
  
  return (
    <div className="scroll">
      <ul className="w-full ">
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <Button className="w-full !text-black !justify-start !px-3">
              Fashion
            </Button>
          </Link>
          {subMenuIndex === 0 ? (
            <FaRegSquareMinus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(0)}
            />
          )}
          {subMenuIndex === 0 && (
            <ul className="submenu  w-full pl-3">
              <li className="list-none flex items-center relative flex-col">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-black !justify-start !px-3">
                    Appreals
                  </Button>
                </Link>
                {subInnerMenuIndex === 0 ? (
                  <FaRegSquareMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubMenu(0)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubMenu(0)}
                  />
                )}

                {subInnerMenuIndex === 0 && (
                  <ul className="innerSubmenu w-full pl-3">
                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Apparel
                      </Link>
                    </li>

                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Outerwear
                      </Link>
                    </li>
                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Footwear
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="list-none flex items-center relative">
          <Link to="/" className="w-full">
            <Button className="w-full !text-black !justify-start !px-3">
              Wellness
            </Button>
          </Link>
          {subMenuIndex === 1 ? (
            <FaRegSquareMinus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(1)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(1)}
            />
          )}
          {subMenuIndex === 1 && (
            <ul className="submenu absolute top-[100%] left-0 w-full pl-3">
              <li className="list-none flex items-center relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-black !justify-start !px-3">
                    Appreals
                  </Button>
                </Link>
                {subInnerMenuIndex === 0 ? (
                  <FaRegSquareMinus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubMenu(1)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubMenu(1)}
                  />
                )}

                {subInnerMenuIndex === 1 && (
                  <ul className="innerSubmenu absolute top-[100%] left-0 w-full pl-3">
                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Apparel
                      </Link>
                    </li>

                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Outerwear
                      </Link>
                    </li>
                    <li className="list-none flex items-center relative mb-1">
                      <Link className="link w-full transition !justify-start !px-3">
                        Footwear
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CategoryCollapse;
