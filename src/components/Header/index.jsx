import React from "react";
import { Link, Links } from "react-router-dom";
import Search from "./Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import logo from "../../assets/logo.jpg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  return (
    <header className="bg-white">
      <div className="w-full border-gray-200 border-b border-t">
        <div className="w-[90%] mx-auto p-2 flex">
          <div className="w-1/2">
            <p className="font-light text-base tracking-tight">
              Get up to 50% off new season styles, limited time only
            </p>
          </div>
          <div className="w-1/2 ">
            <ul className="flex justify-end font-light tracking-tight gap-3 text-base">
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/order-tracking">Order Tracking</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full py-4 border-gray-200 border-b ">
        <div className="w-[90%] m-auto p-2 flex">
          <div className="w-[25%] bg-red-00">
            <Link to="/">
              <img className="" src={logo} alt="logo" />{" "}
            </Link>
          </div>
          <div className="w-[45%] bg-red-00">
            <Search />
          </div>
          <div className="w-[30%] bg-red-00 flex justify-end  items-center">
            <ul className="font-light flex items-center gap-2">
              <li>
                <Link to={"/login"}>Log in</Link> |{" "}
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <LuHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
