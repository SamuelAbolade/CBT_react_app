import { QuestionMarkSharp } from '@mui/icons-material';
import { Button, CssVarsProvider } from '@mui/joy';
import React from 'react';
import questions from '../questions.json'


const Instructions = ({ setActiveStep }) => {

    return (
        <>

            <h4 className='m-auto text-center mt-5'>Examination Instructions</h4>
            <div className='mt-3 text-center'>You are provided {questions.length} questions in this Exam and you are to answer all</div><hr />
            <div className='col-10 col-lg-6 m-auto text-center'>You have <strong>30 minutes</strong> to answer all questions. If at any point you're unable to finish on time, you will be automatically submitted</div>
            <CssVarsProvider className='text-center'>
                <div className='m-auto text-center'>
                <Button className='m-auto' onClick={() => setActiveStep(2)} >Next</Button>

                </div>
            </CssVarsProvider>
        </>

    )
}

export default Instructions