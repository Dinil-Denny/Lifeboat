
const ResetPassword = () => {
    return(
        <>  
        <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
            <div className="bg-white mx-auto my-5 px-5 py-3 w-96 rounded shadow">
                <div className="flex flex-col items-center justify-center mb-3">
                    <h5 className="my-2">Reset Password</h5>
                </div>
                {/* reset password form */}
                <form action="#">
                    <div className="my-3">
                        <input type="password" className="input validator bg-gray-200" required placeholder="Enter new password" minLength={8} 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br/>At least one number
                            <br/>At least one lowercase letter
                            <br/>At least one uppercase letter
                        </p>
                    </div>
                    <div className="my-3">
                        <input type="password" className="input validator bg-gray-200" required placeholder="Confirm password" minLength={8} 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br/>At least one number
                            <br/>At least one lowercase letter
                            <br/>At least one uppercase letter
                        </p>
                    </div>
                    <div className="flex mt-4">
                        <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default ResetPassword;