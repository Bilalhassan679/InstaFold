import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const passwordSchema = {
  password: yup
    .string()
    .required('Please Enter your password')
    .max(25, 'Password must be less than 25 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Password must match'),
};
const number = yup.object().shape({
  number: yup.string().required('Please Enter your number'),
  // .typeError('Please Enter your number'),
});

const signUpschema = yup.object().shape({
  email: yup
    .string()
    // .email('Email must be valid')
    .required('Please enter your email')
    .min(3, 'Email must be valid')
    .max(50, 'Email must be valid'),
  // .matches(emailRegex, 'email is not Valid'),
  name: yup
    .string()
    .required('Please Enter your fullname')
    .max(100, 'Name must be less than 100 characters')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .min(2, 'Name must be atleast 2 characters')
    .max(50, 'Name must be of 50 characters'),
  // city: yup.string().required('Please Enter Your country'),
  number: yup.string().required('Please enter your number') .
  matches(/^[0-9]+$/, 'Please enter valid number')
  .min(2, 'Number must be atleast 2 characters')

    .max(25, 'Number must be of 25 characters'),


  ...passwordSchema,
});
const logInUpschema = yup.object().shape({
  email: yup
    .string()
    // .email('Email must be valid')
    .min(3, 'Email must be valid')
    .max(50, 'Email must be valid')
    .required('Please Enter your email')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Please enter valid email',
    ),
  password: yup.string().required('Please Enter your password'),
});

const resetPasswordScheme = yup.object().shape({
  password: yup
    .string()
    .required('Please Enter your password')
    .max(25, 'Password must be less than 25 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  new_password: yup
    .string()
    .required('Please Enter your new password')
    .max(25, 'Password must be less than 25 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});






const Schemas = {
  signUp: yupResolver(signUpschema),
  logIn: yupResolver(logInUpschema),

  // loginNumber: yupResolver(numberScheme),
};

export default Schemas;
