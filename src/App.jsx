import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Register from "./Pages/Register";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { createContext } from "react";
import ProductZoom from "./components/ProductZoom";
import ProductInfo from "./components/ProductInfo";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage";
import Verify from "./Pages/Verify";

import toast, { Toaster } from "react-hot-toast";
import ForgotPasswod from "./Pages/ForgotPasswod";

const MyContext = createContext();

function App() {
  const [openProdDetailModal, setOpenProdDetailModal] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const handleCloseOpenProdDetailModal = () => setOpenProdDetailModal(false);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const toastAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(status);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProdDetailModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    toastAlertBox,
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
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPasswod />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster />

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
