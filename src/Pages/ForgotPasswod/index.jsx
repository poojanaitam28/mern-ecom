import { Button, TextField } from "@mui/material";
import { IoEye, IoEyeOff } from "react-icons/io5";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

function ForgotPasswod() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);
  const [formFields, setFoemFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const forgotPassword = () => {
    context.toastAlertBox("success", "Otp Send");
    history("/verify");
  };
  const context = useContext(MyContext);
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-semibold">
            Forgot Password
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full"
                id="password"
                label="New Password"
                variant="outlined"
                name="name"
              />
              <Button
                className="!absolute !top-[10px] !right-[10px] !rounded-full z-50 !w-[35px] !h-[35px] !min-w-[35px] !text-black"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <IoEye className="text-[19px] opacity-75" />
                ) : (
                  <IoEyeOff className="text-[19px] opacity-75" />
                )}
              </Button>
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow2 === false ? "password" : "text"}
                className="w-full"
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                name="password"
              />

              <Button
                className="!absolute !top-[10px] !right-[10px] !rounded-full z-50 !w-[35px] !h-[35px] !min-w-[35px] !text-black"
                onClick={() => setIsPasswordShow2(!isPasswordShow2)}
              >
                {isPasswordShow2 === true ? (
                  <IoEye className="text-[19px] opacity-75" />
                ) : (
                  <IoEyeOff className="text-[19px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-4 mb-3">
              <Button className=" btnOrg btnLg w-full">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswod;
