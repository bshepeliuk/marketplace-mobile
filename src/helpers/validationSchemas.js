import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().required('Required'),
});

export const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('required'),
  email: Yup.string()
    .email('Invalid email')
    .required('required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .required('required')
    .trim(),
  photos: Yup.array().max(6, 'Too Long!'),
  location: Yup.string()
    .required('required')
    .trim(),
  description: Yup.string()
    .required('required')
    .trim(),
  price: Yup.number().required('required'),
});

export const UpdateUserSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, 'too short!')
    .max(20, 'too long!')
    .required('required'),
  location: Yup.string()
    .required('required')
    .trim(),
  phone: Yup.string()
    .required('required')
    .trim(),
});
