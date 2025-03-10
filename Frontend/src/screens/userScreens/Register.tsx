import { UserIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const Register = () => {

  type FormFields = {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .matches(/^[A-Za-z][A-Za-z0-9\-]*$/, "Only letters, numbers, or dash")
      .min(3, "Must be at least 3 characters")
      .max(30, "Cannot exceed 30 characters")
      .required("User name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {register,handleSubmit,formState: { errors }} = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("Form Data:", data);
    
  };

  return (
    <div className="bg-brand-blue flex justify-center items-center w-full full-screen">
      <div className="bg-white mx-auto my-5 px-5 py-3 rounded shadow lg:w-96">
        <div className="flex flex-col items-center justify-center mb-3">
          <UserIcon className="w-9" />
          <h5 className="my-2">Create an account</h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="my-3">
            <input
              {...register("userName")}
              type="text"
              className="input validator bg-gray-200"
              placeholder="Enter Username"
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
          </div>

          {/* Email Field */}
          <div className="my-3">
            <input
              {...register("email")}
              className="input validator bg-gray-200"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500  text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="my-3">
            <input
              {...register("password")}
              type="password"
              className="input validator bg-gray-200"
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="my-3">
            <input
              {...register("confirmPassword")}
              type="password"
              className="input validator bg-gray-200"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex mt-5">
            <button type="submit" className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded">
              Get OTP
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex w-full flex-col">
          <div className="divider text-xs">OR</div>
        </div>

        {/* Google Sign-in */}
        <div className="flex">
          <button className="flex items-center justify-center w-full h-10 px-6 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded focus:shadow-outline hover:bg-blue-700">
            <img src="/src/assets/google.svg" className="w-5 mr-3" alt="Google Icon" />
            Sign in with Google
          </button>
        </div>

        {/* Login Redirect */}
        <div className="flex justify-center mt-4">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
