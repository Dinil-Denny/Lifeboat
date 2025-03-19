import React from "react";
import api from "../../axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const VerifyOTP: React.FC = () => {
  type InputOtp = {
    otp: string;
  };

  const [countdownTimer, setCountdownTimer] = useState(60);
  const [resendVisible, setResendVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (countdownTimer === 0) {
      setResendVisible(true);
      return;
    }
    const timer = setInterval(() => {
      setCountdownTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdownTimer]);

  //otp input validation
  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .required("OTP is required")
      .length(6, "OTP must be 6 digits")
      .matches(/^\d+$/, "OTP must contain only numbers"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputOtp>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<InputOtp> = async (data) => {
    try {
      console.log("submitted otp:", data);
      const otp = data.otp;
      const email = localStorage.getItem("userEmail");
      console.log("email:", email);
      const response = await api.post("/verify-otp", { otp, email });
      console.log("otp verification res:", response);
      if(response.status === 200){
        toast.success(response.data.message);
        localStorage.removeItem('userEmail');
        navigate("/login");
      }
    } catch (error: any) {
      console.log("Error!:", error);
      toast.error(error.response.data.message);
    }
  };

  const handleResend = async () => {
    console.log("clicked resend otp");
    //reset timer
    setCountdownTimer(60);
    setResendVisible(false);
    console.log(
      "userEmail in localstorage: ",
      localStorage.getItem("userEmail")
    );
    const email = localStorage.getItem("userEmail");
    toast.success("OTP resend successfully");
    await api.post("/resend-otp", { email });
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
      <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow lg:w-96">
        <div className="flex flex-col items-center justify-center mb-3">
          <h5 className="my-2">Verify OTP</h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("otp")}
              type="text"
              placeholder="Enter 4 digit OTP"
              className="input bg-gray-300"
            />
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
            )}
          </div>
          <div className="flex mt-4">
            <button
              type="submit"
              className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          {!resendVisible ? (
            <p>Resend OTP in {formatTime(countdownTimer)}</p>
          ) : (
            <p>
              Didn't receive code?{" "}
              <a
                onClick={handleResend}
                className="font-medium text-brand-blue"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Resend
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
