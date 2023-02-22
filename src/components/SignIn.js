import React from 'react'
import styles from '../styles.module.css'

const SignIn = () => {
    const types = ["text", "email"]
    const FORM_DATA = types.map((type, i) => type)
    return (
        <>
            <div className='col-10 m-auto mt-5'>
                <h4 className={styles['color']} >Welcome Back</h4>
                <h6 className='mb-4' >Sign in and get started.</h6>
                <form className='col-12 m-auto'>
                    {FORM_DATA.map((data, i) => (
                        <input key={i} type={data.type} className="form-control mt-3" />
                    ))}
                    <button className={`col-12 mt-3 btn text-light ${styles["background"]}`}>Create Account</button>
                    <div className='text-center mt-2'><a href=":" className='m-auto text-center text-decoration-none text-dark'>Do not have an account? Signup</a></div>
                </form>
            </div>
        </>
    )
}

export default SignIn