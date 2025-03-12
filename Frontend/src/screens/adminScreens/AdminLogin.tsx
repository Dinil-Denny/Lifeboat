const AdminLogin = () => {
  return (
    <>
      <div className="h-screen bg-brand-darkGreen flex justify-center items-center">
        <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow">
          <div className="flex flex-col items-center justify-center my-4">
            <h5 className="my-2">Admin Login</h5>
            <p className="text-sm text-center">
              Please enter your email and password to continue
            </p>
          </div>
          <form action="">
            <div>
              <input
                className="input validator bg-gray-200"
                type="email"
                required
                placeholder="Enter email"
              />
              <div className="validator-hint">Enter valid email address</div>
            </div>
            <div>
              <input
                type="password"
                className="input validator bg-gray-200"
                required
                placeholder="Password"
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
            </div>
            <div className="flex my-5">
              <button className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
