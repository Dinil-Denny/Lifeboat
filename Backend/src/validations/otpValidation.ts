import * as yup from "yup";

//yup schema for otp validation
export const otpValidationSchema = yup.object().shape({
    otp : yup
    .string()
    .required('OTP is required')
    .length(6,'OTP must be 6 digits')
    .matches(/^\d+$/,'OTP must contain only numbers')
});