import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross2 } from "react-icons/rx";

function CategoryPanel(props) {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box className="flex items-center bg-red-00 p-1 justify-between">
        <h1 className=" font-semibold tracking-wide text-lg">
          Shop By Categories
        </h1>
        <RxCross2
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpenCatPanel(false)}
        />
      </Box>
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
