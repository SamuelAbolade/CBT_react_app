import React from 'react'
import { useSelector } from 'react-redux'
import {Paper, Typography} from '@mui/material';
// import Typography from '@mui/material/Typography';

const CurrentQuestion = () => {
    const {questionControllerReducer:{questions, currentQuestionIndex}} = useSelector((state)=>state)
    return (
        <>        
        <Paper
            square
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                mb: 2,
                // bgcolor: 'background.default',
            }}
        >
            <Typography ><strong>{currentQuestionIndex + 1} </strong>.{questions[currentQuestionIndex].question}</Typography>
        </Paper></>
    )
}

export default CurrentQuestion