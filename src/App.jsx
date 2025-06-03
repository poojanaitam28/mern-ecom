import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createContext } from "react";
import ProductZoom from "./components/ProductZoom";
import ProductInfo from "./components/ProductInfo";

const MyContext = createContext();

function App() {
  const [openProdDetailModal, setOpenProdDetailModal] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const handleCloseOpenProdDetailModal = () => setOpenProdDetailModal(false);

  const values = {
  setOpenProdDetailModal
};
  return (
    <div>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProdDetailModal}
        onClose={handleCloseOpenProdDetailModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-0 right-0 !bg-[#f1f1f1]">
              <RxCross2 onClick={handleCloseOpenProdDetailModal} size={21} />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] p-8 productContent">
              <ProductInfo />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
export { MyContext };
