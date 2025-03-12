const ResetPasswordOTP = () => {
  return (
    <>
      <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
        <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow">
          <div className="flex flex-col items-center justify-center mb-3">
            <h5 className="my-2">OTP Verification</h5>
          </div>
          {/* reset password form */}
          <form action="#">
            <div className="flex justify-end">
              <div className="my-3">
                <input
                  className="input validator bg-gray-200"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
                <div className="validator-hint hidden">
                  Enter a valid email address
                </div>
              </div>
              <button className="my-3 mx-3 w-32 bg-brand-darkGreen px-3 text-white h-10 rounded">
                Get OTP
              </button>
            </div>
          </form>
          <form action="#1">
            <input
              type="input"
              className="input validator bg-gray-200 mt-4 w-full"
              required
              placeholder="Enter OTP"
            />
            <div className="flex mt-4">
              <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordOTP;
