import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import api from "@/axios";
import { useState } from "react";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);

  type FormFields = {
    email: string;
    password: string;
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("admin data: ", data);
    //const response = await api.post("/admin/login", data);
    toast.success("Login successful");
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* admin email */}
            <div className="my-3">
              <input
                {...register("email")}
                className="input validator bg-gray-200"
                type="email"
                placeholder="Enter email"
              />
              <div className="text-red-500 text-sm">
                {errors.email?.message}
              </div>
            </div>
            {/* admi password */}
            <div className="my-3">
              <input
                {...register("password")}
                type="password"
                className="input validator bg-gray-200"
                placeholder="Password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
            <div className="flex my-5">
              {/* submit button */}
              <button
                type="submit"
                className="bg-brand-darkGreen mx-auto text-white h-10 w-full rounded"
              >
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
