import { useState, useEffect } from "react";

const VerifyOTP = () => {
  const [countdownTimer, setCountdownTimer] = useState(120);
  const [resendVisible, setResendVisible] = useState(false);

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

  const handleResend = () => {
    console.log("clicked resend otp");
    //reset timer
    setCountdownTimer(120);
    setResendVisible(false);
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
        <form action="">
          <div>
            <input
              type="text"
              placeholder="Enter 4 digit OTP"
              className="input bg-gray-300"
            />
          </div>
          <div className="flex mt-4">
            <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          {!resendVisible ? (
            <p>Resend OTP in {formatTime(countdownTimer)}</p>
          ) : (
            // <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded" onClick={handleResend}>Resend OTP</button>
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
