import React from 'react';
import questions from '../questions';
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

const SignIn = () => {

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required').min(8),
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

      <div className='col-12 col-lg-4 bg-lig border shadow col-sm-6  mt-3 rounded p-4  m-auto '>
        <h5 className={`text-primary`} >Sign In</h5>
        <h6 className='mb-4' >Kindly Enter your details to start Exam.</h6>
        <form className='m-auto text-center' onSubmit={signIn}>
            <TextField 
            type={"email"}
            name={"email"}
            value={formik.values.name}
            onChange={formik.handleChange}
             placeholder={"Enter Reg No / Email"
            } className="mt-3 rounded-2 col-12"
            label="Email / Reg No"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )}} />
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