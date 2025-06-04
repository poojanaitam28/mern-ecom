import { Button, TextField } from "@mui/material";
import { IoEye, IoEyeOff } from "react-icons/io5";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

function Login() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
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
            Login to your account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                className="w-full"
                id="email"
                label="Email"
                variant="outlined"
                name="email"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full"
                id="password"
                label="Password"
                variant="outlined"
                name="password"
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
            <a
              className="link cursor-pointer text-[15px] font-[600] text-slate-700"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>

            <div className="flex items-center w-full mt-4 mb-3">
              <Button className=" btnOrg btnLg w-full">Login</Button>
            </div>
            <p className=" font-light flex justify-center gap-2 items-center ">
              Not Registered?
              <Link className="link text-[14px] font-[600]" to="/register">
                Sigun Up
              </Link>
            </p>

            <p className="text-center font-light mt-3 mb-2">
              Or continue with social account
            </p>

            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btnLg !text-black">
              <FcGoogle className="text-[20px]" />
              Log in With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
