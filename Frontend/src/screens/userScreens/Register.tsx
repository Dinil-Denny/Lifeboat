import { UserIcon } from "@heroicons/react/24/solid";

const Register = () => {
    return(
        <>
        <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
            <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow lg:w-96">
                <div className="flex flex-col items-center justify-center mb-3">
                    <UserIcon className="w-9"/>
                    <h5 className="my-2">Create an account</h5>
                </div>
                <form action="">
                    <div className="my-3">
                        <input type="input" name="name" className="input validator bg-gray-200" required placeholder="Enter Username" 
                            pattern="[A-Za-z][A-Za-z0-9\-]*" minLength={3} maxLength={30} title="Only letters, numbers or dash" />
                        <p className="validator-hint hidden">
                            Must be 3 to 30 characters
                            <br/>containing only letters, numbers or dash
                        </p>
                    </div>
                    <div className="my-3">
                        <input className="input validator bg-gray-200" name="email" type="email" required placeholder="Enter your email" />
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <div className="my-3">
                        <input type="password" name="password" className="input validator bg-gray-200" required placeholder="Enter Password" minLength={8} 
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
                        <input type="password" name="password" className="input validator bg-gray-200" required placeholder="Confirm password" minLength={8} 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br/>At least one number
                            <br/>At least one lowercase letter
                            <br/>At least one uppercase letter
                        </p>
                    </div>
                    <div className="flex mt-5">
                        <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">Get OTP</button>
                    </div>
                </form>
                <div className="flex w-full flex-col">
                    <div className="divider text-xs">OR</div>   
                </div>
                <div className="flex">
                    <button className="flex items-center justify-center w-full h-10 px-6 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded focus:shadow-outline hover:bg-blue-700">
                        <img src="/src/assets/google.svg" className="w-5 mr-3" alt="" />Sign in with Google
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <p>Already have an account ? <a href="">Login</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;