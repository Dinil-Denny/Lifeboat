
const VerifyOTP = () => {
    return(
        <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
            <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow lg:w-96">
                <div className="flex flex-col items-center justify-center mb-3">
                    <h5 className="my-2">Verify OTP</h5>
                </div>
                <div>
                    <input type="text" placeholder="Enter 4 digit OTP" className="input bg-gray-300" />
                </div>
                <div className="flex mt-4">
                    <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">Sign Up</button>
                </div>
                <div className="flex justify-center mt-4">
                    <p>Didn't receive code? <a href="" style={{textDecoration:'none'}}>Resend</a></p>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP;