import React from "react";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PrdouctItem from "../../components/ProductItemListView";
import Pagination from "@mui/material/Pagination";

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

function ProductListing() {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 pb-0">
      <div className="w-[90%] mx-auto">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            className="link transition"
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
            className="link transition"
          >
            Fashion
          </Link>
          {/* <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography> */}
        </Breadcrumbs>
      </div>

      <div className="bg-white py-2 mt-3">
        <div className="w-[90%] mx-auto flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="rightCorner w-[80%] py-2">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "grid" && "active"
                  }`}
                >
                  <CiGrid41
                    className="text-[rgba(0,0,0,0.7)] text-xl "
                    onClick={() => setItemView("grid")}
                  />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "list" && "active"
                  }`}
                >
                  <CiGrid2H
                    className="text-[rgba(0,0,0,0.7)] text-xl "
                    onClick={() => setItemView("list")}
                  />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end gap-4 pr-2">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By :
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-[13px] !text-[#000] !capitalize"
                  >
                    Sales, Higesht to lowest
                  </Button>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[14px] !text-[#000]"
                    >
                      Relevence
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[14px] !text-[#000]"
                    >
                      Name, A to Z
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[14px] !text-[#000]"
                    >
                      Name, Z to A
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[14px] !text-[#000]"
                    >
                      Price, low to high
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[14px] !text-[#000]"
                    >
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </span>
              </div>
            </div>

            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1 "
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>

            <div className="mt-10 flex items-center justify-center">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductListing;
