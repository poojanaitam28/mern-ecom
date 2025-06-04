import { Button, TextField } from "@mui/material";
import { IoEye, IoEyeOff } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-semibold">
            Create your new account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="text"
                className="w-full"
                id="fullName"
                label="Full Name"
                variant="outlined"
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                className="w-full"
                id="email"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full"
                id="password"
                label="Password"
                variant="outlined"
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

            <div className="flex items-center w-full mt-4 mb-3">
              <Button className=" btnOrg btnLg w-full">Register</Button>
            </div>
            <p className=" font-light flex justify-center gap-2 items-center ">
              Already have an account?
              <Link className="link text-[14px] font-[600]" to="/login">
                Login
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

export default SignUp;
