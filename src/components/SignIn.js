import React from 'react';
import questions from '../questions';
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const FORM_DATA = [
    { type: "text", name: "email", placeholder: "Email / Examination Number" },
    { type: "password", name: "password", placeholder: "Password" },
  ];

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required').min(8),
    password: Yup.string().required('Required'),
  });
  console.log(validationSchema);

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const navigate = useNavigate()
  console.log(formik.isValid);
  const signIn = (e) => {
    e.preventDefault();
    if (formik.isValid && formik.dirty) {
      navigate("/MainApp")
    } else {
      console.log("Go back");
    }
  }

  return (
    <>

      <div className='col-12 col-lg-4 bg-light col-sm-6 shadow-lg rounded p-4 m-auto mt-5'>
        <h5 className={`mt-4 text-primary`} >Sign In</h5>
        <h6 className='mb-4' >Kindly Sign Up to get started.</h6>
        <form className='m-auto' onSubmit={signIn}>
          {FORM_DATA.map(({ type, name, placeholder }, i) => (
            <Input key={i} type={type} name={name} value={formik.values.name} onChange={formik.handleChange} placeholder={placeholder} className="mt-3 rounded-2" />
          ))}
          <CssVarsProvider >
            <Button type="submit" className='mt-3 w-100' variant="solid" color="primary">
              Start Exam
            </Button>
          </CssVarsProvider>
        </form>
      </div>
    </>
  )
}

export default SignIn