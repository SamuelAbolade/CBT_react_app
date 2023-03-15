import React from 'react'
import { useSelector } from 'react-redux'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Answers = () => {
    const { optionReducer: { selectedOptions }, questionControllerReducer: { questions } } = useSelector((state) => (state));

    return (
        <>
            <div className='mt-2'>
                <Stack spacing={1} alignItems="center">
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<CheckCircleIcon />} label="Correct Option" color="success" />
                    <Chip icon={<CancelIcon/>} label="Your wrong Option" className="bg-danger text-light" color='warning'  />
                    </Stack>
                </Stack>
                {questions.map(({ question, answer }, i) =>
                    <div className='mt-3 bg-light p-3 col-lg-8 m-auto border border-2 rounded' key={i}>
                        <div><strong>{i + 1}.</strong> {question}</div>
                        {['A', 'B', 'C', 'D'].map((label, index) => (
                            <div key={index} className='mt-1'>
                                <div className={label === answer ? "alert alert-success p-0 py-1 mb-0 rounded-1" : label == selectedOptions[i] ? "alert alert-danger p-0 py-1 mb-0 rounded-1" : undefined}>
                                    {label}. {questions[i][label]}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}


export default Answers