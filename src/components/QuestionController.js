import React from 'react'
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { handleNext, handleBack } from '../Redux/questionControllerSlice';


const QuestionController = () => {
    const dispatch = useDispatch()
    const { optionReducer: { selectedOptions }, questionControllerReducer: { questions, currentQuestionIndex } } = useSelector((state) => (state));
    const maxSteps = questions.length
    const theme = useTheme()

    const next =()=>{
        dispatch(handleNext())
    }
    const back =()=>{
        dispatch(handleBack())
    }
    return (
        <>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={currentQuestionIndex}
                nextButton={
                    <Button
                        size="small"
                        onClick={next}
                        disabled={currentQuestionIndex === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }

                backButton={
                    <Button size="small" onClick={back} disabled={currentQuestionIndex === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
            {/* <Pagination setActiveCurrentQuestionIndex={setActiveCurrentQuestionIndex} /> */}
        </>
    )
}

export default QuestionController