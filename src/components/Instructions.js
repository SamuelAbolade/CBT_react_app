/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button, CssVarsProvider } from '@mui/joy';
import React from 'react';
import { useSelector } from 'react-redux';



const Instructions = ({ setActiveStep }) => {
    const { questionControllerReducer: { questions } } = useSelector(state => state)
    return (
        <>
            <div className='col-9 col-lg-8 m-auto'>
                <h4 className='m-auto text-center mt-5 fw-bold'>Instructions</h4>
                <div className='mt-3 text-center'>You are provided with <strong>{questions.length}</strong> General questions and you are to <strong>answer all</strong> </div><hr />
                <div className='col-12 col-lg-6 m-auto text-center'>You have <strong>20 minutes</strong> to answer all questions. If at any point you're unable to finish on time, you will be automatically submitted.</div>
                <CssVarsProvider className='text-center'>
                    <div className='m-auto mt-3 mb-5 text-center'>
                        <Button className='m-auto px-4' onClick={() => setActiveStep(2)} >Next</Button>
                    </div>
                </CssVarsProvider>
            </div>
        </>

    )
}

export default Instructions