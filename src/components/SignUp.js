import React from 'react'
import styles from '../styles.module.css'

const SignUp = () => {

  const types = ["text", "email", "password"]
  const FORM_DATA = types.map((type, i) => type)
  return (
    <>
      <div className='col-10 m-auto mt-5'>
        <h4 className={styles['color']} >Sign Up</h4>
        <h6 className='mb-4' >Welcome to our Examination portal, Kindly Sign Up to get started.</h6>
        <form className='col-12 m-auto'>
          {FORM_DATA.map((data, i) => (
            <input key={i} type={data.type} className="form-control mt-3" />
          ))}
          <button className={`col-12 mt-3 btn btn-primary text-light ${styles["background"]}`}>Create Account</button>
          <div className='text-center mt-2'><a href=":" className='m-auto text-center text-decoration-none text-dark'>Already have an account? Login</a></div> 
        </form>
      </div>
    </>
  )
}

export default SignUp