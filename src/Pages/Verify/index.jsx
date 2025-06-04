import React, { useState } from "react";
import OtpBox from "../../components/OtpBox";
import { Button } from "@mui/material";

function Verify() {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img
              width="80"
              src="https://cdn-icons-png.freepik.com/256/540/540773.png?uid=R203045360&ga=GA1.1.2100011829.1732618920&semt=ais_hybrid"
              alt=""
            />
          </div>
          <h3 className="text-center text-[18px] text-black font-semibold mt-4 mb-5">
            Verify Otp
          </h3>

          <p className="text-center mt-0 mb-4">
            OTP send to{" "}
            <span className="text-primary font-semibold">
              demoemail@gmail.com
            </span>
          </p>

          <form className="" onSubmit={verifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center mt-5 px-9 mb-3">
              <Button type="submit" className="w-full btnOrg btnLg">
                Verify otp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verify;
