import React from 'react'
import { useSelector } from 'react-redux'
import {Paper, Typography} from '@mui/material';
import '../App.css'

const CurrentQuestion = () => {
    const {questionControllerReducer:{questions, currentQuestionIndex}} = useSelector((state)=>state)
    return (
        <div id="unselectable">        
        <Paper 
        
            square
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                mb: 2,
            }}
            className="bg-light"
        >
            <Typography ><strong  >{currentQuestionIndex + 1} </strong>.{ questions[currentQuestionIndex].question }</Typography>
        </Paper></div>
    )
}

export default CurrentQuestion