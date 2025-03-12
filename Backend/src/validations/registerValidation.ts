import * as yup from 'yup';

//yup schema for user registration validation
export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z][A-Za-z0-9\-]*$/, 'Only letters, numbers, or dash')
    .min(3, 'minimum 3 characters required')
    .max(30, 'maximum 30 charachters only')
    .required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Must contain at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/\d/, 'Must contain at least one number')
    .required('Password is required'),
});
