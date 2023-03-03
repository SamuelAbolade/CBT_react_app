import { QuestionMarkSharp } from '@mui/icons-material';
import { Button, CssVarsProvider } from '@mui/joy';
import React from 'react';
import questions from '../questions.json'


const Instructions = ({ setActiveStep }) => {

    return (
        <>  
        <div className='col-9 col-lg-8 m-auto'>
            <h4 className='m-auto text-center mt-5 fw-bold'>Examination Instructions</h4>
            <div className='mt-3 text-center'>You are provided {questions.length} General Objective questions in this Exam and you are to <strong>answer all</strong> </div><hr />
            <div className='col-12 col-lg-6 m-auto text-center'>You have <strong>30 minutes</strong> to answer all questions. If at any point you're unable to finish on time, you will be automatically submitted.</div>
            <CssVarsProvider className='text-center'>
                <div className='m-auto mt-3 text-center'>
                    <Button className='m-auto px-4' onClick={() => setActiveStep(2)} >Next</Button>
                </div>
            </CssVarsProvider>
        </div>
        </>

    )
}

export default Instructions