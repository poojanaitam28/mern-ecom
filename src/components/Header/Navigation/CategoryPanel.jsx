import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross2 } from "react-icons/rx";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryCollapse from "../../CategoryCollapse";

function CategoryPanel(props) {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [subInnerMenuIndex, setInnerSubMenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

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

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="categoryPanel"
      // onClick={toggleDrawer(false)}
    >
      <Box className="flex items-center bg-red-00 p-1 justify-between">
        <h1 className=" font-semibold tracking-wide text-lg">
          Shop By Categories
        </h1>
        <RxCross2
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpenCatPanel(false)}
        />
      </Box>

      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;
